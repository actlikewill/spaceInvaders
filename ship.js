function Ship() {
    this.x = width/2;
    this.xDir = 0;


    this.show = () => {
        fill(255);
        rectMode(CENTER);
        rect(this.x, height-20, 20, 60);
    };

    this.setDir = (dir) => {
        this.xDir = dir;
    }
    this.move = () => {
        this.x += this.xDir*5;
    }


}
