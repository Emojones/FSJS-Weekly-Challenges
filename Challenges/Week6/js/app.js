//#Week 6 JQuery Code Challenge

//Objects
var box = {
    "height" : 1,
    "weight" : 1,
    "volume" : 1
};

//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.

$('#Print').click(function() {
    $('#output').append();
    console.log('ive been clicked');
});

$('#HeightDecrease').click(function(){
    box.height--;
});

$('#HeightIncrease').click(function(){
     box.height++;
});

$('#WeightDecrease').click(function(){
    box.weight--;
});

$('#WeightIncrease').click(function(){
    box.weight++;
});

$('#VolumeDecrease').click(function(){
   box.volume--;
});

$('#VolumeIncrease').click(function(){
    box.volume++;
});
//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.

//Create a button that prints the object and its attributes to the page (use the span "output".
 
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume