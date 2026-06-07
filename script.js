function updateDashboard() {
    // 股市數據跳動
    document.querySelectorAll('#data-container .card').forEach(card => {
        const gainEl = card.querySelector('.gain');
        if (!gainEl) return;
        const pt = (Math.random() * 200).toFixed(1);
        const pct = (Math.random() * 2 - 1).toFixed(2);
        gainEl.innerText = `${pct >= 0 ? '+' : ''}$${pt} (${pct >= 0 ? '+' : ''}${pct}%)`;
        gainEl.style.color = pct >= 0 ? '#22c55e' : '#ef4444';
    });

    // 深度新聞內容 (50字左右)
    const news = [
        "美伊戰爭局勢惡化，中東航道安全疑慮導致原油供給不確定性大增，避險資金瘋狂湧入黃金市場，全球投資人對地緣風險溢價的關注度急劇上升，市場波動加劇。",
        "聯準會會議紀要顯示鷹派立場持續，高利率環境可能延續至年底，美元指數走強對新興市場貨幣構成嚴峻壓力，全球資金流動性出現顯著緊縮與資產重組潮。",
        "AI軍備競賽帶動高效能運算需求，科技龍頭財報展現強勁營收成長，半導體供應鏈成為多頭關鍵支柱，然而庫存調整壓力與毛利率變動仍是後市觀察的重要隱憂。"
    ];
    document.getElementById('news-1').innerText = "1. " + news[0];
    document.getElementById('news-2').innerText = "2. " + news[1];
    document.getElementById('news-3').innerText = "3. " + news[2];
}
setInterval(updateDashboard, 5000);
updateDashboard();
