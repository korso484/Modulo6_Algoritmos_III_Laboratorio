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
//Generamos aleatoriamente true o false para disponibilidad
getRandom = () => Math.random() < 0.5 ? true : false;

//Generamos franja horaria
getHour = (arr, index) =>  arr[index];

getHour(WORK_HOURS);

//Generamos disponibilidad aleatoria
getRandomSchedule = (team) => {  
    var wantedIndex = [];
    var contador =0;
    for(var i=0; i< team.length;i++){
        var newAvailability = [];
        console.log("\nDisponibilidad de "+ team[i].name);
        for(var hour of WORK_HOURS){
            team[i]["availability"] = getRandom();
            console.log(hour + ": " + team[i].availability); 
            newAvailability.push(team[i]["availability"]);
        } 
        var index = newAvailability.indexOf(true);
        contador += index;
        wantedIndex.push(index);    
    } 
    return wantedIndex;
}    
 
//Comprobamos primer hueco disponible del grupo
getAvailability = (arr1,arr2) => {
    var size = arr1.length;
    var counter = 1;
    for(var ind =1; ind < size; ind++){
        for(var left =0; left < size -ind; left++){
            var right = left +1;
            if(arr1[left] === arr1[right]){
               counter = counter *1;
            }else{
                counter = counter *0;
            }
        }  
    }
    //Si el contador coincide con el valor de los elementos hay hueco
    if(counter === 1){
        var h = getHour(WORK_HOURS, arr1[0]);
        console.log("Hueco encontrado en el horario: " + h);       
    }else{
        console.log("Lo siento no hay hueco disponible en el equipo");
    }
 }
 
 getAvailability(getRandomSchedule(myTeam),WORK_HOURS);


 ///////////////////////////////////////////////////////////////////////////


//var divisas = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

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








