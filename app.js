require("dotenv").config();
const axios = require("axios");

async function testAPI() {
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/api/stats`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );

    console.log("✅ API Connected");
    console.log(response.data);
  } catch (err) {
    console.error("❌ API Error");
    console.error(err.response?.data || err.message);
  }
}

testAPI();
