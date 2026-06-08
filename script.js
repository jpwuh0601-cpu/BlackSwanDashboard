function updateDashboard() {
    document.querySelectorAll('#data-container .card').forEach(card => {
        const title = card.querySelector('h3').innerText;
        const gainEl = card.querySelector('.gain');
        if (!gainEl) return;

        // 指數類商品波動設定
        let isIndex = ['台股加權', '台指期', '日經225', '韓國綜合', '道瓊工業', '那斯達克', '標普500'].includes(title);
        let move = isIndex ? (Math.random() * 50).toFixed(2) : (Math.random() * 0.5).toFixed(2);
        let pct = (Math.random() * 1.5 - 0.7).toFixed(2);
        let isUp = pct >= 0;
        
        gainEl.innerText = `${isUp ? '+' : ''}${move} (${isUp ? '+' : ''}${pct}%)`;
        gainEl.style.color = isUp ? '#22c55e' : '#ef4444';
    });

    // 新聞每 30 分鐘更新
    const news = [
        "美伊戰爭風險溢價持續，導致國際原油與黃金價格震盪，全球資金避險意識抬頭，投資人密切關注中東局勢對供應鏈的後續衝擊，建議保持風險管理。",
        "聯準會政策走向不明朗，美元指數呈現區間整理，市場正評估高利率環境對企業獲利的長期影響，需留意後續通膨數據公佈對金融市場帶來的短期壓力。",
        "AI 供應鏈動能雖強，但半導體產業正面臨庫存調整週期，台積電毛利率展望成為市場關注焦點，投資人應區分個股表現與總體景氣循環之差異。"
    ];
    document.getElementById('news-1').innerText = "1. " + news[0];
    document.getElementById('news-2').innerText = "2. " + news[1];
    document.getElementById('news-3').innerText = "3. " + news[2];
}

setInterval(updateDashboard, 1800000); 
updateDashboard();
