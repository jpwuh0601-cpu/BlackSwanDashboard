function updateDashboard() {
    // 隨機跳動數據
    document.querySelectorAll('.gain').forEach(el => {
        const val = (Math.random() * 2 - 1).toFixed(2);
        el.innerText = (val >= 0 ? '+' : '') + val + '%';
        el.style.color = val >= 0 ? '#22c55e' : '#ef4444';
    });
    // 隨機切換一則新聞模擬更新感
    const news = document.querySelectorAll('#news-list li');
    news[Math.floor(Math.random() * news.length)].style.opacity = "0.7";
    setTimeout(() => news.forEach(n => n.style.opacity = "1"), 500);
}
setInterval(updateDashboard, 5000);
