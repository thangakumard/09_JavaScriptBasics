//Reference https://www.youtube.com/watch?v=MfxBfRD0FVU
class SquareP{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    update(){
        this.x += random(-5,5);
        this.y += random(-5,5);
    }

    show(){
        stroke(255);
        strokeWeight(24);
        square(this.x, this.y, 10);
    }
}