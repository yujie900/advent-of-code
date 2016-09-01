module.exports = {
    calculate : (input) => {
        var floors = input.split("");
        var upFloors = floors.filter(floor => floor == "(");
        var downFloors = floors.filter(floor => floor == ")");
        
        return upFloors.length - downFloors.length;
    }
};