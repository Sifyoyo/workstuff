
oppstart();

function oppstart(){
   document.addEventListener('scroll', function(e) {
   var hoyde = document.body;
   var scrollHoyde = hoyde.scrollTop;
   var scrolltest = window.scrollY;

    var h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
 
    var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
 
    
    //Bakgrunn Hvit - Mørke Bblå
    if(percent <= 11){
         console.log(percent);
					document.getElementsByClassName("main-page-wrapper")[0].style.backgroundColor = "white";
				}
     else{
         	console.log(percent);
					document.getElementsByClassName("main-page-wrapper")[0].style.backgroundColor = "#1B213D";
    }

    // pre main section
    if(percent >= 11 && percent <=29){
        document.getElementById("forside_pre_main").style.opacity = "1";
    }     else{
        document.getElementById("forside_pre_main").style.opacity = "0";
    }
		 

    //Bakgrunn Mørkebå til white
    if(percent >=29 && percent <=53){
        document.getElementsByClassName("main-page-wrapper")[0].style.backgroundColor = "white";
    }

    //First section
    if(percent >=29 && percent <=53){
        document.getElementById("forside_main_1st").style.opacity = "1";
    }
    else{
        document.getElementById("forside_main_1st").style.opacity = "0";
    }

    // 2nd Section
    if(percent >= 53 && percent <= 100){
            document.getElementById("forside_main_2nd").style.opacity = "1";
    }    else{
            document.getElementById("forside_main_2nd").style.opacity = "0";
    }

    })

}
