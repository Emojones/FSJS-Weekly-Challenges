//#Week 6 JQuery Code Challenge

//Objects
//Create an object named "Box" with 3 properties, height, width, volume.
var box = {
    "height": 1,
    "weight": 1,
    "volume": 1
};


//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.
$('#HeightDecrease').click(function () {
    box.height--;
});

$('#HeightIncrease').click(function () {
    box.height++;
});

$('#WeightDecrease').click(function () {
    box.weight--;
});

$('#WeightIncrease').click(function () {
    box.weight++;
});

$('#VolumeDecrease').click(function () {
    box.volume--;
});

$('#VolumeIncrease').click(function () {
    box.volume++;
});

//Create a button that prints the object and its attributes to the page (use the span "output".
$('#Print').click(function () {
    $('#output').html("<p>Height: " + box.height + "</P><p>Weight: " + box.weight + "</P><p>Volume: " + box.volume + "</P>");
});