function Drop(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false;

    this.show = () => {
        noStroke();
        fill(150,0, 255);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    };

    this. move = () =>  {
        this.y = this.y - 5;
    };

    this.evaporate = () => {
        this.toDelete = true;
    };


    this.hits = (flower) => {
        let d = dist(this.x, this.y, flower.x, flower.y);
        return d < (this.r + flower.r);
    }
}
