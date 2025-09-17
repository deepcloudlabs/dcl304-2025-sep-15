const myEvent = new CustomEvent('my-event', {
    detail: {
        name: 'John',
        age: 30
    } ,
    bubbles: true,
    cancelable: true,
    composed: false
});

