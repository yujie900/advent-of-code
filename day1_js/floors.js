module.exports = {
    calculate : (input) => {
        var floors = input.split("");
        var upFloors = floors.filter(floor => floor == "(").length;
        var downFloors = floors.filter(floor => floor == ")").length;
        
        return upFloors - downFloors;
    }
};