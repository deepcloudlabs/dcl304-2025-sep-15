const binance_wss_url = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const WebSocket = require('ws');
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const ws = new WebSocket(binance_wss_url);
ws.on("message", payload => {
    const trade = JSON.parse(payload);
    console.log(trade);
    eventEmitter.emit('trade',trade);
});

eventEmitter.on('trade', async (e) => {
    console.log("Observer #1: Event has arrived -> saving to database");
});

eventEmitter.on('trade', (e) => {
    console.log("Observer #2: Event has arrived -> computing statistics");
});

setInterval(() => {
    eventEmitter.emit('trade')
}, 3_000);
