module.exports = {
    //part 1
    findFinalFloor : (input) => {
        var floors = input.split("");
        var upFloors = floors.filter(floor => floor == "(").length;
        var downFloors = floors.filter(floor => floor == ")").length;
        
        return upFloors - downFloors;
    },

    //part 2
    findBasement : (input) => {
        var floors = input.split("");
        var basement = 0;

        for (var i = 0; i < floors.length; i++)
        {
            if (floors[i] == "(")
                basement++;
            else if (floors[i] == ")")
                basement--;
            else
                throw "invalid char in input";
            
            if (basement == -1)
                return i + 1;
        }

        throw "end of file reached, no basement found";
    }
};