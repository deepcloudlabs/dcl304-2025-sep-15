const binance_wss_url = "wss://stream.binance.com:9443/ws/btcusdt@trade";

const ws = new WebSocket(binance_wss_url);
console.log(ws)
