//#Week 6 JQuery Code Challenge

//Objects
		
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.
var height = 8px;
var width = 8px;
var volume = (height * width);

$('#Print').click(function box(height, width, volume){
    $('body').append('.output');
    console.log('ive been clicked');
})
//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.
//Create a button that prints the object and its attributes to the page (use the span "output".
 
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume