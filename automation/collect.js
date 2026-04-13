const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Cross-platform output folder
const OUTPUT_DIR =
  process.platform === "win32" ? "C:/cron" : "/home/cron";

// Auto create folder
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function collectWeather() {
  try {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&current=temperature_2m,weathercode&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia/Jakarta&forecast_hours=12";

    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const data = response.data;

    saveToCsv(data);
  } catch (error) {
    console.error("ERROR collect:", error.message);
    console.log("Fallback: menggunakan dummy data...");

    const dummyData = {
      current: {
        time: new Date().toISOString(),
        temperature_2m: 30,
        weathercode: 1
      },
      hourly: {
        time: [new Date().toISOString()],
        temperature_2m: [30],
        weathercode: [1]
      },
      daily: {
        time: [new Date().toISOString().split("T")[0]],
        weathercode: [1],
        temperature_2m_max: [32],
        temperature_2m_min: [25]
      }
    };

    saveToCsv(dummyData);
  }
}

function saveToCsv(data) {
  const now = new Date();

  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const year = now.getFullYear();
  const hour = String(now.getHours()).padStart(2, "0");

  const date = `${month}${day}${year}`;
  const fileName = `cron_${date}_${hour}.csv`;
  const filePath = path.join(OUTPUT_DIR, fileName);

  let csv =
    "type,time,temperature_2m,weathercode,temperature_2m_max,temperature_2m_min\n";

  if (data.current) {
    csv += `current,${data.current.time},${data.current.temperature_2m},${data.current.weathercode},,\n`;
  }

  if (data.hourly?.time?.length) {
    for (let i = 0; i < data.hourly.time.length; i++) {
      csv += `hourly,${data.hourly.time[i]},${data.hourly.temperature_2m[i]},${data.hourly.weathercode[i]},,\n`;
    }
  }

  if (data.daily?.time?.length) {
    for (let i = 0; i < data.daily.time.length; i++) {
      csv += `daily,${data.daily.time[i]},,${data.daily.weathercode[i]},${data.daily.temperature_2m_max[i]},${data.daily.temperature_2m_min[i]}\n`;
    }
  }

  fs.writeFileSync(filePath, csv, "utf8");

  console.log(`SUCCESS: file berhasil dibuat -> ${filePath}`);
}

collectWeather();