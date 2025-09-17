
window.onload = () => {
    /*
    document.querySelector("#exercise10")
            .addEventListener('click', () => console.log('Clicked!'));
    */

    fromEvent(document.querySelector("#exercise10"), 'click').subscribe(() => console.log('Clicked!'));
}