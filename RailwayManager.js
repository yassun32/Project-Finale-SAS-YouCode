const prompt = require("prompt-sync")();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const ticket = [
    {
        id: 1,
        passengerName: "yassine",
        tripId: 2,
        seatNumber: 1,
        price: 80
    },
    {
        id: 2,
        passengerName: "sara",
        tripId: 1,
        seatNumber: 1,
        price: 90
    },
    {
        id: 3,
        passengerName: "abderehmane",
        tripId: 2,
        seatNumber: 2,
        price: 80
    },
    {
        id: 4,
        passengerName: "lahcen",
        tripId: 4,
        seatNumber: 1,
        price: 100
    },
]
const x = []
while (choix !== 0) {
    console.log()//dertha bach dir newline mli douz chi haja en seccess
    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("0. Quitter");
    choix = Number(prompt("Votre choix : "));
    switch (choix) {
        case 1:
            affichage(trips);
            break;
        case 2:
            Acheter();
            break;
        case 3:
            affichageTeck();
            break;
        case 4:
            Annuler();
            break;
        case 5:
            console.log("Rechercher un ticket");
            break;
        case 6:
            console.log("Filtrer les trajets");
            break;
        case 7:
            console.log("Trier les trajets");
            break;
        case 0:
            console.log("Au revoir !");
            break;
        default:
            console.log("Choix invalide !");
    }
}
let countid
if (ticket.length === 0) {//no ticket
    countid = 0
}
else (countid = ticket[ticket.length - 1].id)//khasni n3ref 3lax derna -1
let choix = 1
function affichage() {
    console.log("=== TRAJETS DISPONIBLES ===")
    for (let i = 0; i < trips.length; i++) {
        console.log(`#${trips[i].id} ${trips[i].departure} -→ ${trips[i].destination}`)
        console.log(`Départ : ${trips[i].departureTime} `)
        console.log(`Arrivée : ${trips[i].arrivalTime} `)
        console.log(`Prix : ${trips[i].price} DH`)
        console.log(`Places disponibles : ${trips[i].availableSeats} `)
        console.log()
    }
}
function Acheter() {
    let nom = prompt("Enter nom du passager : ")
    let idtj = Number(prompt("Entre Identifiant du trajet : "))
    console.log()
    if (idtj >= 21 || idtj <= 0) {
        console.log("Trajet introuvable")
        return
    }
    for (let i = 0; i < trips.length; i++) {
        if (idtj === trips[i].id) {
            for (let j = 0; j < array.length; j++) {
                if(idtj === x[j].id){//hna x[j] dertha t9leb id de trajet
                    
            }
            else if (trips[i].availableSeats >= 1) {
                trips[i].availableSeats-- //hna ghtn9es mn lblayes dyal tran lkhas bl idtj
                countid++
                ticket.push({
                    id: countid,
                    passengerName: nom,
                    tripId: idtj,
                    seatNumber: 50 - trips[i].availableSeats,
                    price: trips[i].price
                });
                console.log("Ticket acheté avec succès")
            }
            else (console.log("Train complet."))
        }
    }
}
function affichageTeck() {
    if (ticket.length === 0) {
        console.log()
        console.log("Aucun ticket enregistré.")
        return
    }
    console.log()
    console.log("======= TICKETS =======")
    for (let i = 0; i < ticket.length; i++) {

        console.log()
        console.log(`Ticket #${ticket[i].id}`)
        console.log(`Passager : ${ticket[i].passengerName} `)
        console.log(`Trajet : ${trips[ticket[i].tripId - 1].departure} -→ ${trips[ticket[i].tripId - 1].destination}`)
        console.log(`Place : ${ticket[i].seatNumber} `)
        console.log(`Prix : ${ticket[i].price} DH`)
    }

}
function Annuler() {
    let idTkRm = Number(prompt("Entre identifiant du ticket : "))
    console.log()
    for (let i = 0; i < ticket.length; i++) {
        if (idTkRm === ticket[i].id) {
            x.push({
                id: ticket[i].tripId,
                mvAvSt: [ticket[i].seatNumber]
            })
            ticket.splice(i, 1)
            console.log(x)
            console.log("Ticket annulé avec succès.")
            return
        }
    }
    console.log("Ticket introuvable.")
}