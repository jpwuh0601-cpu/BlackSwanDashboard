function updateDashboard() {
    // 產生一個 0 到 100 的模擬數字
    const mockValue = (Math.random() * 100).toFixed(2);
    document.getElementById('data-display').innerText = "當前風險數值: " + mockValue;
    console.log("數據已刷新: " + mockValue);
}

// 每 3 秒更新一次數據，測試自動跳動
setInterval(updateDashboard, 3000);
updateDashboard(); // 第一次載入時立即執行
