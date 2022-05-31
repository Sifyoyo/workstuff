const getScrollPercent = () => {
    const docHeight = document.documentElement;
    const docBody = document.body;
    
    const scrollT = "scrollTop";
    const scrollH = "scrollHeight";

    const percent = (docHeight[scrollT]||docBody[scrollT]) / (docHeight[scrollH] || docBody[scrollH]) * 100

    return percent;

}

const changeOnScroll = () => {
    document.addEventListener("scroll", function(e){
        console.log(getScrollPercent());
    })
}

changeOnScroll();