class Karmir {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }



    chooseCell(char1, char2, char3, char4) {
            this.getNewCoordinates();
            return super.chooseCell(char1, char2, char3, char4);
        }

    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 13) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5;
            var kp = new Kapuyt(newX, newY, 5);
            kapuytArr.push(kp)
            this.energy = 8;
        }
    }

    move() {
        var food = random(this.chooseCell(0))
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
            this.energy--
        }
    }

    eat() {
        var food = random(this.chooseCell(1, 2, 3, 4))
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0];
            var newY = food[1];
            if (matrix[newY][newX] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == newX && grassArr[i].y == newY) {
                        grassArr.splice(i, 1)
                        break;

                    }

                }

            }
            if (matrix[newY][newX] == 2) {
                for (var i in grassEaterArr) {
                    if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                        grassEaterArr.splice(i, 1)
                        break;

                    }

                }

            }
            if (matrix[newY][newX] == 3) {
                for (var i in PredatorArr) {
                    if (PredatorArr[i].x == newX && PredatorArr[i].y == newY) {
                        PredatorArr.splice(i, 1)
                        break;

                    }

                }

            }
            if (matrix[newY][newX] == 4) {
                for (var i in kapuytArr) {
                    if (kapuytArr[i].x == newX && kapuytArr[i].y == newY) {
                        kapuytArr.splice(i, 1)
                        break;

                    }

                }

            }

            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
            this.energy = 4
        }
    }

    die() {
        if (this.energy++) {
            matrix[this.y][this.x] = 0
            for (var i in karmirArr) {
                if (karmirArr[i].x == this.x && karmirArr[i].y == this.y) {
                    karmirArr.splice(i, 1)
                    break;
                }
            }
        }
    }
}