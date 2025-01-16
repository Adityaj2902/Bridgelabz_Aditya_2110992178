var Direction;
(function (Direction) {
    Direction[Direction["North"] = 1] = "North";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["South"] = 3] = "South";
    Direction[Direction["West"] = 4] = "West";
})(Direction || (Direction = {}));
var directionName = Direction[2]; // Reverse mapping
console.log(directionName); // Output: "East"
