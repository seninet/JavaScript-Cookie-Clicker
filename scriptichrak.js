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
            document.getElementById("amountmultiplier2").innerHTML  = " your clicks" + " x" + (multiplier+2);
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
                    update();
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
                }        
            update();
        }
            //To make the multiplier work separately you create this function which add the value of multiplie to each click. I substract -1 because i want to multiply by 3 then 6 then 9. If you take off "-1" it will be times 4, then 6 then 8 everytime you buy. I tried adding this function in 3 different places but it only work the way we want it to, if I put it in click function.
        function toaddmultipliervaluetoscore() {
            counter = counter + (multiplier-1); 
            update();
            }
            
       
})();

