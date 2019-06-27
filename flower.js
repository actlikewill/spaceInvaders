function Flower(x, y) {
    this.x = x;
    this.y = y;
    this.r = 30;

    this.xDir = 1;



    this.show = () => {
        fill(255, 0, 200);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    };

    this.disappear = () => {
        this.r = 0;
    };

    this.grow = () => {
        this.r = this.r + 2;
    };

    this.move = () => {
        this.x = this.x + this.xDir;

    };

    this.shiftDown = () => {
        this.xDir *= -1;
        this.y += this.r;
    };
}
