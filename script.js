function updateDashboard() {
    document.querySelectorAll('#data-container .card').forEach(card => {
        const title = card.querySelector('h3').innerText;
        const gainEl = card.querySelector('.gain');
        if (!gainEl) return;

        // 依據指數屬性設定波動範圍
        let range = title === '美元指數' ? 0.5 : (title.includes('原油') ? 1 : 200);
        const pt = (Math.random() * range).toFixed(2);
        const pct = (Math.random() * 2 - 1).toFixed(2);
        const isUp = pct >= 0;
        
        gainEl.innerText = `${isUp ? '+' : ''}${pt} (${isUp ? '+' : ''}${pct}%)`;
        gainEl.style.color = isUp ? '#22c55e' : '#ef4444';
    });

    const news = [
        "美伊戰爭局勢惡化，中東航道安全疑慮導致原油供給不確定性大增，避險資金瘋狂湧入黃金市場，全球投資人對地緣風險溢價的關注度急劇上升，市場波動加劇。",
        "聯準會會議紀要顯示鷹派立場持續，高利率環境可能延續至年底，美元指數走強對新興市場貨幣構成嚴峻壓力，全球資金流動性出現顯著緊縮與資產重組潮。",
        "AI軍備競賽帶動高效能運算需求，科技龍頭財報展現強勁營收成長，半導體供應鏈成為多頭關鍵支柱，然而庫存調整壓力與毛利率變動仍是後市觀察的重要隱憂。"
    ];
    document.getElementById('news-1').innerText = "1. " + news[0];
    document.getElementById('news-2').innerText = "2. " + news[1];
    document.getElementById('news-3').innerText = "3. " + news[2];
}

// 每 30 分鐘更新一次
setInterval(updateDashboard, 1800000); 
updateDashboard();
