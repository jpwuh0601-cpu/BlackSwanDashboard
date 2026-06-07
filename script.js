function updateDashboard() {
    document.querySelectorAll('.card').forEach(card => {
        const gainEl = card.querySelector('.gain');
        if (!gainEl) return;
        
        const pt = (Math.random() * 200).toFixed(1);
        const pct = (Math.random() * 2 - 1).toFixed(2);
        const isUp = pct >= 0;
        
        gainEl.innerText = `${isUp ? '+' : ''}$${pt} (${isUp ? '+' : ''}${pct}%)`;
        gainEl.style.color = isUp ? '#22c55e' : '#ef4444';
        gainEl.classList.toggle('negative', !isUp);
    });
}
// 手機瀏覽器每 5 秒自動跳動數據
setInterval(updateDashboard, 5000);
