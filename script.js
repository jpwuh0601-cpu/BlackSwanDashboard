function updateData() {
    const gains = document.querySelectorAll('.gain');
    gains.forEach(gain => {
        const randomPoint = (Math.random() * 100).toFixed(2);
        const randomPercent = (Math.random() * 2 - 1).toFixed(2);
        const sign = randomPercent >= 0 ? '+' : '';
        gain.innerText = `${sign}$${randomPoint} (${randomPercent}%)`;
        gain.style.color = randomPercent >= 0 ? '#22c55e' : '#ef4444';
    });
}
setInterval(updateData, 5000); // 手機端每 5 秒自動模擬更新
