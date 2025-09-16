let timerId = setInterval(() => console.log('Hello World!'), 1_000);

setTimeout(() => clearInterval(timerId), 10_000);