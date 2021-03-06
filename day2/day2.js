module.exports = {
    //part 1
    findTotalWraps: (input) => {
        var boxes = input.split("\n");
        var wraps = boxes.map((box) => {
            var dimensions = box.split("x").map((val) => {
                return parseInt(val);
            });
            if (dimensions.length == 3) {
                var l = dimensions[0];
                var w = dimensions[1];
                var h = dimensions[2];

                var sa = 2 * l * w + 2 * w * h + 2 * h * l;
                var smallestSide = findSmallestSide(dimensions);
                sa += (smallestSide[0] * smallestSide[1]);

                return sa;
            }
            else {
                return 0;
            }
        });

        var total = wraps.reduce((prev, curr) => prev + curr);
        return total;
    },
    //part 2
    findTotalRibbons: (input) => {
        var boxes = input.split("\n");
        var ribbons = boxes.map((box) => {
            var dimensions = box.split("x").map((val) => {
                return parseInt(val);
            });
            if (dimensions.length == 3) {
                var l = dimensions[0];
                var w = dimensions[1];
                var h = dimensions[2];

                var vol = l*w*h;
                var smallestSide = findSmallestSide(dimensions);
                vol += (smallestSide[0] * 2 + smallestSide[1] * 2);

                return vol;
            }
            else {
                return 0;
            }
        });

        var total = ribbons.reduce((prev, curr) => prev + curr);
        return total;
    }
};

var findSmallestSide = (dimensions) => {
    return dimensions.sort((a, b) => {
        return a - b;
    }).slice(0, 2);
};