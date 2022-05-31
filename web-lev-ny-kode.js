window.addEventListener(
    "load",
    (e) => {

        //Elements to/and/or change/observe on intersect 
        const mainWrapper = document.getElementsByClassName("main-page-wrapper")[0];
        const forside_pre_main = document.getElementById("forside_pre_main");
        const forsideHero = document.getElementById("forside_hero");
        const forside_main_1st = document.getElementById("forside_main_1st");
        const forside_main_2nd = document.getElementById("forside_main_2nd");

        //Hero
        ChangeBackground(mainWrapper, forsideHero)
        ShowSection(forsideHero, forsideHero)

        //First section
        ShowSection(forside_pre_main, forside_pre_main);

        //Second section
        ChangeBackgroundSecondTime(mainWrapper,forside_main_1st)
        ShowSection(forside_main_1st,forside_main_1st);

        //Third section
        ShowSection(forside_main_2nd, forside_main_2nd)

    },
    false
  );


  const ChangeBackground = (ElToChange, ElToObserve) => {
    

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7,
    }

    const observer = new IntersectionObserver(Elentries =>{

        // {Elentries[0].isIntersecting ? ElToChange.style.backgroundColor = "white" : ElToChange.style.backgroundColor = "#1B213D"}

        console.log(Elentries[0])

        if(Elentries[0].isIntersecting){
            ElToChange.style.backgroundColor = "white"

        }
        else{
            ElToChange.style.backgroundColor = "#1B213D"
        }

    }, 
        options
    )

    return  observer.observe(ElToObserve);
  }

  const ChangeBackgroundSecondTime = (ElToChange, ElToObserve) => {
    

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
    }

    const observer = new IntersectionObserver(Elentries =>{

        if(Elentries[0].intersectionRatio > 0){
            {Elentries[0].isIntersecting ? ElToChange.style.backgroundColor = "white" : ElToChange.style.backgroundColor = "#1B213D", console.log("im the one running dawg")}
        }
        else{

        }

        

    }, 
        options
    )

    return  observer.observe(ElToObserve);
  }

  const ShowSection = (ElToChange, ElToObserve) => {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    }

    const observer = new IntersectionObserver(Elentries =>{

        {Elentries[0].isIntersecting ? ElToChange.style.opacity = "1" : ElToChange.style.opacity = "0"}
    }, 
        options
    )

    return  observer.observe(ElToObserve);
  }