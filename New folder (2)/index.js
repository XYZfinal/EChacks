 var background = document.getElementbyTagName('body');
        background.style.backgroundColor = "black";
        		
        var rand_position_x = function (width){
        return Math.floor(Math.random() * (width + 1));
        };
        		
        		var ball_position_x = 0;	//position of the ball in x axis
        		var ball_weight = 0;			//weight of the ball
        		var	seesaw_angle = 0;
        		var weight_position = 0;	//position of the user movable weight
        		
        		var left_total_weight = 0;	//keep track of total weight on the left side of the seesaw
        		var right_total_weight = 0;	//keep track of the total weight on the right side of the seesaw
            
        
        /*
 						var Ball = function (rand_position_x]) {
            		var weight = 5;
              	this.position_x = rand_position_x;
              	var position_y = 100;
            };
        	
        		var Seesaw = function() {
              	var angle = 0;
            };
            
            var Weight = function() {
              	var distance = 0;
              	var weight = 10;
            };
        */
        
        function calculate_effective_weight(
        
        		
                
     
     