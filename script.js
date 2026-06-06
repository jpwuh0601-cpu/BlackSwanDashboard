function updateDashboard() {
    const mockValue = (Math.random() * 100).toFixed(2);
    document.getElementById('data-display').innerText = "當前風險數值: " + mockValue;
    console.log("數據已刷新: " + mockValue);
}
setInterval(updateDashboard, 3000);
updateDashboard();
