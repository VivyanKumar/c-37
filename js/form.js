class Form{
    constructor(){
        this.title = createElement('h2');
        this.greeting = createElement('h2');
        this.input = createInput('');
        this.button = createButton('Start');
    }
    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }
    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth-650,displayHeight-800);
        this.input.position(displayWidth-625,displayHeight-700);
        this.button.position(displayWidth-550,displayHeight-650);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome " + player.name);
            this.greeting.position(600, 250);
             
        })
    }
}