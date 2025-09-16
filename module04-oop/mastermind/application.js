let mastermind;
let view;
window.onload = () => {
    console.log("Application is just started!");
    view = new View();
    mastermind = new Mastermind(view);
    view.init(mastermind);
}