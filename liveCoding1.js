//Carlos Max Cesni Ruiz Realizó un excelente trabajo en el desafío, demostrando una gran orientación al detalle y lógica en su programación. Solo le faltó un poco más de velocidad para codificar, pero en general, sus habilidades son muy buenas.
//Realizo Luis Guiovani

const lista = document.getElementById('lista');

const myArray = [
    {nombre: 'insecto'}, 
    {nombre:'bootcamp'}, 
    {nombre:'mangos'}, 
    {nombre:'reptil'}, 
    {nombre:'mosca'}, 
    {nombre:'escritorio'},
];
const myNewArray =[]

function arreglo(string, ArryString){
        for (let i = 0; i < ArryString.length; i++) {
            if(string.length>ArryString[i].nombre.length)
            myNewArray.push(ArryString[i].nombre);
        }
        
}
arreglo("bocina", myArray);


function crear(array){
    array.forEach(element => {
        const lis = document.createElement('li');
        lis.textContent = element.nombre;
        lista.appendChild(lis);
    });
}


function añadir(string){
    myArray.push({nombre : string})
}

añadir("araña");

console.log(myArray);

