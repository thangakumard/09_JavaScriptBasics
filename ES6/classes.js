//Reference https://www.youtube.com/watch?v=MfxBfRD0FVU
class Particle{
    constructor(x, y, square){
        this.x = x;
        this.y = y;
        this.square = square;
    }

    update(){
        this.x += random(-5,5);
        this.y += random(-5,5);
    }

    show(){
        stroke(255);
        strokeWeight(24);
        point(this.x, this.y);
    }
}