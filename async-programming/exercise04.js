const fs = require("fs");

fetch("https://api.binance.com/api/v3/ticker/price")
     .then(response => response.json())
     .then(tickers => {
         console.log(tickers.constructor.name);
         tickers.forEach(({price,symbol}) => {
            console.log(symbol, price);
         });
         for(const {price,symbol} of tickers){
            console.log(symbol, price);
         }
         const symbols = tickers.map(({symbol}) => symbol);
         const prices = tickers.map(({price}) => Number(price));
         console.log(symbols.length);
         tickers.sort((t1,t2)=>t1.price - t2.price)
         console.log(tickers[0]);
         console.log(tickers[tickers.length-1]);
         max_price = Math.max(...prices);
         min_price = Math.min(...prices);
         max_index = prices.indexOf(max_price);
         min_index = prices.indexOf(min_price);
         console.log(symbols[max_index],max_price);
         console.log(symbols[min_index],min_price);
         fs.writeFileSync("./symbols.json",JSON.stringify(symbols), 'utf-8');
     });