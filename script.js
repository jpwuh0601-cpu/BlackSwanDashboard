// 請每日手動修改此處的精確數據
const marketData = {
    "台股加權": { "price": "20478.45", "gain": "-1568.16", "pct": "-7.11%" },
    "台指期": { "price": "20512.00", "gain": "-1420.00", "pct": "-6.47%" },
    "美元指數": { "price": "104.98", "gain": "+0.12", "pct": "+0.11%" },
    "黃金": { "price": "2315.20", "gain": "+18.50", "pct": "+0.80%" },
    "道瓊": { "price": "39689.54", "gain": "+179.32", "pct": "+0.45%" }
};
const API_KEY = "0HJ4Z6G03X9CU195"; // 在這裡貼上您的 API Key

async function fetchStock(symbol, elementId) {
    try {
        const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`);
        const data = await res.json();
        document.getElementById(elementId).innerText = data.c ? data.c.toFixed(2) : "無數據";
    } catch (e) {
        document.getElementById(elementId).innerText = "Error";
    }
}

function updateAllData() {
    // 呼叫 API (需注意 Finnhub 對特定指數代號的支援)
    fetchStock("AAPL", "TWSE"); // 註：Finnhub 免費版對特定非美股代號有限制
    fetchStock("DXY", "DXY");
    fetchStock("GOLD", "GOLD");
    fetchStock("DJI", "DJI");
}

// 載入後自動執行
updateAllData();
