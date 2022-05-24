const { House, Specification, sequelize, Image } = require("../models/index");
class HouseController {
  static async getAllHouses(req, res, next) {
    try {
      const { userId } = req.query;
      let options;
      if (userId) {
        options = {
          where: { userId },
          include: [Specification, Image],
        };
      } else {
        options = {
          include: [Specification, Image],
        };
      }
      const houses = await House.findAll(options);
      if (houses.length === 0) {
        throw {
          name: "Not Found",
          message: "House not found",
        };
      }
      res.status(200).json(houses);
    } catch (err) {
      next(err);
    }
  }
  static async getHouseById(req, res, next) {
    try {
      const house = await House.findOne({
        where: { id: req.params.id },
        include: [Specification, Image],
      });
      if (!house) {
        throw {
          name: "Not Found",
          message: "House not found",
        };
      }
      res.status(200).json(house);
    } catch (err) {
      next(err);
    }
  }
  static async createHouse(req, res, next) {
    const t = await sequelize.transaction();
    const userId = req.user.id;
    let {
      title,
      price,
      description,
      location,
      instalment,
      latitude,
      longitude,
      luasTanah,
      luasBangunan,
      certificate,
      dayaListrik,
      totalBedroom,
      totalBathroom,
    } = req.body;

    console.log(req.body, "=====");

    try {
      const house = await House.create(
        {
          title,
          price,
          description,
          location,
          instalment,
          latitude,
          longitude,
          userId,
        },
        { transaction: t }
      );

      let Images = req.uploadImages;
      console.log(Images, "xxxxxxx");

      // Specifications.houseId = house.id;
      const houseId = house.id;
      Images.map((el) => (el.houseId = house.id));
      await Specification.create(
        {
          luasTanah,
          luasBangunan,
          certificate,
          dayaListrik,
          totalBedroom,
          totalBathroom,
          houseId,
        },
        { transaction: t }
      );
      await Image.bulkCreate(Images, { transaction: t });
      await t.commit();
      res.status(201).json(house);
    } catch (err) {
      console.log(err);
      await t.rollback();
      next(err);
    }
  }
  static async updateHouse(req, res, next) {
    const t = await sequelize.transaction();
    let {
      title,
      price,
      description,
      location,
      instalment,
      latitude,
      longitude,
      luasTanah,
      luasBangunan,
      certificate,
      dayaListrik,
      totalBedroom,
      totalBathroom,
    } = req.body;
    try {
      const houseUpdate = await House.update(
        {
          title,
          price,
          description,
          location,
          instalment,
          latitude,
          longitude,
        },
        { where: { id: req.params.id }, transaction: t }
      );
      const findHouse = await House.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (!findHouse) {
        throw {
          name: "Not Found",
          message: "House not found",
        };
      }
      let Images = req.uploadImages;
      // Specifications.houseId = req.params.id;
      const houseId = findHouse.id;
      Images.map((el) => (el.houseId = findHouse.id));
      await Specification.destroy({
        where: { houseId: req.params.id },
        transaction: t,
      });
      await Image.destroy({
        where: { houseId: req.params.id },
        transaction: t,
      });
      await Specification.create(
        {
          luasTanah,
          luasBangunan,
          certificate,
          dayaListrik,
          totalBedroom,
          totalBathroom,
          houseId,
        },
        { transaction: t }
      );
      await Image.bulkCreate(Images, { transaction: t });
      await t.commit();

      res.status(200).json({
        message: `House with id ${req.params.id} succesfully updated`,
        data: findHouse,
      });
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }
  static async deleteHouse(req, res, next) {
    const { id } = req.params;
    try {
      const house = await House.findByPk(id);
      if (!house) {
        throw {
          name: "Not Found",
          message: "House not found",
        };
      }
      await house.destroy({ where: { id } });
      res.status(200).json({ message: "House deleted" });
    } catch (err) {
      next(err);
    }
  }

  
  static async getPricePrediction(req, res, next) {
    try {
      const { longitude, latitude, totalBedroom, totalBathroom } = req.body;

      const houseData = await House.findAll({
        attributes: ["price", "longitude", "latitude"],
        include: {
          model: Specification,
          attributes: ["totalBedroom", "totalBathroom"],
        },
        raw: true,
        nest: true,
      });

      // console.log(houseData[0]);

      const brain = require("brain.js");
      const config = {
        inputSize: 20,
        inputRange: 20,
        hiddenLayers: [20, 20],
        outputSize: 20,
        learningRate: 0.01,
        decayRate: 0.999,
      };
      const net = new brain.recurrent.GRU();

      const dataTrain = houseData.map((e) => {
        return {
          input: [
            e.longitude,
            e.Specification.totalBedroom,
            e.Specification.totalBathroom,
          ],
          output: [+e.price],
        };
      });

      await net.train(dataTrain, {
        iterations: 50,
        log: (detail) => console.log(detail),
      });

      // console.log(dataTrain);
      let output = await net.run([longitude, totalBedroom, totalBathroom]);
      // console.log(output);
      if (output > 1400000000) {
        const newNum = output.toString();
        const arr = newNum.split("");
        arr.pop();
        output = arr.join("");
      }

      res.status(200).json({ data: output });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = HouseController;
