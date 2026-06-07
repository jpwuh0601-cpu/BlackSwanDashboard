function updateDashboard() {
    // 更新股市數據
    document.querySelectorAll('.card').forEach(card => {
        const gainEl = card.querySelector('.gain');
        if (!gainEl) return;
        const pt = (Math.random() * 200).toFixed(1);
        const pct = (Math.random() * 2 - 1).toFixed(2);
        gainEl.innerText = `${pct >= 0 ? '+' : ''}$${pt} (${pct >= 0 ? '+' : ''}${pct}%)`;
        gainEl.style.color = pct >= 0 ? '#22c55e' : '#ef4444';
    });

    // 模擬新聞更新 (美伊戰爭訊息)
    const newsUpdates = [
        "美伊戰爭局勢惡化，避險資金瘋狂湧入黃金市場。",
        "最新軍事情報顯示美伊緊張加劇，油價突破關鍵價位。",
        "美伊衝突升溫，全球股市避險情緒達到近期高峰。"
    ];
    const targetNews = document.getElementById('news-1');
    targetNews.innerText = "1. " + newsUpdates[Math.floor(Math.random() * newsUpdates.length)];
}
setInterval(updateDashboard, 5000); // 每 5 秒自動更新
