function Shape(id, x, y) {

    this.x = x;
    this.move(x, y);

    this.move = function (x, y) {
        this.x = x;
        this.y = y;
    }


}