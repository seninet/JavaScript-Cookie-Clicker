(() => {
    // link counter and click and score
        let imageBtn = document.getElementById("imagebtn");
        let counterInput = document.getElementById("counter");
        let score=document.getElementById("scorebox");
        let counter = 0;
        /*imageBtn.addEventListener("click", () => {
            counter = counter + 1;
        
            counterInput.value = counter;
            score.value=counter;
        });*/
        function update(){
            counterInput.value = counter;
            //score.value=counter;
            document.getElementById("costautoclick").innerHTML  = "Price= " + ((autoClick +1)*20) +  "pts";
            document.getElementById("persecondcookies").innerHTML  = (((autoClick))) + " click/second";
            document.getElementById("amountmultiplier2").innerHTML  = " x" + (multiplier+1);
            document.getElementById("costmultiplier").innerHTML  = "Price= " + ((multiplier+2)*10)  + " pts";
            document.getElementById("currentmultiplier").innerHTML  = "your current multiplier is x" + (multiplier);
        }

        imageBtn.onclick=function(){clickfunction();};
        function clickfunction(){
            counter = counter + 1;
            
            //localStorage.setItem("counter",counter);
            //score.value= localStorage.getItem("counter");
            //score.value= parseInt(score.value);
            update();
            
        };
        
           
        
        //console.log(score.value);

       


        //Auto-clicker:
    var autoClick = 0;
    
        function timer() {
            counter = counter + autoClick;
        update();}
    setInterval(timer, 1000);        
    let autoclicker= document.getElementById("btn-3");
    autoclicker.onclick= function() {increase();}
    function increase() {
        //setInterval(autocliker, 1000);
           // for (var i = 0; i < 10; i++) {
           //     score.value= autoClick += 1;}
                //if(autoClick==5){
                //    clearInterval(interval);}
            if (counter >= ((autoClick + 1) * 20)) {
                counter = counter - ((autoClick + 1) * 20);
                autoClick = autoClick + 1;
                update();
            }
        
    }
    
    //var interval = setInterval(increase, 1000);
        
})();

/*
var input=document.getElementById("pass-one");
    var counter=document.getElementById("counter"); 
   // let nombremaxdecharacter = passone.getAttribute("maxlength"); //=10
    //console.log(nombremaxdecharacter);
    input.addEventListener("keyup",function(){
        var nbrecaractere=input.value.split(''); //to split characters or words of a string
        counter.innerText=nbrecaractere.length + "/10";
    })
*/
/* //draft1
counter.oninput=function(){
        this.value= imagebtn.addEventListener("keyup",function(){
            var nbrecaractere=imagebtn.value.split('');
            counter.innerText=nbrecaractere.length;
        })
    }
*/
/*
    var counter =document.getElementById("counter");
    var imagebtn =document.getElementById("imagebtn");
    
        imagebtn.onclick= function() {myFunction();};
        function myFunction() {
            imagebtn.addEventListener("keyup",function(){
                var cliques=imagebtn.value.split('');
                counter.innerText=cliques.length;
            })
        }
*/

//Auto-clicker
/*https://stackoverflow.com/questions/55284406/how-to-make-an-auto-clicker-in-javascript
var number = 0;

function increase() {
  for (var i = 0; i < 1; i++) {
    document.getElementById("number").innerHTML = number += 1
  }
}
var interval = setInterval(increase, 1000);

clearInterval(interval);

https://www.w3schools.com/jsref/met_win_setinterval.asp
*/

/* Draft2
var number = 0;
    function increase() {
        //setInterval(autocliker, 1000);
            for (var i = 0; i < 5; i++) {
                score.value= number += 1;}
                if(number==5){
                    clearInterval(interval);
                }
            
    }
    var interval = setInterval(increase, 1000);
*/
/*
//Auto-clicker:
    
    let autoclicker= document.getElementById("btn-3");
    autoclicker.onclick= function() {increase();};
        function increase() {
            localStorage.setItem("score",score);
            score.value= Number(score.value) + Number(5);
                
        }
*/

/*
 //Multiplyer: draft1
    let MultiplyerBTN= document.getElementById("btn-1");
    MultiplyerBTN.onclick= function() {multiply();};
        function multiply() {
            localStorage.setItem("score",score.value);
            score.value= localStorage.getItem("score");
            score.value= score.value *4;
            //localStorage.setItem("score*",score.value);
            //var scoore = localStorage.getItem('score*');
                
        }
*/