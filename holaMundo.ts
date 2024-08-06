let boolVerdadero: boolean = true;
let boolFalso: boolean = false;
const valorPi : number = 3.1416;

interface User {
    nombre: string,
    edad: number
}

const usuario: User = {
    nombre: "David",
    edad: 18
};

const suma = (numero1: number, numero2:number)=>{
    console.log(numero1+numero2);
};

suma(2, 5);