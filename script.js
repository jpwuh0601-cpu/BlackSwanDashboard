function updateDashboard() {
    const mockValue = (Math.random() * 100).toFixed(2);
    document.getElementById('data-display').innerText = "當前風險指數: " + mockValue;
    console.log("數據已更新: " + mockValue);
}

setInterval(updateDashboard, 5000);
updateDashboard();
