const list = [
    { name: '道瓊指數', base: 39000 }, { name: '那斯達克', base: 17000 },
    { name: '標普500', base: 5200 }, { name: '台積電', base: 2330 },
    { name: '黃金', base: 4365 }, { name: '原油', base: 75.0 }
];

const newsList = [
    
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
