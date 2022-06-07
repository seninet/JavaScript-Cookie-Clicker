(() => {
    // Describe variables:
        let imageBtn = document.getElementById("imagebtn");
        let counterInput = document.getElementById("counter");
        let score=document.getElementById("scorebox");
        let counter = 0;
    
        // Update function updates the HTML text in buttons, you need to call this function in other functions (buttons...):
        function update(){
            counterInput.value = counter; 
            document.getElementById("costautoclick").innerHTML  = "Price= " + ((autoClick +1)*20) +  "pts";
            
            document.getElementById("persecondcookies").innerHTML  = (autoClick + 1) + " point(s)/second";
            document.getElementById("amountmultiplier").innerHTML  = " your clicks" + " x" + (multiplier+2);
            document.getElementById("costmultiplier").innerHTML  = "Price= " + ((multiplier+2)*10)  + " pts";
            document.getElementById("currentmultiplier").innerHTML  = "your current multiplier is x" + (multiplier);
        }

        // Creates the click function on the cookie image:
        imageBtn.onclick=function(){clickfunction();};
        function clickfunction(){
            counter = counter + 1;  
            update();
            toaddmultipliervaluetoscore();  
        };
        //Add Hover effect on cookie:
        imageBtn.onmouseover = function() {mouseOver()};
            function mouseOver() {
                imageBtn.style.transform = "scale(1.5)";
            }
        imageBtn.onmouseout = function() {mouseOut()};
        function mouseOut() {
            imageBtn.style.transform = "none";
        }
            
        //Auto-clicker:
        var autoClick = 0;
            
        function timer() {
            counter = counter + autoClick; 
            
        update();}
        setInterval(timer, 1000);        
        let autoclicker= document.getElementById("btn-3");
        autoclicker.onclick= function() {increase();}
        function increase() {
            
                if (counter >= ((autoClick + 1) * 20)) {
                    counter = counter - ((autoClick + 1) * 20);
                    autoClick = autoClick + 1;
                    document.getElementById("currentpersecondcookies").innerHTML= "Autoclicker is on: " + autoClick + " point(s)/second" ;
                    btn3colorchange();
                    update();
                }
                else {
                    alert("You don't have enough points to buy this improvement!");
                }      
        }


        //Multiplyer:
        var multiplier = 1;
        let MultiplyerBTN= document.getElementById("btn-1");
        MultiplyerBTN.onclick= function() {multiply();};
            
        function multiply(){
            if(counter >= ((multiplier+2)*10)){
                counter = counter - ((multiplier+2)*10);
                multiplier = multiplier+2;
                btn1colorchange();
                }
            else {
                alert("You don't have enough points to buy this improvement!");
            }        
            update();
        }
        //To make the multiplier work separately you create this function which add the value of multiplie to each click. 
        function toaddmultipliervaluetoscore() {
            counter = counter + (multiplier-1); 
            update();
            }
        
        //button color change after each buy:
        //var colors=["#804000","#A06300", "#C08600", "#E0A900", "#FFCC00"];
        function btn3colorchange(){      
                
            if(((autoClick + 1) * 20)<=20){
                document.getElementById("btn-3").style.backgroundColor= "#804000";
            }
            else if(20<((autoClick + 1) * 20) && ((autoClick + 1) * 20) <=40){
                document.getElementById("btn-3").style.backgroundColor= "#A06300";
            }
            else if(40<((autoClick + 1) * 20) && ((autoClick + 1) * 20)<=60){
                document.getElementById("btn-3").style.backgroundColor= "#C08600";
            }
            else if(60<((autoClick + 1) * 20) && ((autoClick + 1) * 20)<=80){
                document.getElementById("btn-3").style.backgroundColor= "#E0A900";
            }
            else{
                document.getElementById("btn-3").style.backgroundColor= "#FFCC00";
            }
        }

        function btn1colorchange(){      
                
            if(((multiplier+2)*10)<=30){
                document.getElementById("btn-1").style.backgroundColor= "#804000";
            }
            else if(30<((multiplier+2)*10) && ((multiplier+2)*10) <=50){
                document.getElementById("btn-1").style.backgroundColor= "#A06300";
            }
            else if(50<((multiplier+2)*10) && ((multiplier+2)*10)<=70){
                document.getElementById("btn-1").style.backgroundColor= "#C08600";
            }
            else if(70<((multiplier+2)*10) && ((multiplier+2)*10)<=90){
                document.getElementById("btn-1").style.backgroundColor= "#E0A900";
            }
            else{
                document.getElementById("btn-1").style.backgroundColor= "#FFCC00";
            }
        }

        function btn2colorchange(){      
                
            if(((multiplier+2)*10)<=30){
                document.getElementById("btn-2").style.backgroundColor= "#804000";
            }
            else if(30<((multiplier+2)*10) && ((multiplier+2)*10) <=50){
                document.getElementById("btn-2").style.backgroundColor= "#A06300";
            }
            else if(50<((multiplier+2)*10) && ((multiplier+2)*10)<=70){
                document.getElementById("btn-2").style.backgroundColor= "#C08600";
            }
            else if(70<((multiplier+2)*10) && ((multiplier+2)*10)<=90){
                document.getElementById("btn-2").style.backgroundColor= "#E0A900";
            }
            else{
                document.getElementById("btn-2").style.backgroundColor= "#FFCC00";
            }
        }
       
})();

/*
//Add Hover effect on cookie when clicked:
        function mouseOver() {
            document.getElementById("image").style.height = "220px";
            //document.getElementById("image").style.width = "auto";
        } 
*/