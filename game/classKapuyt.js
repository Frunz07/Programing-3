class Kapuyt {
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



    chooseCell(char) {
        this.getNewCoordinates();
        return super.chooseCell(char);
    }

    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 13) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4;
            var kp = new Kapuyt(newX, newY, 4);
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
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
            this.energy--
        }
    }

    eat() {
        var food = random(this.chooseCell(3))
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY

            for (var i in PredatorArr) {
                if (PredatorArr[i].x == newX && PredatorArr[i].y == newY) {
                    PredatorArr.splice(i, 1)
                }
            }
            this.energy += 2
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in kapuytArr) {
                if (kapuytArr[i].x == this.x && kapuytArr[i].y == this.y) {
                    kapuytArr.splice(i, 1)
                    break;
                }
            }
        }
    }
}