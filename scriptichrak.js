(() => {
    // link counter and click 
    var counter =document.getElementById("counter");
    var imagebtn =document.getElementById("imagebtn");
    
        imagebtn.onclick= function() {myFunction();};
        function myFunction() {
            imagebtn.addEventListener("keyup",function(){
                var cliques=imagebtn.value.split('');
                counter.innerText=cliques.length;
            })
        }
    
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
/* //draft2
imagebtn.onclick= function() {myFunction();};
        function myFunction() {
            imagebtn.addEventListener("keyup",function(){
                var nbrecaractere=imagebtn.value.split('');
                counter.oninput=function(){
                    this.value=nbrecaractere.length;}
            })
        }

*/