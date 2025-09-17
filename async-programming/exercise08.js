const binance_wss_url = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const WebSocket = require('ws');
const {map, bufferCount, fromEvent} = require("rxjs");
const ws = new WebSocket(binance_wss_url);

const stream = fromEvent(ws,"message").pipe(
    map(event => {
        const trade = JSON.parse(event.data);
        return Number(trade.p) * Number(trade.q);
    })
);
const WINDOW_SIZE = 100;
const moving_average_stream = stream.pipe(
    bufferCount(WINDOW_SIZE),
    map( volumes => volumes.reduce((a,b) => a + b, 0) / WINDOW_SIZE )
);

moving_average_stream.subscribe(average_volume => console.log(`Moving average volume [last ${WINDOW_SIZE} trades]: ${average_volume}`));

ws.on("open", () => console.log("Connected to Binance"));
ws.on("close", () => console.log("Disconnected from Binance"));
ws.on("error", error => console.error(error));