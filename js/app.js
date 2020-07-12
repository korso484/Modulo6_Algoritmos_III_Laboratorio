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
//Generamos disponibilidad aleatoria
getRandomSchedule = (team) => {
    
    for(var partner of myTeam){
        console.log("Disponibilidad de "+ partner.name);
        for(var hour of WORK_HOURS){
            if(Math.random() > 0.5){
                partner.availability = true;
            }else{
                partner.availability = false;
            }  
            console.log(hour + ": " + partner.availability);
        }
        
    }
} 

getRandomSchedule(myTeam);


