function updateDashboard() {
    // 股市數據跳動
    document.querySelectorAll('.card').forEach(card => {
        const gainEl = card.querySelector('.gain');
        if (!gainEl) return;
        const pt = (Math.random() * 200).toFixed(1);
        const pct = (Math.random() * 2 - 1).toFixed(2);
        gainEl.innerText = `${pct >= 0 ? '+' : ''}$${pt} (${pct >= 0 ? '+' : ''}${pct}%)`;
        gainEl.style.color = pct >= 0 ? '#22c55e' : '#ef4444';
    });

    // 50字深度的即時新聞內容
    const deepAnalysis = [
        "美伊戰爭局勢惡化，中東原油運輸航道面臨中斷風險，導致避險資金大舉湧入黃金市場，全球金融體系對地緣溢價的關注度急劇上升，投資人需謹防市場劇烈波動。",
        "聯準會最新會議紀要顯示通膨回落速度不如預期，鷹派立場強化市場對高利率維持更久的預期，美元指數走強對新興市場貨幣構成嚴峻壓力，資金流動性呈現緊縮態勢。",
        "AI軍備競賽帶動全球晶圓代工與高效能運算需求，科技龍頭財報顯示營收動能強勁，半導體產業鏈成為多頭關鍵支柱，唯庫存調整壓力與毛利率變化仍是後市隱憂。"
    ];

    // 更新三條新聞內容
    document.getElementById('news-1').innerText = "1. " + deepAnalysis[0];
    document.getElementById('news-2').innerText = "2. " + deepAnalysis[1];
    document.getElementById('news-3').innerText = "3. " + deepAnalysis[2];
}

// 每 5 秒更新一次數據與新聞
setInterval(updateDashboard, 5000);
updateDashboard(); // 頁面載入時立即執行
