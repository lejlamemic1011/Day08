// Only change code below this line

var sum = 0;

function addThree() {
    sum = sum + 3;

}
function addFive() {
    sum = sum + 5;
}
console.log(addThree(sum));
console.log(addFive(sum));
addThree();
addFive();
// Only change code above this line
module.exports = {
    addThree,
    addFive
};