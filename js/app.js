///////////////////////////////AGENDA///////////////////////////////

// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];

// Datos
var myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    }, 
    {
      name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
    name: "Marcos",
    availability: new Array(8).fill(true)
    }, 
];

var arrayAux = [];

//Generamos random true o false 
getRandom = () => Math.random() < 0.5 ? true : false;

//Generamos random para cada hora y mostramos resultados
getRandomSchedule = (team, hours) => { 
    var newAvailability = [];
    var contador;
    for(var hour of hours){
        var valor = true;
        for(var partner of team){
            newAvailability.push(partner["availability"] = getRandom());
        }
        valor = valor * partner.availability;
        arrayAux.push(valor);     
    }
    if(arrayAux.indexOf(1) != -1){
        console.log("Hueco encontrado en el horario: " + hours[arrayAux.indexOf(1)]);
    }else{
        console.log("Lo siento. No hay hueco disponible en el equipo.");
    }
}


getRandomSchedule(myTeam, WORK_HOURS);


 ///////////////////////////////CALCULADORA CAMBIO OPTIMO BILLETES Y MONEDAS///////////////////////////////


//Básico
//var divisas = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

//Challenge
var divisas = [ {
    name: 200,
    quantity: 0,
    },
    {
    name: 100,
    quantity: 3,
    },
    {
    name: 50,
    quantity: 6,
    },
    {
    name: 20,
    quantity: 3,
    },
    {
    name: 10,
    quantity: 4,
    },
    {
    name: 5,
    quantity: 2,
    },
    {
    name: 2,
    quantity: 3,
    },
    {
    name: 1,
    quantity: 1,
    },
];


 function getInputSubstraction(){
    var importeCompra = document.getElementById("compra").value;
    var importeEntrega = document.getElementById("entrega").value;
    if(importeEntrega == 500){
        console.log("No damos cambio de 500€, introduzca otra cantidad");
        return;
    }
    var importeDevolucion = importeCompra - importeEntrega;
    importeDevolucion = -importeDevolucion;

    for(var divisa of divisas){
        var posible = importeDevolucion / divisa.name;
        if((posible >= 1) && (posible <= divisa.quantity)){
            importeDevolucion = importeDevolucion - Math.trunc(posible) * divisa.name;
            if(importeDevolucion >=2){
                console.log("Se han usado: " + Math.trunc(posible) + " billetes de " + divisa.name +" euros.");
            }else{
                console.log("Se han usado: " + Math.trunc(posible) + " monedas de " + divisa.name +" euro.");
            }
        }
    }
}


document.getElementById("btnCalcular").addEventListener("click",getInputSubstraction);








