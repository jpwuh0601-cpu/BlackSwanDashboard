const list = [
    { name: '道瓊指數', base: 39000 }, { name: '那斯達克', base: 17000 },
    { name: '標普500', base: 5200 }, { name: '台積電', base: 2330 },
    { name: '黃金', base: 4365 }, { name: '原油', base: 75.0 }
];

const newsList = [
    "聯準會最新會議紀要顯示...",
    "中東地區地緣衝突持續存在...",
    "科技龍頭最新財報亮眼...",
    "全球供應鏈風險再起...",
    "隨著非農就業數據即將發布..."
];

function updateDashboard() {
    const dataContainer = document.getElementById('data-container');
    const newsTicker = document.getElementById('news-ticker');

    // Update data
    dataContainer.innerHTML = list.map(item => {
        const change = (Math.random() * 4 - 2).toFixed(2);
        const price = (item.base * (1 + change / 100)).toFixed(2);
        return `<div class="card"><h3>${item.name}</h3><p style="font-size:1.3em; font-weight:bold;">$${price}</p><p class="${change >= 0 ? 'up' : 'down'}">${change}%</p></div>`;
    }).join('');

    // Update news
    newsTicker.innerHTML = newsList.map(news => `<li>${news}</li>`).join('');
}

// Initial call
updateDashboard();
