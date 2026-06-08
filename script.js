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
