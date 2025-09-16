window.onload = () => {
    console.log("Application is just started!");
    let view = new View();
    let mastermind = new Mastermind(view);
    view.init(mastermind);
}