const axios = require("axios");
const FormData = require("form-data");

async function imageKit(buffer, originalname) {

    let image = new FormData();
    image.append("file", buffer.toString("base64"));
    image.append("fileName", originalname);
    const key = "private_7L7GwwdHRsQWLeXxa+Nwp/YWJLY=:";
    let encodedKey = Buffer.from(key).toString("base64");
    return await axios({
      url: "https://upload.imagekit.io/api/v1/files/upload",
      method: "post",
      data: image,
      headers: {
        ...image.getHeaders(),
        Authorization: `Basic ${encodedKey}`,
      },
    });
 
}

module.exports = { imageKit };
