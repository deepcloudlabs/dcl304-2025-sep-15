const {fromEvent, throttleTime, scan} = rxjs;

window.onload = () => {
    //fromEvent(document.querySelector("#exercise10"), 'click').subscribe(() => console.log('Clicked!'));

    fromEvent(document.querySelector("#exercise10"), 'click')
        .pipe(
            throttleTime(3000),
            scan((count) => count + 1, 0)
        )
        .subscribe((count) => console.log(`Clicked ${count} times`));
}