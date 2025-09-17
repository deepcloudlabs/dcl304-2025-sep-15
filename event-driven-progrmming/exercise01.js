const timer_id = setInterval(() => console.log("Hello Mars!"), 1_000);
setTimeout(() => clearInterval(timer_id), 5_000);
fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
    .then(response => response.json())
    .then(data => console.log(data));
