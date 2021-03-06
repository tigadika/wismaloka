const request = require("supertest");
const app = require("../app");
const appUser = require("../../users/app");
const { House } = require("../models");

beforeAll(async () => {
  await House.destroy({ truncate: true, cascade: true, restartIdentity: true });
});

let access_token = null;

describe("failed test for get houses feature", () => {
  test("should return data not found when there is no houses data", async () => {
    const res = await request(app).get("/houses");
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message", "Not Found");
  });
});

//! penanda
describe("acceptance test for create house feature", () => {
  test("should return res status of 201 and new house data with access_token", async () => {
    const payloadLogin = {
      password: "123456",
      email: "testAdmin1@gmail.com",
    };

    const loginAdmin = await request(appUser)
      .post("/users/login")
      .send(payloadLogin);
    expect(loginAdmin.status).toBe(200);

    access_token = loginAdmin.body.access_token;
    const payload = {
      title: "Jual Rumah1",
      price: "10000000001",
      description: "dijual rumah1",
      location: "jakarta",
      instalment: "10000",
      longitude: -6.844345390408558,
      latitude: -6.844345390408559,
      userId: 1,
      houseId: 1,
      luasTanah: 100,
      luasBangunan: 80,
      certificate: "SHM",
      dayaListrik: 300,
      totalBedroom: 3,
      totalBathroom: 2,
    };
    const res = await request(app)
      .post("/houses")
      .set("access_token", access_token)
      .field("title", payload.title)
      .field("price", payload.price)
      .field("description", payload.description)
      .field("location", payload.location)
      .field("instalment", payload.instalment)
      .field("longitude", payload.longitude)
      .field("latitude", payload.latitude)
      .field("userId", payload.userId)
      .field("luasTanah", payload.luasTanah)
      .field("luasBangunan", payload.luasBangunan)
      .field("certificate", payload.certificate)
      .field("dayaListrik", payload.dayaListrik)
      .field("totalBedroom", payload.totalBedroom)
      .field("totalBathroom", payload.totalBathroom)
      .attach("Images", "./Capture.PNG");

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("title");
  });
});

describe("failed test for create house feature", () => {
  // test("should return res status of 401 when creating house without access_token", async () => {
  //   const payload = {
  //     title: "Jual Rumah1",
  //     price: "10000000001",
  //     description: "dijual rumah1",
  //     location: "jakarta",
  //     instalment: "10000",
  //     coordinate: ["124145", "12414"],
  //     userId: 1,
  //     houseId: 1,
  //     luasTanah: 100,
  //     luasBangunan: 80,
  //     certificate: "SHM",
  //     dayaListrik: 300,
  //     totalBedroom: 3,
  //     totalBathroom: 2,
  //   };
  //   const res = await request(app)
  //     .post("/houses")
  //     .field("title", payload.title)
  //     .field("price", payload.price)
  //     .field("description", payload.description)
  //     .field("location", payload.location)
  //     .field("instalment", payload.instalment)
  //     .field("coordinate", payload.coordinate)
  //     .field("userId", payload.userId)
  //     .field("Specifications[luasTanah]", payload.luasTanah)
  //     .field("Specifications[luasBangunan]", payload.luasBangunan)
  //     .field("Specifications[certificate]", payload.certificate)
  //     .field("Specifications[dayaListrik]", payload.dayaListrik)
  //     .field("Specifications[totalBedroom]", payload.totalBedroom)
  //     .field("Specifications[totalBathroom]", payload.totalBathroom)
  //     .attach("Images", "./Capture.PNG");

  //   expect(res.status).toBe(401);
  //   expect(res.body).toHaveProperty("message", "JsonWebTokenError");
  // });

  test("should return error message of Title is required when not provided with title", async () => {
    const payload = {
      title: "",
      price: "10000000001",
      description: "dijual rumah1",
      location: "jakarta",
      instalment: "10000",
      longitude: -6.844345390408558,
      latitude: -6.844345390408559,
      userId: 1,
      houseId: 1,
      luasTanah: 100,
      luasBangunan: 80,
      certificate: "SHM",
      dayaListrik: 300,
      totalBedroom: 3,
      totalBathroom: 2,
    };
    const res = await request(app)
      .post("/houses")
      .set("access_token", access_token)
      .field("title", payload.title)
      .field("price", payload.price)
      .field("description", payload.description)
      .field("location", payload.location)
      .field("instalment", payload.instalment)
      .field("longitude", payload.longitude)
      .field("latitude", payload.latitude)
      .field("userId", payload.userId)
      .field("luasTanah", payload.luasTanah)
      .field("luasBangunan", payload.luasBangunan)
      .field("certificate", payload.certificate)
      .field("dayaListrik", payload.dayaListrik)
      .field("totalBedroom", payload.totalBedroom)
      .field("totalBathroom", payload.totalBathroom)
      .attach("Images", "./Capture.PNG");

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message", "Title is required");
  });

  test("should return error message of Price is required when not provided with Price", async () => {
    const payload = {
      title: "test",
      price: "",
      description: "dijual rumah1",
      location: "jakarta",
      instalment: "10000",
      longitude: -6.844345390408558,
      latitude: -6.844345390408559,
      userId: 1,
      houseId: 1,
      luasTanah: 100,
      luasBangunan: 80,
      certificate: "SHM",
      dayaListrik: 300,
      totalBedroom: 3,
      totalBathroom: 2,
    };
    const res = await request(app)
      .post("/houses")
      .set("access_token", access_token)
      .field("title", payload.title)
      .field("price", payload.price)
      .field("description", payload.description)
      .field("location", payload.location)
      .field("instalment", payload.instalment)
      .field("longitude", payload.longitude)
      .field("latitude", payload.latitude)
      .field("userId", payload.userId)
      .field("luasTanah", payload.luasTanah)
      .field("luasBangunan", payload.luasBangunan)
      .field("certificate", payload.certificate)
      .field("dayaListrik", payload.dayaListrik)
      .field("totalBedroom", payload.totalBedroom)
      .field("totalBathroom", payload.totalBathroom)
      .attach("Images", "./Capture.PNG");

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message", "Price is required");
  });

  test("should return error message of Description is required when not provided with Description", async () => {
    const payload = {
      title: "test",
      price: "10000000001",
      description: "",
      location: "jakarta",
      instalment: "10000",
      longitude: -6.844345390408558,
      latitude: -6.844345390408559,
      userId: 1,
      houseId: 1,
      luasTanah: 100,
      luasBangunan: 80,
      certificate: "SHM",
      dayaListrik: 300,
      totalBedroom: 3,
      totalBathroom: 2,
    };
    const res = await request(app)
      .post("/houses")
      .set("access_token", access_token)
      .field("title", payload.title)
      .field("price", payload.price)
      .field("description", payload.description)
      .field("location", payload.location)
      .field("instalment", payload.instalment)
      .field("longitude", payload.longitude)
      .field("latitude", payload.latitude)
      .field("userId", payload.userId)
      .field("luasTanah", payload.luasTanah)
      .field("luasBangunan", payload.luasBangunan)
      .field("certificate", payload.certificate)
      .field("dayaListrik", payload.dayaListrik)
      .field("totalBedroom", payload.totalBedroom)
      .field("totalBathroom", payload.totalBathroom)
      .attach("Images", "./Capture.PNG");

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message", "Description is required");
  });

  test("should return error message of Location is required when not provided with Location", async () => {
    const payload = {
      title: "test",
      price: "10000000001",
      description: "dijual rumah1",
      location: "",
      instalment: "10000",
      longitude: -6.844345390408558,
      latitude: -6.844345390408559,
      userId: 1,
      houseId: 1,
      luasTanah: 100,
      luasBangunan: 80,
      certificate: "SHM",
      dayaListrik: 300,
      totalBedroom: 3,
      totalBathroom: 2,
    };
    const res = await request(app)
      .post("/houses")
      .set("access_token", access_token)
      .field("title", payload.title)
      .field("price", payload.price)
      .field("description", payload.description)
      .field("location", payload.location)
      .field("instalment", payload.instalment)
      .field("longitude", payload.longitude)
      .field("latitude", payload.latitude)
      .field("userId", payload.userId)
      .field("luasTanah", payload.luasTanah)
      .field("luasBangunan", payload.luasBangunan)
      .field("certificate", payload.certificate)
      .field("dayaListrik", payload.dayaListrik)
      .field("totalBedroom", payload.totalBedroom)
      .field("totalBathroom", payload.totalBathroom)
      .attach("Images", "./Capture.PNG");

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message", "Location is required");
  });

  test("should return error message of Instalment is required when not provided with Instalment", async () => {
    const payload = {
      title: "test",
      price: "10000000001",
      description: "dijual rumah1",
      location: "jakarta",
      instalment: "",
      longitude: -6.844345390408558,
      latitude: -6.844345390408559,
      userId: 1,
      houseId: 1,
      luasTanah: 100,
      luasBangunan: 80,
      certificate: "SHM",
      dayaListrik: 300,
      totalBedroom: 3,
      totalBathroom: 2,
    };
    const res = await request(app)
      .post("/houses")
      .set("access_token", access_token)
      .field("title", payload.title)
      .field("price", payload.price)
      .field("description", payload.description)
      .field("location", payload.location)
      .field("instalment", payload.instalment)
      .field("longitude", payload.longitude)
      .field("latitude", payload.latitude)
      .field("userId", payload.userId)
      .field("luasTanah", payload.luasTanah)
      .field("luasBangunan", payload.luasBangunan)
      .field("certificate", payload.certificate)
      .field("dayaListrik", payload.dayaListrik)
      .field("totalBedroom", payload.totalBedroom)
      .field("totalBathroom", payload.totalBathroom)
      .attach("Images", "./Capture.PNG");

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message", "Instalment is required");
  });

  test("should return error message of Coordinate is required when not provided with Latitude", async () => {
    const payload = {
      title: "test",
      price: "10000000001",
      description: "dijual rumah1",
      location: "jakarta",
      instalment: "10000",
      longitude: -6.844345390408558,
      latitude: "",
      userId: 1,
      houseId: 1,
      luasTanah: 100,
      luasBangunan: 80,
      certificate: "SHM",
      dayaListrik: 300,
      totalBedroom: 3,
      totalBathroom: 2,
    };
    const res = await request(app)
      .post("/houses")
      .set("access_token", access_token)
      .field("title", payload.title)
      .field("price", payload.price)
      .field("description", payload.description)
      .field("location", payload.location)
      .field("instalment", payload.instalment)
      .field("longitude", payload.longitude)
      .field("latitude", payload.latitude)
      .field("userId", payload.userId)
      .field("luasTanah", payload.luasTanah)
      .field("luasBangunan", payload.luasBangunan)
      .field("certificate", payload.certificate)
      .field("dayaListrik", payload.dayaListrik)
      .field("totalBedroom", payload.totalBedroom)
      .field("totalBathroom", payload.totalBathroom)
      .attach("Images", "./Capture.PNG");

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message", "latitude is required");
  });

  test("should return error message of 500 internal server error when attached more than 5 images", async () => {
    const payload = {
      title: "",
      price: "10000000001",
      description: "dijual rumah1",
      location: "jakarta",
      instalment: "10000",
      longitude: -6.844345390408558,
      latitude: -6.844345390408559,
      userId: 1,
      houseId: 1,
      luasTanah: 100,
      luasBangunan: 80,
      certificate: "SHM",
      dayaListrik: 300,
      totalBedroom: 3,
      totalBathroom: 2,
    };
    const res = await request(app)
      .post("/houses")
      .set("access_token", access_token)
      .field("title", payload.title)
      .field("price", payload.price)
      .field("description", payload.description)
      .field("location", payload.location)
      .field("instalment", payload.instalment)
      .field("longitude", payload.longitude)
      .field("latitude", payload.latitude)
      .field("userId", payload.userId)
      .field("luasTanah", payload.luasTanah)
      .field("luasBangunan", payload.luasBangunan)
      .field("certificate", payload.certificate)
      .field("dayaListrik", payload.dayaListrik)
      .field("totalBedroom", payload.totalBedroom)
      .field("totalBathroom", payload.totalBathroom)
      .attach("Images", "./Capture.PNG")
      .attach("Images", "./Capture.PNG")
      .attach("Images", "./Capture.PNG")
      .attach("Images", "./Capture.PNG")
      .attach("Images", "./Capture.PNG")
      .attach("Images", "./Capture.PNG");

    expect(res.status).toBe(500);
  });

  test("should return error message of image is required when image is not provided", async () => {
    const payload = {
      title: "test",
      price: "10000000001",
      description: "dijual rumah1",
      location: "jakarta",
      instalment: "10000",
      longitude: -6.844345390408558,
      latitude: -6.844345390408558,
      userId: 1,
      houseId: 1,
      luasTanah: 100,
      luasBangunan: 80,
      certificate: "SHM",
      dayaListrik: 300,
      totalBedroom: 3,
      totalBathroom: 2,
    };
    const res = await request(app)
      .post("/houses")
      .set("access_token", access_token)
      .field("title", payload.title)
      .field("price", payload.price)
      .field("description", payload.description)
      .field("location", payload.location)
      .field("instalment", payload.instalment)
      .field("longitude", payload.longitude)
      .field("latitude", payload.latitude)
      .field("userId", payload.userId)
      .field("luasTanah", payload.luasTanah)
      .field("luasBangunan", payload.luasBangunan)
      .field("certificate", payload.certificate)
      .field("dayaListrik", payload.dayaListrik)
      .field("totalBedroom", payload.totalBedroom)
      .field("totalBathroom", payload.totalBathroom);

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message", "image is required");
  });
});

describe("acceptance test for get houses feature", () => {
  test("should return houses table without access_token", async () => {
    const res = await request(app).get("/houses");
    expect(res.status).toBe(200);
    expect(res.body[0]).toHaveProperty("title");
    expect(res.body[0]).toHaveProperty("price");
    expect(res.body[0]).toHaveProperty("description");
    expect(res.body[0]).toHaveProperty("location");
    expect(res.body[0]).toHaveProperty("instalment");
    expect(res.body[0]).toHaveProperty("latitude");
    expect(res.body[0]).toHaveProperty("longitude");
    expect(res.body[0]).toHaveProperty("userId");
  });

  test("should return houses table without access_token and with query paramaters", async () => {
    const res = await request(app).get("/houses").query({ userId: 2 });
    expect(res.status).toBe(200);
    expect(res.body[0]).toHaveProperty("title");
    expect(res.body[0]).toHaveProperty("price");
    expect(res.body[0]).toHaveProperty("description");
    expect(res.body[0]).toHaveProperty("location");
    expect(res.body[0]).toHaveProperty("instalment");
    expect(res.body[0]).toHaveProperty("latitude");
    expect(res.body[0]).toHaveProperty("longitude");
    expect(res.body[0]).toHaveProperty("userId");
  });

  //! Penanda Bang
  test("should return houses table without access_token and with query search", async () => {
    const res = await request(app)
      .get("/houses")
      .query({ search: "Jual Rumah1" });
    expect(res.status).toBe(200);
    expect(res.body[0]).toHaveProperty("title");
    expect(res.body[0]).toHaveProperty("price");
    expect(res.body[0]).toHaveProperty("description");
    expect(res.body[0]).toHaveProperty("location");
    expect(res.body[0]).toHaveProperty("instalment");
    expect(res.body[0]).toHaveProperty("latitude");
    expect(res.body[0]).toHaveProperty("longitude");
    expect(res.body[0]).toHaveProperty("userId");
  });

  test("should return houses table without access_token and with query totalBedroom", async () => {
    const res = await request(app).get("/houses").query({ totalBedroom: 3 });
    expect(res.status).toBe(200);
    expect(res.body[0]).toHaveProperty("title");
    expect(res.body[0]).toHaveProperty("price");
    expect(res.body[0]).toHaveProperty("description");
    expect(res.body[0]).toHaveProperty("location");
    expect(res.body[0]).toHaveProperty("instalment");
    expect(res.body[0]).toHaveProperty("latitude");
    expect(res.body[0]).toHaveProperty("longitude");
    expect(res.body[0]).toHaveProperty("userId");
  });

  test("should return houses table without access_token and with query totalBathroom", async () => {
    const res = await request(app).get("/houses").query({ totalBathroom: 2 });
    expect(res.status).toBe(200);
    expect(res.body[0]).toHaveProperty("title");
    expect(res.body[0]).toHaveProperty("price");
    expect(res.body[0]).toHaveProperty("description");
    expect(res.body[0]).toHaveProperty("location");
    expect(res.body[0]).toHaveProperty("instalment");
    expect(res.body[0]).toHaveProperty("latitude");
    expect(res.body[0]).toHaveProperty("longitude");
    expect(res.body[0]).toHaveProperty("userId");
  });

  test("should return houses table without access_token and with query price", async () => {
    const res = await request(app)
      .get("/houses")
      .query({ price: "10000000001" });
    expect(res.status).toBe(200);
    expect(res.body[0]).toHaveProperty("title");
    expect(res.body[0]).toHaveProperty("price");
    expect(res.body[0]).toHaveProperty("description");
    expect(res.body[0]).toHaveProperty("location");
    expect(res.body[0]).toHaveProperty("instalment");
    expect(res.body[0]).toHaveProperty("latitude");
    expect(res.body[0]).toHaveProperty("longitude");
    expect(res.body[0]).toHaveProperty("userId");
  });

  test("should return houses table without access_token and with query location", async () => {
    const res = await request(app)
      .get("/houses")
      .query({ location: "jakarta" });
    expect(res.status).toBe(200);
    expect(res.body[0]).toHaveProperty("title");
    expect(res.body[0]).toHaveProperty("price");
    expect(res.body[0]).toHaveProperty("description");
    expect(res.body[0]).toHaveProperty("location");
    expect(res.body[0]).toHaveProperty("instalment");
    expect(res.body[0]).toHaveProperty("latitude");
    expect(res.body[0]).toHaveProperty("longitude");
    expect(res.body[0]).toHaveProperty("userId");
  });
});

describe("acceptance test for get houses by id feature", () => {
  test("should return spesific house data without access_token", async () => {
    const res = await request(app).get("/houses/1");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("title");
    expect(res.body).toHaveProperty("price");
    expect(res.body).toHaveProperty("description");
    expect(res.body).toHaveProperty("location");
    expect(res.body).toHaveProperty("instalment");
    expect(res.body).toHaveProperty("latitude");
    expect(res.body).toHaveProperty("longitude");
    expect(res.body).toHaveProperty("userId");
  });
});

describe("failed test for get house by id feature", () => {
  test("should return data not found when there is no spesific house data", async () => {
    const res = await request(app).get("/houses/3");
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message", "Not Found");
  });
});

describe("acceptance test for update house feature", () => {
  test("should return res status of 200 and new house data with access_token", async () => {
    const payload = {
      title: "Jual Rumah1",
      price: "10000000001",
      description: "dijual rumah1",
      location: "jakarta",
      instalment: "10000",
      longitude: -6.844345390408558,
      latitude: -6.844345390408558,
      userId: 1,
      houseId: 1,
      luasTanah: 100,
      luasBangunan: 80,
      certificate: "SHM",
      dayaListrik: 300,
      totalBedroom: 3,
      totalBathroom: 2,
    };
    const res = await request(app)
      .put("/houses/1")
      .set("access_token", access_token)
      .field("title", payload.title)
      .field("price", payload.price)
      .field("description", payload.description)
      .field("location", payload.location)
      .field("instalment", payload.instalment)
      .field("longitude", payload.longitude)
      .field("latitude", payload.latitude)
      .field("userId", payload.userId)
      .field("luasTanah", payload.luasTanah)
      .field("luasBangunan", payload.luasBangunan)
      .field("certificate", payload.certificate)
      .field("dayaListrik", payload.dayaListrik)
      .field("totalBedroom", payload.totalBedroom)
      .field("totalBathroom", payload.totalBathroom)
      .attach("Images", "./Capture.PNG");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty(
      "message",
      "House with id 1 succesfully updated"
    );
  });
});

describe("failed test for update house feature", () => {
  // test("should return res status of 401 when accessed without access_token", async () => {
  //   const payload = {
  //     title: "Jual Rumah1",
  //     price: "10000000001",
  //     description: "dijual rumah1",
  //     location: "jakarta",
  //     instalment: "10000",
  //     coordinate: ["124145", "12414"],
  //     userId: 1,
  //     houseId: 1,
  //     luasTanah: 100,
  //     luasBangunan: 80,
  //     certificate: "SHM",
  //     dayaListrik: 300,
  //     totalBedroom: 3,
  //     totalBathroom: 2,
  //   };
  //   const res = await request(app)
  //     .put("/houses/1")
  //     .field("title", payload.title)
  //     .field("price", payload.price)
  //     .field("description", payload.description)
  //     .field("location", payload.location)
  //     .field("instalment", payload.instalment)
  //     .field("coordinate", payload.coordinate)
  //     .field("userId", payload.userId)
  //     .field("Specifications[luasTanah]", payload.luasTanah)
  //     .field("Specifications[luasBangunan]", payload.luasBangunan)
  //     .field("Specifications[certificate]", payload.certificate)
  //     .field("Specifications[dayaListrik]", payload.dayaListrik)
  //     .field("Specifications[totalBedroom]", payload.totalBedroom)
  //     .field("Specifications[totalBathroom]", payload.totalBathroom)
  //     .attach("Images", "./Capture.PNG");

  //   expect(res.status).toBe(401);
  //   expect(res.body).toHaveProperty("message", "JsonWebTokenError");
  // });

  test("should return res status of 404 when data with defined id is not found", async () => {
    const payload = {
      title: "Jual Rumah1",
      price: "10000000001",
      description: "dijual rumah1",
      location: "jakarta",
      instalment: "10000",
      coordinate: ["124145", "12414"],
      userId: 1,
      houseId: 1,
      luasTanah: 100,
      luasBangunan: 80,
      certificate: "SHM",
      dayaListrik: 300,
      totalBedroom: 3,
      totalBathroom: 2,
    };
    const res = await request(app)
      .put("/houses/150")
      .set("access_token", access_token)
      .field("title", payload.title)
      .field("price", payload.price)
      .field("description", payload.description)
      .field("location", payload.location)
      .field("instalment", payload.instalment)
      .field("coordinate", payload.coordinate)
      .field("userId", payload.userId)
      .field("Specifications[luasTanah]", payload.luasTanah)
      .field("Specifications[luasBangunan]", payload.luasBangunan)
      .field("Specifications[certificate]", payload.certificate)
      .field("Specifications[dayaListrik]", payload.dayaListrik)
      .field("Specifications[totalBedroom]", payload.totalBedroom)
      .field("Specifications[totalBathroom]", payload.totalBathroom)
      .attach("Images", "./Capture.PNG");

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message", "Not Found");
  });

  test("should return res status of 500 when specification data not provided", async () => {
    const payload = {
      title: "Jual Rumah1",
      price: "10000000001",
      description: "dijual rumah1",
      location: "jakarta",
      instalment: "10000",
      longitude: -6.844345390408558,
      latitude: -6.844345390408559,
      userId: 1,
      houseId: 1,
      luasTanah: 100,
      luasBangunan: 80,
      certificate: "SHM",
      dayaListrik: 300,
      totalBedroom: 3,
      totalBathroom: 2,
    };
    const res = await request(app)
      .put("/houses/1")
      .set("access_token", access_token)
      .field("title", payload.title)
      .field("price", payload.price)
      .field("description", payload.description)
      .field("location", payload.location)
      .field("instalment", payload.instalment)
      .field("longitude", payload.longitude)
      .field("latitude", payload.latitude)
      .field("userId", payload.userId)
      .attach("Images", "./Capture.PNG");

    expect(res.status).toBe(400);
  });
});

describe("acceptance test for delete house feature", () => {
  test("should return message House deleted when house is succesfully deleted when access by admin access_token", async () => {
    const res = await request(app)
      .delete("/houses/1")
      .set("access_token", access_token);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message", "House deleted");
  });

  test("should return message House deleted when house is succesfully deleted when access by agen access_token", async () => {
    const payloadLogin = {
      password: "123456",
      email: "testAgen1@gmail.com",
    };

    const loginAgen = await request(appUser)
      .post("/users/login")
      .send(payloadLogin);
    expect(loginAgen.status).toBe(200);
    expect(loginAgen.body).toHaveProperty("role", "Agen");

    access_token = loginAgen.body.access_token;

    const payload = {
      title: "Jual Rumah1",
      price: "10000000001",
      description: "dijual rumah1",
      location: "jakarta",
      instalment: "10000",
      longitude: -6.844345390408558,
      latitude: -6.844345390408559,
      userId: 1,
      houseId: 1,
      luasTanah: 100,
      luasBangunan: 80,
      certificate: "SHM",
      dayaListrik: 300,
      totalBedroom: 3,
      totalBathroom: 2,
    };
    const newHouse = await request(app)
      .post("/houses")
      .set("access_token", access_token)
      .field("title", payload.title)
      .field("price", payload.price)
      .field("description", payload.description)
      .field("location", payload.location)
      .field("instalment", payload.instalment)
      .field("longitude", payload.longitude)
      .field("latitude", payload.latitude)
      .field("userId", payload.userId)
      .field("luasTanah", payload.luasTanah)
      .field("luasBangunan", payload.luasBangunan)
      .field("certificate", payload.certificate)
      .field("dayaListrik", payload.dayaListrik)
      .field("totalBedroom", payload.totalBedroom)
      .field("totalBathroom", payload.totalBathroom)
      .attach("Images", "./Capture.PNG");
    expect(newHouse.status).toBe(201);

    const payload1 = {
      title: "Jual Rumah12",
      price: "10000000001",
      description: "dijual rumah1",
      location: "jakarta",
      instalment: "10000",
      longitude: -6.844345390408558,
      latitude: -6.844345390408559,
      userId: 1,
      houseId: 1,
      luasTanah: 100,
      luasBangunan: 80,
      certificate: "SHM",
      dayaListrik: 300,
      totalBedroom: 3,
      totalBathroom: 2,
    };
    const newHouse1 = await request(app)
      .post("/houses")
      .set("access_token", access_token)
      .field("title", payload1.title)
      .field("price", payload1.price)
      .field("description", payload1.description)
      .field("location", payload1.location)
      .field("instalment", payload1.instalment)
      .field("longitude", payload1.longitude)
      .field("latitude", payload1.latitude)
      .field("userId", payload1.userId)
      .field("luasTanah", payload1.luasTanah)
      .field("luasBangunan", payload1.luasBangunan)
      .field("certificate", payload1.certificate)
      .field("dayaListrik", payload1.dayaListrik)
      .field("totalBedroom", payload1.totalBedroom)
      .field("totalBathroom", payload1.totalBathroom)
      .attach("Images", "./Capture.PNG");
    expect(newHouse1.status).toBe(201);

    const res = await request(app)
      .delete("/houses/2")
      .set("access_token", access_token);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message", "House deleted");
  });
});

describe("failed test for delete house feature", () => {
  test("should return res status 401 when accessed without access_token ", async () => {
    const res = await request(app).delete("/houses/1");
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("message", "JsonWebTokenError");
  });

  test("should return res status of 404 when data with defined id is not found ", async () => {
    const payloadLogin = {
      password: "123456",
      email: "testAdmin1@gmail.com",
    };

    const loginAdmin = await request(appUser)
      .post("/users/login")
      .send(payloadLogin);
    expect(loginAdmin.status).toBe(200);

    access_token = loginAdmin.body.access_token;
    const res = await request(app)
      .delete("/houses/15")
      .set("access_token", access_token);
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message", "Not Found");
  });

  test("should return res status of 403 when user with role of User trying to delete ", async () => {
    const payloadLogin = {
      password: "123456",
      email: "testUser@gmail.com",
    };

    const loginUser = await request(appUser)
      .post("/users/login")
      .send(payloadLogin);
    expect(loginUser.status).toBe(200);
    expect(loginUser.body).toHaveProperty("role", "User");

    access_token = loginUser.body.access_token;

    const res = await request(app)
      .delete("/houses/3")
      .set("access_token", access_token);
    expect(res.status).toBe(403);
  });
});

describe("acceptance test for get spesification feature", () => {
  test("should return spesification table when accessed", async () => {
    const res = await request(app).get("/specs");
    expect(res.status).toBe(200);
  });
});

describe("failed test for get spesification feature", () => {
  test("should return spesification table when accessed", async () => {
    const payloadLogin = {
      password: "123456",
      email: "testAdmin1@gmail.com",
    };

    const loginAdmin = await request(appUser)
      .post("/users/login")
      .send(payloadLogin);
    expect(loginAdmin.status).toBe(200);

    access_token = loginAdmin.body.access_token;
    const deleteHouse = await request(app)
      .delete("/houses/3")
      .set("access_token", access_token);

    expect(deleteHouse.status).toBe(200);
    expect(deleteHouse.body).toHaveProperty("message", "House deleted");
    const res = await request(app).get("/specs");
    expect(res.status).toBe(404);
  });
});
