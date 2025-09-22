const elements = {
    toggle: document.querySelector(".toggle"),
    menuToggle:document.querySelector(".menu-toggle"),
    close:document.querySelector(".cross"),
    assist:document.querySelector(".nav-btn"),
    formAssist: document.querySelector(".assistencia"),
    formAssistTwo: document.querySelector(".assist"),
    retract:document.querySelector(".fi-bs-exit")
}

const filters = {
    checkbox: document.querySelectorAll(".check"),
    seletores: document.querySelectorAll(".produtos__sidebar-btn"),
    boxes: document.querySelectorAll(".box__cards"),
    qntde: document.getElementById("quantity"),
    more: document.querySelector(".more")
}

function screenAss(e) {
    e.preventDefault();
    elements.formAssist.classList.toggle("assistencia--active");
    elements.retract.addEventListener("click", ()=> {
        elements.assist.dispatchEvent(new Event("click"))});
}
filters.seletores.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        let chevron = document.querySelectorAll(".produtos-symbol");
        let select = document.querySelectorAll(".seletores");
        chevron[index].classList.toggle("produtos-symbol--active")
        select[index].classList.toggle("seletores--active")
    })
})

let tags = document.querySelectorAll(".txt-tags");

filters.boxes.forEach((box, index) =>{
    if(index >= 15) {
        box.style.display = "none";
    }
})
function quantify() {
    const visiveis = Array.from(filters.boxes).filter(
        box => box.style.display !== "none").length;
    let tam = filters.boxes.length;
    filters.qntde.innerHTML = `Mostrando ${visiveis} de ${tam} resultados`
    filters.more.addEventListener("click", (e)=>{
        for(let i=0; i< filters.boxes.length; i++){
            filters.boxes[i].style.display = "block";
        }
        filters.qntde.innerHTML = `Mostrando ${tam} de ${tam} resultados`
        e.target.style.opacity = "0";
    })
}
function filter() {
    for(let i=0; i < filters.boxes.length; i++){
        filters.boxes[i].style.display = "none";
    }
    filters.checkbox.forEach((item)=>{
        item.addEventListener("change", ()=>{
            for(let i = 0; i< tags.length; i ++){
                let search = item.name.trim().toLowerCase() === tags[i].innerHTML.split(" ")[1].toLowerCase();
                if(search === true){ 
                    filters.boxes[i].style.display = "block";
                }
                quantify()
            }
        })
    })
    const anyChecked = Array.from(filters.checkbox).some(f => f.checked);
    if(!anyChecked) {
        filters.boxes.forEach(boxes =>{
            boxes.style.display = "block";
            quantify()
        })
    }
}
quantify();

elements.assist.addEventListener("click", screenAss)

elements.toggle.addEventListener("click", ()=>{
    elements.menuToggle.classList.toggle("menu-toggle--active");
    elements.close.addEventListener("click", ()=>{
        elements.toggle.dispatchEvent(new Event("click"))
    })
})


if(window.location.pathname == "/macsport/index.html"){
    let dataId = document.getElementsByTagName("h3");
    const single = {
        produtos: document.getElementById("produtos"),
        catLivre: document.getElementById("livre"),
        catStrong: document.getElementById("strong"),
        main: document.getElementsByTagName("main"),
        promoteHour: document.querySelector(".section__title-timer"),
        catRecommended: document.querySelector(".recomendacao__btn"),
        betters: document.querySelectorAll(".boxes__item")
    }

    single.produtos.style.display = "none";
    //Enviar para equipamentos Strong.
    function caught(elemento) {
        let locale = window.location.pathname.replace("index.html", elemento);
        single.main[0].innerHTML = "";
        single.produtos.style.display = "block";
        history.pushState({}, "", locale)
        window.scrollTo(0,0);
        
        document.addEventListener("keydown", (event) => {
            if (event.key === "F5") {
                event.preventDefault(); 
                let localeIndex = window.location.pathname.replace(elemento, "index.html");
                history.pushState({},"",localeIndex);
                window.location.reload();
            }
        });
        window.addEventListener("beforeunload", (e)=>{
            let localeIndex = window.location.pathname.replace(elemento, "index.html");
            history.pushState({},"",localeIndex);
            window.location.reload();
            e.preventDefault();
        })
        window.addEventListener("popstate", (e))
    }
    function filtrar(elemento){
        for(let i=0; i < filters.boxes.length; i++){
            filters.boxes[i].style.display = "none";
        }
        for(let i = 0; i< tags.length; i ++){
            let search = elemento === tags[i].innerHTML.split(" ")[1].toLowerCase();
            if(search === true){ 
                filters.boxes[i].style.display = "block";
            }
        }
    }
    single.catStrong.addEventListener("click", ()=>{
        let elemento = Array.from(dataId).find(title=> title.dataset.line === "strong").innerHTML.toLowerCase();
        caught(elemento)

        filters.seletores[0].dispatchEvent(new Event("click"));
        filters.checkbox[1].checked = true;
        filtrar(elemento)
        quantify()
    })
    
    //Enviar para equipamentos livres.
    single.catLivre.addEventListener("click", ()=>{
        let elemento = Array.from(dataId).find(title=> title.dataset.line === "livre").innerHTML.toLowerCase();
        caught(elemento);

        filters.seletores[0].dispatchEvent(new Event("click"));
        filters.checkbox[0].checked = true;
        filtrar(elemento)
        quantify();
    })
    let date = new Date("2025-09-22T00:00:00");
    let duration = new Date(date);
    duration.setDate(date.getDate() + 3);
    
    function atualizarContador() {
        let agora = new Date();
        let tempoRestante = duration - agora;
        if (tempoRestante <= 0) {
            single.promoteHour.innerHTML = "Esgotado!"
            clearInterval(intervalo);
            return;
        }
        let dias = Math.floor(tempoRestante / (1000 *60*60*24));
        let horas = Math.floor((tempoRestante / (1000 * 60 * 60)));
        let minutos = Math.floor((tempoRestante / (1000 * 60)) % 60);
        let segundos = Math.floor((tempoRestante / 1000) % 60)

        single.promoteHour.innerHTML = `${horas}:${minutos}:${segundos}`
    }
    atualizarContador();
    let intervalo = setInterval(atualizarContador, 1000);
    
    single.catRecommended.addEventListener("click", ()=>{
        let elemento = document.querySelector(".recomendacao__line").innerHTML.toLocaleLowerCase().split(" ")[1];
        caught(elemento)

        filters.seletores[0].dispatchEvent(new Event("click"));
        filters.checkbox[4].checked = true;
        filtrar(elemento)
        quantify();
    });
    single.betters.forEach((item, index) =>{
        item.addEventListener("click", ()=>{
            let elemento = item.dataset.line.toLowerCase();
            caught(elemento)
            
            switch(index){
                case 0:
                filters.seletores[0].dispatchEvent(new Event("click"));
                filters.checkbox[0].checked = true;
                filtrar(elemento)
                quantify()
                break;
                case 1:
                filters.seletores[0].dispatchEvent(new Event("click"));
                filters.checkbox[5].checked = true;
                filtrar(elemento)
                quantify()
                break;
                case 2:
                filters.seletores[0].dispatchEvent(new Event("click"));
                filters.checkbox[3].checked = true;
                filtrar(elemento)
                quantify()
                break;
            }
        })
    })
}