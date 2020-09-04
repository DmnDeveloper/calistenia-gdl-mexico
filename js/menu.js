//este es el menu lateral
let btnAbrir = document.getElementById('btnAbrir')
let btnCerrar = document.getElementById('btnCerrar')
let fondo = document.getElementById('fondo')
let menuLateral = document.querySelector('.menuLateral')


btnAbrir.addEventListener('click', abrirMenu)
btnCerrar.addEventListener('click', cerrarMenu)
fondo.addEventListener('click', cerrarMenu)

function abrirMenu(){
    menuLateral.style.left = 0;
    fondo.style.setProperty('display', 'block')
}

function cerrarMenu(){
    menuLateral.style.left = "-1000px";
    fondo.style.setProperty('display', 'none')
}


//esta es la ventana de inico de sesion 
const addAttributes = (element, attrObj) => {
    for (let attr in attrObj) {
        if (attrObj.hasOwnProperty(attr))
        element.setAttribute(attr,attrObj[attr])
    }
};

const createCustomElement = (element,attributes,children) => {
    let customElement = document.createElement(element);
    if (children !== undefined) children.forEach(el => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11)
  customElement.appendChild(el);      
    } else {
        customElement.innerHTML += el;
    }
});
addAttributes(customElement, attributes);
return customElement;
};

$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
         opacity: 'toggle'
    }, "slow");
});
$('#mostrarLogin').hide();

const mostrar = function(){
    document.getElementById('mostrarLogin').style.display="block";
    cerrarMenu();
}










