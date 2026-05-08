const thanks = {
    counter: document.querySelector(".thanks__counter"),

}

function counterThanks(){
    thanks.counter = 5;
    let countDown = thanks.counter;        
    setInterval(()=>{
        countDown--;
        console.log(countDown);   
        
        if(countDown <= 0) {
            window.location.href = "index.html";
        }
    }, 1000);
}
//counterThanks();