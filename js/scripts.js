
const elements = {
    toggle: document.querySelector(".toggle"),
    menuToggle:document.querySelector(".menu-toggle"),
    close:document.querySelector(".cross"),
    assist:document.querySelector(".nav-btn"),
    formAssist: document.querySelector(".assistencia"),
    formAssistTwo: document.querySelector(".assist"),
    retract:document.querySelector(".fi-bs-exit"),
    headerItens: document.querySelectorAll(".coluna")
}
const single = {
    produtos: document.getElementById("produtos"),
    catLivre: document.getElementById("livre"),
    catStrong: document.getElementById("strong"),
    main: document.getElementsByTagName("main"),
    promoteHour: document.querySelector(".section__title-timer"),
    catRecommended: document.querySelector(".recomendacao__btn"),
    betters: document.querySelectorAll(".boxes__item")
}
const filters = {
    checkbox: document.querySelectorAll(".check"),
    seletores: document.querySelectorAll(".produtos__sidebar-btn"),
    boxes: document.querySelectorAll(".box__cards"),
    qntde: document.getElementById("quantity"),
    more: document.querySelector(".more"),
    column: document.querySelector(".column"),
    list: document.querySelector(".list"),
    filter: document.querySelector(".filter"),
}
const modal = {
    opened: document.getElementById("modal"),
    box: document.querySelectorAll(".box__cards"),
    addCart: document.querySelectorAll(".box__cards--btn"),
    dms: document.querySelector(".dismiss"),
    image: document.querySelectorAll(".box__cards-img"),
    modalImg: document.getElementById("modal-img"),
    modalThumbs: document.querySelector(".bloco__imgs-thumbs"),
    line: document.querySelector(".recomendacao__line"),
    title: document.getElementById("modal-title"),
    dsc: document.getElementById("modal-dsc"),
    boxTitle: document.querySelectorAll(".box__title"),
    openCarMarket: document.getElementById("car-market"),
    addCart: document.querySelector(".add--cart"),
    popUpCart: document.querySelector(".confirm--carrinho"),
    btnCart: document.querySelector(".confirm--accept"),
    btnDecline: document.querySelector(".confirm--decline")
}
const _gallery = [
    ["./_assets/sigma/Cross Angular.jpg", "./_assets/sigma/Cross Angular 2.jpg"],
    ["./_assets/sigma/Deltoide maquina - (SG-0860) (1).png", "./_assets/sigma/Deltoide maquina - (SG-0860) (2).png", "./_assets/sigma/Deltoide maquina - (SG-0860) (5).png"],
    ["./_assets/sigma/Extensora com Flexora Deitada Conjugada (1).jpg", "./_assets/sigma/Extensora com Flexora Deitada Conjugada (2).jpg"],
    ["./_assets/sigma/Leg Horizontal (1).jpg", "./_assets/sigma/Leg Horizontal (2).jpg", "./_assets/sigma/Leg Horizontal (3).jpg"],
    ["./_assets/sigma/LEG PRESS REG SG_Camera_SOLIDWORKS Viewport 2.png", "./_assets/sigma/LEG PRESS REG SG_Camera_SOLIDWORKS Viewport 3.png", "./_assets/sigma/LEG PRESS REG SG_Camera_SOLIDWORKS Viewport.png"],
    ["./_assets/sigma/Supino Multifuncional - (SG-0980) (1).png", "./_assets/sigma/Supino Multifuncional - (SG-0980) (2).png", "./_assets/sigma/Supino Multifuncional - (SG-0980) (3).png"],
    ["./_assets/sigma/Flexo Extensora (1).jpeg", "./_assets/sigma/Flexo Extensora (2).jpeg"],
    ["./_assets/evo/Apolete (2).png", "./_assets/evo/Apolete (1).png", "./_assets/evo/Apolete (5).png"],
    ["./_assets/evo/Cross Angular (1).png", "./_assets/evo/Cross Angular (2).png"],
    ["./_assets/evo/Cross com smith (2).png", "./_assets/evo/Cross com smith (3).png", "./_assets/evo/Cross com smith (5).png"],
    ["./_assets/evo/Extensora com flexora pantografica (4).png", "./_assets/evo/Extensora com flexora pantografica (2).png", "./_assets/evo/Extensora com flexora pantografica (3).png"],
    ["./_assets/evo/Flexora Sentada (3).jpg", "./_assets/evo/Flexora Sentada (1).jpg", "./_assets/evo/Flexora Sentada (4).jpg"],
    ["./_assets/evo/Flexora vertical com rapid fire 1.jpg", "./_assets/evo/Flexora vertical com rapid fire 2.jpg", "./_assets/evo/Flexora vertical com rapid fire 3.jpg"],
    ["./_assets/evo/Graviton (1).png", "./_assets/evo/Graviton (2).png", "./_assets/evo/Graviton (5).png"],
    ["./_assets/evo/Leg horizontal (2).png", "./_assets/evo/Leg horizontal (1).png"],
    ["./_assets/evo/Leg press regulavel (3).png", "./_assets/evo/Leg press regulavel (1).png", "./_assets/evo/Leg press regulavel (2).png"],
    ["./_assets/evo/Panturrilha com agachamento (1).png", "./_assets/evo/Panturrilha com agachamento (2).png", "./_assets/evo/Panturrilha com agachamento (4).png"],
    ["./_assets/evo/Panturrilha vertical (1).png", "./_assets/evo/Panturrilha vertical (2).png"],
    ["./_assets/evo/Peck Deck - (EV-0950) (1).png", "./_assets/evo/Peck Deck - (EV-0950) (2).png"],
    ["./_assets/evo/Polia Regulavel Simples (1).png", "./_assets/evo/Polia Regulavel Simples (2).png", "./_assets/evo/Polia Regulavel Simples (3).png"],
    ["./_assets/evo/POLIA SIMPLES OBL 2.png", "./_assets/evo/POLIA SIMPLES OBL 3.png", "./_assets/evo/POLIA SIMPLES OBL.png"],
    ["./_assets/evo/Puxada baixa (1).png", "./_assets/evo/Puxada baixa (2).png", "./_assets/evo/Puxada baixa (3).png"],
    ["./_assets/evo/Supino Vertical Máquina (1).png", "./_assets/evo/Supino Vertical Máquina (2).png"],
    ["./_assets/evo/Triceps maquina (2).png", "./_assets/evo/Triceps maquina (3).png", "./_assets/evo/Triceps maquina (4).png"],
    ["./_assets/cromus/Apolete (1).png", "./_assets/cromus/Apolete (2).png", "./_assets/cromus/Apolete (4).png"],
    ["./_assets/cromus/Biceps maquina (1).png", "./_assets/cromus/Biceps maquina (2).png", "./_assets/cromus/Biceps maquina (4).png"],
    ["./_assets/cromus/CR-0990_TRICEPS MÁQUINA 01.png", "./_assets/cromus/CR-0990_TRICEPS MÁQUINA 02.png", "./_assets/cromus/CR-0990_TRICEPS MÁQUINA 03.png"],
    ["./_assets/cromus/Elevação lateral (1).png", "./_assets/cromus/Elevação lateral (2).png", "./_assets/cromus/Elevação lateral (3).png"],
    ["./_assets/cromus/Gluteo 4 apoio (1).png", "./_assets/cromus/Gluteo 4 apoio (2).png"],
    ["./_assets/cromus/Peck-Deck - (CR-0950) (1).png", "./_assets/cromus/Peck-Deck - (CR-0950) (2).png"],
    ["./_assets/cromus/POLIA BAIXA 4POL_Camera_SOLIDWORKS Viewport 3.png", "./_assets/cromus/POLIA BAIXA 4POL_Camera_SOLIDWORKS Viewport 4.png", "./_assets/cromus/POLIA BAIXA 4POL_Camera_SOLIDWORKS Viewport.png"],
    ["./_assets/cromus/Polia regulavel simples (1).png", "./_assets/cromus/Polia regulavel simples (2).png", "./_assets/cromus/Polia regulavel simples (4).png"]
    ["./_assets/uranos/Abdominal Maquina (2).jpeg", "./_assets/uranos/Abdominal Maquina (1).jpeg"],
    ["./_assets/uranos/Adutor com Abdutor Conjugado Uranos - Copia.jpg"],
    ["./_assets/uranos/Cross angular (1).png", "./_assets/uranos/Cross angular (2).png", "./_assets/uranos/Cross angular (4).png"],
    ["./_assets/uranos/Cross com smith (1).png", "./_assets/uranos/Cross com smith (4).png", "./_assets/uranos/Cross com smith (2).png"],
    ["./_assets/uranos/Cross com Smith - Gancheira (1).png", "./_assets/uranos/Cross com Smith - Gancheira (2).png", "./_assets/uranos/Cross com Smith - Gancheira (3).png"],
    ["./_assets/uranos/Crossover Tradicional (1).jpeg", "./_assets/uranos/Crossover Tradicional (2).jpeg", "./_assets/uranos/Crossover Tradicional (3).jpeg"],
    ["./_assets/uranos/Deltoide Maquina - (UR-0860) (1).png", "./_assets/uranos/Deltoide Maquina - (UR-0860) (2).png", "./_assets/uranos/Deltoide Maquina - (UR-0860) (4).png"],
    ["./_assets/uranos/Desenv. Ombro Maquina (1).jfif", "./_assets/uranos/Desenv. Ombro Maquina (2).jfif", "./_assets/uranos/Desenv. Ombro Maquina (3).jfif"],
    ["./_assets/uranos/Elevação lateral (4).png", "./_assets/uranos/Elevação lateral (2).png", "./_assets/uranos/Elevação lateral (5).png"],
    ["./_assets/uranos/Extensora Uranos (1) - Copia.jpeg", "./_assets/uranos/Extensora Uranos (2).jpeg", "./_assets/uranos/Extensora Uranos (3).jpeg"],
    ["./_assets/uranos/Flexor com extensor.png"],
    ["./_assets/uranos/FLexora Vertical (2).jpeg", "./_assets/uranos/Flexora Vertical.jpeg", "./_assets/uranos/Flexora Vertical - Uranos (1).jpg"],
    ["./_assets/uranos/Graviton Uranos  (1).jpeg", "./_assets/uranos/Graviton (3).png", "./_assets/uranos/Graviton (2).png"],
    ["./_assets/uranos/Peck Deck - (UR-0950) (2).png", "./_assets/uranos/Peck Deck - (UR-0950).png", "./_assets/uranos/Peck Deck - Uranos.jpg"],
    ["./_assets/uranos/Polia Alta (1).jpeg", "./_assets/uranos/Polia Alta (2).jpeg"],
    ["./_assets/uranos/Polia Baixa (Remada) (1).jpeg", "./_assets/uranos/Polia Baixa (Remada) (2).jpeg", "./_assets/uranos/Polia baixa (4).png"],
    ["./_assets/uranos/Polia Reg. Simples - Uranos - Fixa na Parede.jpeg", "./_assets/uranos/polia-reg-simples_02.png", "./_assets/uranos/polia-regulavel-simple.png"],
    ["./_assets/uranos/Pulley com Remada (1).jpg", "./_assets/uranos/Pulley com Remada (2).jpg", "./_assets/uranos/Pulley com Remada (4).jpg"],
    ["./_assets/uranos/Supino multifuncional (1).png", "./_assets/uranos/Supino Multifuncional - (UR-0980) (2).png", "./_assets/uranos/Supino multifuncional (3).png"],
    ["./_assets/uranos/Triceps maquina (2).png", "./_assets/uranos/Triceps maquina (4).png", "./_assets/uranos/Triceps maquina (5).png"],
    ["./_assets/livres e articulado/Banco Nordico (1).jpg", "./_assets/livres e articulado/Banco Nordico (4).jpg"],
    ["./_assets/livres e articulado/Banco Regulavel - Oblongo - 77x40 (4).png", "./_assets/livres e articulado/Banco Regulavel - Oblongo - 77x40 (5).png", "./_assets/livres e articulado/Banco Regulavel - Oblongo - 77x40 (7).png"],
    ["./_assets/livres e articulado/Banco sissy (1).png", "./_assets/livres e articulado/Banco sissy (2).png", "./_assets/livres e articulado/Banco sissy (4).png"],
    ["./_assets/livres e articulado/Banco Triceps (0-90).jpeg"],
    ["./_assets/livres e articulado/Cavalete para Barra (1).jpg", "./_assets/livres e articulado/Cavalete para Barra (2).jpg"],
    ["./_assets/livres e articulado/Elevação Lateral (Deltoide) (1).png", "./_assets/livres e articulado/Elevação Lateral (Deltoide) (3).png", "./_assets/livres e articulado/Elevação Lateral (Deltoide) (4).png"],
    ["./_assets/livres e articulado/ELEVAÇÃO PELVICA (1).png", "./_assets/livres e articulado/Elevação pelvica - (modelo 02).png", "./_assets/livres e articulado/ELEVAÇÃO PELVICA.png"],
    ["./_assets/livres e articulado/Espaldar  (1).jpeg"],
    ["./_assets/livres e articulado/Leg Press 45° (3).jpg", "./_assets/livres e articulado/Leg Press 45° (4).jpg", "./_assets/livres e articulado/Leg Press 45° (5).jpg"],
    ["./_assets/livres e articulado/LG-0435_BANCO DE SUPINO RETO OBL 2.jpg", "./_assets/livres e articulado/LG-0435_BANCO DE SUPINO RETO OBL 3.jpg", "./_assets/livres e articulado/LG-0435_BANCO DE SUPINO RETO OBL 5.jpg"],
    ["./_assets/livres e articulado/Polia Alta Articulada - (LP-0590) - LATERAL DIR..jpg", "./_assets/livres e articulado/Polia Alta Articulada - (LP-0590) - LATERAL ESQ..jpg", "./_assets/livres e articulado/Polia Alta Articulada - (LP-0590).jpg"],
    ["./_assets/livres e articulado/condicionador-abdominal.png"],
    ["./_assets/livres e articulado/banco-para-biceps_01.png", "./_assets/livres e articulado/banco-para-biceps_02.png", "./_assets/livres e articulado/banco-para-biceps_03.png"],
    ["./_assets/livres e articulado/Dorsal-45_01.png", "./_assets/livres e articulado/Dorsal-45_02.png"],
    ["./_assets/livres e articulado/agachamento-sissy_01.png", "./_assets/livres e articulado/Agachamento-sissy_02.png"],
    ["./_assets/livres e articulado/panturrilha-vertical_01.png", "./_assets/livres e articulado/panturrilha-vertical_02.png"],
    ["./_assets/livres e articulado/panturrilha-sentada.png", "./_assets/livres e articulado/panturrilha-sentada_01.png"],
    ["./_assets/livres e articulado/abdominal-45.png", "./_assets/livres e articulado/abdominal-45_02.png"],
    ["./_assets/livres e articulado/Remada Cavalinho  LP-0245 (1).png", "./_assets/livres e articulado/Remada Cavalinho  LP-0245 (2).png", "./_assets/livres e articulado/Remada Cavalinho  LP-0245 (5).png"],
    ["./_assets/livres e articulado/Smith de Parede -  LP-0255_1.png", "./_assets/livres e articulado/Smith de Parede -  LP-0255_2.png", "./_assets/livres e articulado/Smith de Parede -  LP-0255_3.png"],
    ["./_assets/livres e articulado/suporte-halter.png", "./_assets/livres e articulado/suporte-halter_02.png"],
    ["./_assets/livres e articulado/Suporte de Anilhas (1).png", "./_assets/livres e articulado/Suporte de Anilhas (2).png", "./_assets/livres e articulado/Suporte de Anilhas (4).png"]
]
const _dsc = {
    sigma: "A linha Sigma é voltado para treinamento de força. O sistema de carga possibilita ajustes precisos da resistência, permitindo atender diferentes níveis de treinamento.<br><br>Em conjunto, esses aparelhos permitem treinamento versátil, com foco em segurança e controle da carga, tornando possível desenvolver força, equilíbrio muscular e coordenação de forma progressiva.",
    uranos: "A linha Uranos é voltado para treinamento de força. O sistema de carga além de possibilitar ajustes precisos também conta com uma cobertura para maior segurança em seu manuseio, permitindo atender diferentes níveis de treinamento com máxima segurança e comodidade.<br><br>Em conjunto, esses aparelhos permitem versatilidade, segurança e controle da carga, tornando possível desenvolver força, equilíbrio muscular e coordenação de forma progressiva.",
    evo:"A linha Evo é voltado para treinamento de força. O sistema de carga além de possibilitar ajustes precisos também conta com uma cobertura translúcida para maior segurança em seu manuseio, permitindo atender diferentes níveis de treinamento com máxima segurança e comodidade.<br><br>Em conjunto, esses aparelhos permitem versatilidade, segurança e controle da carga, tornando possível desenvolver força, equilíbrio muscular, coordenação de forma progressiva e um visual que chama a atenção no ambiente.",
    cromus: "A linha Cromus é voltado para treinamento de força. O sistema de carga além de possibilitar ajustes precisos também conta com uma cobertura para maior segurança em seu manuseio, permitindo atender diferentes níveis de treinamento com máxima segurança e comodidade.<br><br>Em conjunto, esses aparelhos permitem versatilidade, segurança e controle da carga, tornando possível desenvolver força, equilíbrio muscular e coordenação de forma progressiva.",
    livre: "Os equipamentos livres são voltados para treinamento de força e equilíbrio. Possui um sistema de carregamento por anilhas dando maior liberdade ao usuário, caso queira utilizar cargas muito pesadas, atendendo todos os níveis de treinamento com flexibilidade e personalização. <br><br>Em conjunto, esses aparelhos permitem flexibilidade, maior controle de carga, tornando possível desenvolver força, equilíbrio e coordenação de forma progressiva.",
    strong: "A linha Strong é voltada para treinamento de hipertrofia muscular. Possui um sistema de carregamento por anilhas dando a possibilidade do usuário utilizar cargas extremamente pesadas, estrutura desenhada para suportar treinos extremos. <br><br>Em conjunto, esses aparelhos permitem o controle da carga, tornando possível a hipertrofia muscular e coordenação de forma progressiva.",
    descriptiveSigma: `<li>Regulagem 3 em 1 - Pro</li><li>Código: Profissional - 3 - 60Kg </li><li>Categoria: Sigma</li>
                <li>Descrição</li>
                <li>Espuma Material: Densidade AG 120</li>
                <li>Estofado: Courvin padrão "Náutico" Antimofo</li>
                <li>Pino Mola c/ regulagem e rosca reforçada</li>
                <li>Pintura eletrostática (alta resistência a corrosão)</li>
                <li>Solda: MIG, garantindo qualidade e durabilidade</li>
                <li>Tubulação: 2 a 3 polegadas com 2,25 a 3mm de espessura</li>`,
    descriptiveUranos: `<li>Código: Uranos - 3 Pol. - Fechada </li><li>Categoria: Uranos</li>
                <li>Descrição</li>

                <li>Acabamento: Carenagens em PS alto Impacto (Fechamento Total)</li>
                <li>Bateria de Peso: Aço Fundido</li>
                <li>Cabo de aço em Nylon (Alta resistência) an cor preta</li>
                <li>Espuma Material: Densidade AG 120</li>
                <li>Estofado: Courvin padrão "Náutico" Antimofo</li>
                <li>Guia de bateria: Aço Inox</li>
                <li>Pino Mola c/ regulagem e rosca reforçada</li>
                <li>Pintura eletrostática (alta resistência a corrosão)</li>
                <li>Solda: MIG, garantindo qualidade e durabilidade</li>
                <li>Tubulação: 2 a 3 polegadas com 2,25 a 3mm de espessura</li>`,
    descriptiveCromus: `<li>Código: Cromus - 4 Pol. - Fechada </li><li>Categoria: Cromus</li>
                <li>Descrição</li>

                <li>Acabamento: Carenagens em PS alto Impacto (Fechamento Total)</li>
                <li>Bateria de Peso: Aço Fundido</li>
                <li>Cabo de aço em Nylon (Alta resistência) an cor preta</li>
                <li>Espuma Material: Densidade AG 120</li>
                <li>Estofado: Courvin padrão "Náutico" Antimofo</li>
                <li>Guia de bateria: Aço Inox</li>
                <li>Pino Mola c/ regulagem e rosca reforçada</li>
                <li>Pintura eletrostática (alta resistência a corrosão)</li>
                <li>Solda: MIG, garantindo qualidade e durabilidade</li>
                <li>Tubulação: 2 a 4 polegadas com 2,25 a 3mm de espessura</li>`,
    descriptiveEvo: `<li>Código: EVO - Oblonga - Acrílico </li><li>Categoria: EVO</li>
                <li>Descrição</li>

                <li>Acabamento: Carenagens Acrílico (Fechamento Total em Fume ou Leitoso)</li>
                <li>Bateria de Peso: Aço Fundido</li>
                <li>Cabo de aço em Nylon (Alta resistência) an cor preta</li>
                <li>Espuma Material: Densidade AG 120</li>
                <li>Estofado: Courvin padrão "Náutico" Antimofo</li>
                <li>Guia de bateria: Aço Inox</li>
                <li>Pino Mola c/ regulagem e rosca reforçada</li>
                <li>Pintura eletrostática (alta resistência a corrosão)</li>
                <li>Solda: MIG, garantindo qualidade e durabilidade</li>
                <li>Tubulação: Oblongo (150mmx0,50mm) com 3mm de espessura</li>`,
    descriptiveLivre: `<li>Código: Peso Livre - 3 Pol</li><li>Categoria: Peso Livre</li>
                <li>Descrição</li>
                <li>Espuma Material: Densidade AG 120</li>
                <li>Estofado: Courvin padrão "Náutico" Antimofo</li>
                <li>Pino Mola c/ regulagem e rosca reforçada</li>
                <li>Pintura eletrostática (alta resistência a corrosão)</li>
                <li>Solda: MIG, garantindo qualidade e durabilidade</li>
                <li>Tubulação: 2 a 3 polegadas com 2,25 a 3mm de espessura</li>`
}
function close(modalElement) {
    modal.dms.addEventListener("click", ()=>{
        modalElement.style.display = "none";
    })
}
console.log(_gallery[0])
let tags = document.querySelectorAll(".txt-tags");
function descLines() {
    modal.dsc.innerHTML = "";
    let descriptive = document.querySelector("#list");
    descriptive.innerHTML = "";
    if (modal.line.innerHTML.toLowerCase() == "linha sigma"){
        console.log("sigma")
        modal.dsc.innerHTML = _dsc.sigma;
        descriptive.innerHTML = _dsc.descriptiveSigma;
    }
    if(modal.line.innerHTML.toLowerCase() == "linha evo"){
        console.log("evo")
        modal.dsc.innerHTML = _dsc.evo;
        descriptive.innerHTML = _dsc.descriptiveEvo;
    }
    if(modal.line.innerHTML.toLowerCase() == "linha uranos"){
        console.log("uranos")
        modal.dsc.innerHTML = _dsc.uranos;
        descriptive.innerHTML = _dsc.descriptiveUranos;
    }
    if(modal.line.innerHTML.toLowerCase() == "linha cromus"){
        console.log("cromus")
        modal.dsc.innerHTML = _dsc.cromus;
        descriptive.innerHTML = _dsc.descriptiveCromus;
    }
    if(modal.line.innerHTML.toLowerCase() == "linha livre"){
        console.log("livre")
        modal.dsc.innerHTML = _dsc.livre;
        descriptive.innerHTML = _dsc.descriptiveLivre;
    }
    if(modal.line.innerHTML.toLowerCase() == "linha livre"){
        console.log("livre")
        modal.dsc.innerHTML = _dsc.livre;
    }
}
function openModal() {
    modal.box.forEach((item, index)=>{
        item.addEventListener("click", ()=>{
            modal.opened.style.display = "block";
            modal.modalImg.src = modal.image[index].src
            modal.title.innerHTML = modal.boxTitle[index].innerHTML
            modal.line.innerHTML = tags[index].innerHTML;
            let modalElement = modal.opened;
            let thumbs = Array.from(modal.modalThumbs.children)
            thumbs.forEach(otherItem=>{
                otherItem.style.display = "block";
                otherItem.addEventListener("click", ()=>{
                    modal.modalImg.src = otherItem.src;
                    console.log(otherItem.src)
                })
            })
            if(thumbs.length > _gallery[index].length){
                let c = _gallery[index].length;
                thumbs[c].style.display = "none";
            }
            
            for(let i=0; i < thumbs.length; i++){
                thumbs[i].src = _gallery[index][i]
            }
            descLines();
            close(modalElement);
        })
    })
}
function column() {
    for(let i=0; i< modal.box.length; i++){
        modal.box[i].classList.value = "";
        modal.box[i].classList.value = "box__cards";
    }
}
function list() {
    for(let i=0; i< modal.box.length; i++){
        modal.box[i].classList.value = "";
        document.querySelector(".box").style.gap = "8px";
        modal.box[i].classList.value = "box__cards-lines";
    }

}

openModal();

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

function caught(elemento) {
    let currentPath = window.location.pathname;
    console.log(currentPath)
    let locale = window.location.pathname.replace(currentPath, elemento);
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
    //window.addEventListener("popstate", (e))
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
elements.assist.addEventListener("click", screenAss)

elements.toggle.addEventListener("click", ()=>{
    elements.menuToggle.classList.toggle("menu-toggle--active");
    elements.close.addEventListener("click", ()=>{
        elements.toggle.dispatchEvent(new Event("click"))
    })
})

for (let i=0; i< elements.headerItens.length; i++){
    let headerBtns = Array.from(elements.headerItens[i].children)
    headerBtns.forEach(item=>{
        item.addEventListener("click", ()=>{
            console.log(item.innerHTML.toLowerCase())
            let elemento = item.innerHTML.toLowerCase();
            caught(elemento)
            filtrar(elemento)
        })
    })
}
let cacheTitle = [];
let cacheImg = [];
let cacheLine = [];


modal.addCart.addEventListener("click",()=>{
    console.log(modal.line.innerHTML)
    cacheTitle.push(modal.title.innerHTML)
    cacheImg.push(modal.modalImg.src)
    cacheLine.push(modal.line.innerHTML)
    
    const voltarProduto = document.querySelector(".carrinho__buttons--back")
    const enviar = document.querySelector(".carrinho__buttons--confirm")

    modal.popUpCart.style.display = "block";
    modal.btnCart.addEventListener("click", ()=>{
        let carrinho = document.querySelector(".carrinho");
        
        carrinho.innerHTML = "";
        for (let i = 0; i < cacheTitle.length; i++) {
          let div = document.createElement("div");
          div.classList.add("carrinho__cards");
        
          div.innerHTML = `
            <img src="${cacheImg[i]}" alt="${cacheTitle[i]}" class="carrinho__cards-img">
            <div>
              <h3 class="carrinho__title">${cacheTitle[i]}</h3>
              <p class="txt">${cacheLine[i]}</p>
            </div>
          `;
        
          carrinho.appendChild(div);
        }
        let divBtn = document.createElement("div");
        divBtn.classList.add("carrinho__buttons");
        divBtn.innerHTML = `<div class="carrinho__buttons">
                    <button type="button" class="carrinho__buttons--back" onclick="voltarProduto()">
                        Voltar ao carrinho
                    </button>
                    <button type="button" class="carrinho__buttons--confirm" onclick="enviarProdutos()">
                        Enviar orçamento
                    </button>
                </div>`
        carrinho.append(divBtn);
        modal.opened.style.display = "none";
        modal.popUpCart.style.display = "none";
        single.produtos.style.display = "none";
        modal.openCarMarket.style.display = "block";
    })
    modal.btnDecline.addEventListener("click", ()=>{
        modal.opened.style.display = "none";
        modal.popUpCart.style.display = "none";
    })

})
function voltarProduto() {
    console.log("voltarProduto")
    modal.openCarMarket.style.display = "none";
    single.produtos.style.display = "block";
}
function enviarProdutos(){
    let quanti = `Olá, tudo bem? Eu gostaria de fazer orçamento destes itens:`;
    for(let i=0; i<cacheTitle.length; i++){
        quanti += ` ${cacheTitle[i]}, `
        
    }
    window.open(`https://wa.me/5519990181064?text=${quanti}`, '_blank');
    
}
if(window.location.pathname == "/macsport/index.html"){
    let dataId = document.getElementsByTagName("h3");
    

    single.produtos.style.display = "none";
    //Enviar para equipamentos Strong.
    
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