module.exports = {
    findHouses: (input) => {
        var houses = [{ x: 0, y: 0 }];
        var moves = input.split("").map((move) => {
            return coords[move];
        });
        moves.reduce((prev, curr) => {
            var loc = {x: prev.x + curr.x, y: prev.y + curr.y};
            if (houses.filter((val) => {
                return val.x == loc.x && val.y == loc.y;
            }).length == 0)
                houses.push(loc);
            return loc;
        }, { x: 0, y: 0 });
        return houses.length;
    }
};

const coords = {
    "^": { x: 0, y: 1 },
    "v": { x: 0, y: -1 },
    ">": { x: 1, y: 0 },
    "<": { x: -1, y: 0 }
};