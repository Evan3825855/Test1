function newscene()
{
    this.draw = function()
    {
        push()
        strokeWeight(2);
        translate(width/2, height/2);
        
        background(0);
        var radius =200
        var numPoints = 60;
        var angle = TWO_PI/numPoints;
        var secondsRadius = radius * 0.72;
        var minutesRadius = radius * 0.60;
        var hoursRadius = radius * 0.50;
      
        strokeWeight(10);
        point(width/2, height/2);
        
        strokeWeight(2);
        noFill();
        circle(0, 0,600)
        
        strokeWeight(2);
        stroke(255);
        beginShape(POINTS);
        var i = 0;
        while (i < 60 ) {
            x = cos(angle*i) * secondsRadius; 
            y = sin(angle*i) * secondsRadius;
            vertex(x, y);
            i++;
        }
        endShape(); 
        var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
        var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
        var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
        
        strokeWeight(1);
        line(0,0, cos(s) * secondsRadius, sin(s) * secondsRadius);
        strokeWeight(2);
        line(0, 0, cos(m) * minutesRadius, sin(m) * minutesRadius);
        strokeWeight(4);  // hour hand should be thicker
        line(0, 0, cos(h) * hoursRadius, sin(h) * hoursRadius);
        pop() }
    }