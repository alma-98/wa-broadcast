require("dotenv").config();
const axios = require("axios");

async function sendWA() {
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/api/send`,
      {
        target: "6285283397198", // ganti nomor tujuan
        message: `Halo,

Ini adalah pesan percobaan dari WA Broadcast menggunakan Wapis Commistra.

Salam,
Alma`
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("✅ Berhasil");
    console.log(response.data);

  } catch (err) {

    console.log("❌ Gagal");
    console.log(err.response?.data || err.message);

  }
}

sendWA();
