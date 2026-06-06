const list = [
    { name: '道瓊指數', base: 39000 }, { name: '那斯達克', base: 17000 },
    { name: '標普500', base: 5200 }, { name: '台積電', base: 2330 },
    { name: '黃金', base: 4365 }, { name: '原油', base: 75.0 }
];

const newsList = [
    "聯準會最新會議紀要顯示，官員對通膨降溫速度仍存疑慮，暗示高利率可能維持更久，市場預期資金將持續流向美元作為防禦性資產，導致新興市場股市壓力驟增。",
    "中東地區地緣衝突持續升溫，不僅影響原油供給穩定性，更推升黃金作為避險工具的市場需求，VIX 指數盤中出現異常波動，建議投資人需嚴控槓桿比例以因應行情。",
    "科技龍頭最新財報亮眼，AI 與高效能運算需求強勁，支撐半導體板塊走勢，投資人應持續關注台積電毛利率與庫存週轉率，作為判斷科技股多頭動能是否持續的先行指標。",
    "全球供應鏈風險再起，部分大宗商品價格出現劇烈震盪，通膨預期心理再次抬頭，投資人需密切留意未來公債殖利率曲線走勢，以調整投資組合中的現金配置水位。",
    "隨著非農就業數據即將發布，市場情緒轉趨謹慎，各主要指數成交量顯著萎縮，建議投資人採取區間操作策略，避開數據公布前的震盪風險，優先確保資本安全性。"
];

function updateDashboard() {
    const dataContainer = document.getElementById('data-container');
    const newsContainer = document.getElementById('news-container');
    const tickerList = document.getElementById('news-ticker-list');
    const breakingNews = document.getElementById('breaking-news-container');

    dataContainer.innerHTML = list.map(item => {
        const change = (Math.random() * 4 - 2).toFixed(2);
        const price = (item.base * (1 + change / 100)).toFixed(2);
        return `<div class="card"><h3>${item.name}</h3><p style="font-size:1.3em; font-weight:bold;">$${price}</p><p class="${change >= 0 ? 'up' : 'down'}">${change}%</p></div>`;
    }).join('');

    tickerList.innerHTML = newsList.map(news => `<li>${news}</li>`).join('');

    newsContainer.innerHTML = `
        <div class="card"><h3>FED 利率決策</h3><p style="font-size:0.9em; color:#cbd5e1;">重點監控：CPI/PCE 數據、聯準會官員談話。</p></div>
        <div class="card"><h3>地緣風險監控</h3><p style="font-size:0.9em; color:#cbd5e1;">重點監控：原油供給鏈、黃金避險、VIX 指數。</p></div>
        <div class="card"><h3>企業景氣動能</h3><p style="font-size:0.9em; color:#cbd5e1;">重點監控：財報展望、半導體庫存、毛利率。</p></div>
    `;

    breakingNews.innerText = "⚡ 市場觀察：關鍵經濟數據發布前夕，建議審慎評估風險與資金部位控管。";
}

document.getElementById('update-btn').addEventListener('click', updateDashboard);
// 設定自動更新 (每 60 秒)
setInterval(updateDashboard, 60000);
updateDashboard();