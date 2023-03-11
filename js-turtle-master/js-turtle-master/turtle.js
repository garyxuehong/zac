/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />
//DOCUMENTATION: https://hanumanum.github.io/js-turtle/
/*
showGrid(20);      
forward(distance)  
right(angle)       
left(angle) 	   
goto(x,y) 	       
clear() 	       
penup() 	       
pendown() 	       
reset() 	       
angle(angle)	   
width(width)       

color(r,g,b)
color([r,g,b])
color("red")
color("#ff0000")
*/



setSpeed(100);

function square(num, x, y, ang) {
    goto(x, y);
    angle(ang)
    forward(num)
    right(ang)
    forward(num)
    right(180-ang)
    forward(num)
    right(ang)
    forward(num)
    right(180-ang)

}

square(50, 0, 0, 90);
square(50, 0, 0, 45)
square(50, 100, 100,45 )
