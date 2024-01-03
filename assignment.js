//#1 Convert any input value from feet into mile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var resultMile = feetToMile(1000);
console.log(resultMile, "Mile");

// feetToMile Done.
// #2 woodCalculator. Chair =1xwood, Table=3xwood, Bed=5xwood.
function woodCalculator(chair, table, bed){
    var wood1 = chair * 1;
    var wood2 = table * 3;
    var wood3 = bed * 5;
    var total = wood1 + wood2 + wood3 ;
    return total;
}
var resultWood = woodCalculator(10, 5, 2);
console.log(resultWood, "Woods");

// woodCalculator Done


// #3 BrickCalculator.Floor 1-10 means 15 feet/floor.Floor 11-20 means 12 feet/floor. Floor 21-infinity means 10 feet/floor. Each floor requires 1000 bricks.Take input of the number of the floor and show output with the number of the bricks.

function brickCalculator(floor){
        if(floor < 11){
            var n = 15;
            var feet1 = floor * n;
            return feet1;
        }

        if(floor < 21){
            var n = 12;
            var feet2 = floor * n + 10 * 15;
            return feet2;
        }
        
        else{
            n = 10;
            var feet3 = floor * n + 150 + 120;
            return feet3;
        }
        var totalBricks = feet1 + feet2 + feet3;
        return totalBricks;
}
 
        var totalCalculation = brickCalculator(25);
        console.log(totalCalculation * 1000, 'Bricks')
