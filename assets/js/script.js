const textArea = document.querySelector('textarea');
const btnTwettar = document.querySelector('button');
const listaTT = document.querySelector(".main__listTT");


// function handleTextArea(event){
    //     let valorTxtArea = event.target.value
    
    //     if(valorTxtArea.length > 0){
        //         btnTwettar.disabled = false;
        //        }else{
            //         btnTwettar.disabled = true;
            //        }
            //     }
            
const handleTextArea = (event) => {
    const valorTxtArea = event.target.value
    
    if(valorTxtArea.length > 0){
        btnTwettar.disabled = false;
    }else{
        btnTwettar.disabled = true;
    }
}
            
textArea.addEventListener('input', handleTextArea);

function getTwitter(event){
    event.preventDefault();
    const valueTxtArea = textArea.value;
    createTwitter(valueTxtArea);
}

btnTwettar.addEventListener('click', getTwitter);

function createTwitter(valueText){
    let date = new Date();
    let hora = date.getHours()
    let minuto = date.getMinutes()

    const TT = {
        nome: "Gustavo",
        foto: "./assets/img/ProfilePic.png",
        usuario: "@gustamds",
        texto: valueText,
        tempo: `${hora}:${minuto}`
    }
    listarTT(TT)
}

function listarTT(TT){
    const {nome, foto, usuario, texto, tempo} = TT

    let li = document.createElement("li");
    li.classList.add("main__TT");
    
    let img = document.createElement("img");
    img.src = foto;
    img.classList.add("main__fotoTT");

    let div = document.createElement("div");
    div.classList.add("main__contentTT");

    let h2 = document.createElement("h2");
    h2.innerText = nome;

    let span = document.createElement("span");
    span.innerText = `${usuario} - ${tempo}`

    let p = document.createElement("p");
    p.innerText = texto;

    li.appendChild(img);
    li.appendChild(div);
    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    listaTT.appendChild(li);

    textArea.value = "";
    btnTwettar.disabled = true;
}