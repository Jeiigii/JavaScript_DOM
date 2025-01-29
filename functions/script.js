/*const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Ruta al archivo HTML
const htmlPath = path.join(__dirname, 'index.html');

// Leer el contenido del archivo HTML
const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// Cargar el archivo HTML en JSDOM
const dom = new JSDOM(htmlContent);

// Obtener el documento simulado
const document = dom.window.document;
*/




let parrafo = document.getElementById('parrafo');
let div1 = document.getElementById('div1');
let lista1 = document.getElementsByClassName('ul1')[0];
let boton1 = document.getElementsByClassName('boton1')[0];
console.log(parrafo.textContent);
console.log(div1.textContent);

let items1 = lista1.getElementsByTagName('li');
for (let i = 0; i < items1.length; i++) {
    console.log(items1[i].textContent);
    
}

boton1.addEventListener('click',() =>{
    boton1.textContent = 'Acabas de presionar el boton1'
});

let tabla1 = document.getElementById('tabla1');
let th1 = document.getElementById('th1');
let th2 = document.getElementById('th2');
let th3 = document.getElementById('th3');

let td1 = document.getElementById('td1');
let td2 = document.getElementById('td2');
let td3 = document.getElementById('td3');
let td4 = document.getElementById('td4');
let td5 = document.getElementById('td5');
let td6 = document.getElementById('td6');

console.log('tabla',tabla1);
console.log('th1: ',th1.textContent);
console.log('th2: ',th2.textContent);
console.log('th3: ',th3.textContent);
console.log('td1: ',td1.textContent);
console.log('td2: ',td2.textContent);
console.log('td3: ', td3.textContent);
console.log('td4: ',td4.textContent);
console.log('td5: ',td5.textContent);
console.log('td6: ',td6.textContent);

let body = document.body;

console.log('Contenido del body: ',body);

let todosLosElementos = document.getElementsByTagName('*');

for (let i = 0; i < todosLosElementos.length; i++) {
    console.log('Elementos ${i + 1}: ',todosLosElementos[i].tagName,todosLosElementos[i].textContent);
    
}

let p1 = div1.querySelector('p');
if(p1){
    console.log(p1.textContent);
}else{
    console.log('No se encontró una p dentro del div.')
}

let items2 = lista1.children;

for (let i = 0; i < items2.length; i++) {
    console.log('Elementos usando children ${i + 1}: ',items2[i].textContent);
    
}

const refParrafo = lista1.parentElement.querySelector('p');
console.log('refParrafo: ',refParrafo);

const refTabla = lista1.parentElement.querySelector('table');

console.log("refTabla ", refTabla.children[1].children[0].children[0].textContent)

const refDiv = refTabla.parentElement.querySelector('div');
console.log('refDiv: ',refDiv);

const refTablaHijos = refTabla.parentElement.querySelectorAll('td');
refTablaHijos.forEach(td => console.log('Contenido td: ',td.textContent));


console.log('refTablaHijos: ',refTablaHijos);

const refTabladiv = refDiv.parentElement.querySelector('table');
console.log('refTablaDiv: ',refTabladiv);




/*
PAGINA 3
Exercicio 1
Crea un botón que xenere por consola “boas a todos”. Emprega o evento “click”

*/
let boton2 = document.getElementsByClassName('boton1')[1];

boton2.addEventListener('click', () =>{
    boton2.textContent = 'Boas a todos';

});




/*
Exercicio 2
Introduce dentro do “index.html”, unha etiqueta ‘p’,insertando nela un texto calquera.
Crea un botón que conteña unha función que saque por consola a etiqueta e o texto dela.

*/
let parrafo2 = document.querySelector('.pa2');
let boton3 = document.getElementsByClassName('boton1')[2];

boton3.addEventListener('click',() =>{
    console.log('Etiqueta <p>: ',parrafo2);
    console.log('Contenido de la etiqueta p: ',parrafo2.textContent);
});

/*
Exercicio 3
Introduce dentro do “index.html”, unha lista,insertando nela textos calqueras.
Crea un botón que conteña unha función que saque por consola a etiqueta, ca lista creada.

Emprega o evento “click”.

*/
let lista3 = document.querySelector('.lista2');
let boton4 = document.getElementsByClassName('boton1')[3];

boton4.addEventListener('click', () =>{
    console.log('Etiqueta lista: ',lista3);
    console.log('Contenido de la lista: ',lista3.textContent)
});

/*
Exercicio 4
Introduce na lista anterior un evento “click” cada vez que lle des no primeiro elemento da lista, saca por consola:
 Toda a lista creada
 O texto dese elemento

Emprega o evento “click”.

*/
let eventLista = document.querySelector('.li1');

eventLista.addEventListener('click', () =>{
    console.log('Lista creada: ',lista3.textContent);
    console.log('Texto del primer elemento: ',eventLista.textContent);
});

/*
Exercicio 5
Introduce na lista anterior un evento “click” cada vez que lle des no terceiro elemento da lista (tes que ter máis de 5 elementos creados), saca por consola:
 Toda a lista creada
 O texto dese elemento

Emprega o evento “click”

*/

let eventoLista2 = document.querySelector('.li3');
eventoLista2.addEventListener('click', () =>{
    console.log('Lista creada: ', lista3.textContent);
    console.log('Texto del elemento 3 de la lista: ',eventoLista2.textContent);
});

/*
Exercicio 6
Crea un elemento lista de varios elementos ‘li’, onde deberás introducir unha etiqueta ‘span’ con texto. 

Utiliza ‘e.target’ ou ‘event.target’ para observar sobre qué elemento estás a clicar.
Lembra de referenciar a lista (‘ul’) correctamente.
Emprega o evento “click”.

*/
let lista4 = document.getElementsByClassName('lista3');
for (let i = 0; i < lista4.length; i++) {
    lista4[i].addEventListener('click',function(event){
        console.log('Elemento clickado: ', event.target);
        if(event.target.tagName.toLowerCase() === 'span'){
            console.log('Texto del span: ',event.target.textContent);
    
        }
        if(event.target.tagName.toLowerCase() === 'li'){
            console.log('Texto del elemento li: ',event.target.textContent);
        }
    });
    
}


/*
Exercicio 7
Crea un elemento lista de varios elementos, onde deberás introducir unha imaxen a cal cada vez que cliques, saque por consola “cliquei a imaxen”. Utiliza ‘e.target’ ou ‘event.target’ para visualizar o elemento clicado.
Emprega o evento “click”.

*/

let lista5 = document.getElementsByClassName('lista4');
for (let i = 0; i < lista5.length; i++) {
    lista5[i].addEventListener('click',function(event) {
    
        console.log('Elemento clickado: ',event.target);
        if(event.target.tagName.toLowerCase() === 'img'){
            console.log('Clickei a Imagen: ', event.target.src);
        }
        
    
    

    
    
});
    
}

/*
Exercicio 8
Ca lista anterior:
 Cómo seleccionarías todas a imaxes para podelas utilizar.
 Cómo lle engadirías un evento a estas imaxes se che dixeran que sólo podes utilizar estas para xenerar a referencia ? [se non entendes este enunciado, avísame]
 Cando saibas cómo engadirlle o envento na imaxen:
Fai que saque por consola o texto asociado a ese ‘li’
Fai que saque por consola a referencia da lista

*/
let imagenes = document.querySelectorAll('li img');

imagenes.forEach(imagenes =>{
    imagenes.addEventListener('click', (event) =>{
        let textoLi = event.target.closest('li').textContent;
        let listareferencia = event.target.closest('ul');

        console.log('Texto LI: ', textoLi.trim());
        console.log('Lista de referencias: ',listareferencia);

    });
});





/*
parrafo.addEventListener('click',() =>{
    parrafo.textContent = 'Acabas de presionar click'
});
*/
