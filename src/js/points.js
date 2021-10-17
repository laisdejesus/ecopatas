let array = []
async function requestPoints(url){
    
    const myInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    };

    // const myRequest = new Request(url, myInit)
    
    const response = await fetch(url, myInit)
    return response.json()
    // .then(response => { response.json()
    //     .then(data =>  {
    //         console.log(data, array)
    //     })
        
    // })
    // .catch(error => console.error(error))
  
    
}

function createCard(point) {
    card = document.createElement("div");
    p = document.createElement("p");
    pName = document.createElement("p");
    pCep = document.createElement("p");
    pStreet = document.createElement("p");
    pNumber = document.createElement("p");
    pNeighborhood = document.createElement("p");
    pRegion = document.createElement("p");
    pSchedule = document.createElement("p");

    pName.innerHTML = point.name
    pCep.innerHTML = point.cep
    pStreet.innerHTML = point.street
    pNumber.innerHTML = point.number
    pNeighborhood.innerHTML = point.neighborhood
    pRegion.innerHTML = point.region
    pSchedule.innerHTML = point.schedule
    
    card.appendChild(pName)
    card.appendChild(pCep)

    return card;

}


async function main() {
    let dataPoints = await requestPoints('https://test-82d8c-default-rtdb.firebaseio.com/pickupPoints.json/')
    .then(data =>  {
        array = Object.values(data)
        console.log(data)
    })
    .catch(error => console.error(error))

    // let arrayPoints = Object.values(dataPoints)
    // let objPoints = JSON.parse(dataPoints)
    // let arrayPoints = Object.values(objPoints)

    console.log( array, "ihuul")
    let card = document.getElementById("card")

    array.forEach(point => {
        let text = createCard(point)
        card.appendChild(text)
    })

    //Para cada ponto criar um texto
}

main()




//  const myInit = {
//     method: 'GET',
//     mode: 'cors',
//     cache: 'default',
    
//     };

//     const myRequest = new Request('https://test-82d8c-default-rtdb.firebaseio.com/pickupPoints.json/', myInit);
    
//     fetch(myRequest)
//     .then(response => { response.json()
//         .then(data => 
//                 console.log(data))
//     })
//     .catch(error => console.error(error))
    
//     // const pointsList = data.map ((point) => {
//     //     return(
//     //         point.name

//     //     )
//     // })

//     // console.log(pointsList)


// const showData = (result) => {
//     for (const points in result) {
//         console.log(points)
        
//     }

  
// }


// function request(){
    
//     // const arrayPoints = Object.values(point)
//     const myInit = {
//     method: 'GET',
//     mode: 'cors',
//     cache: 'default',
    
//     };

//     const myRequest = new Request('https://test-82d8c-default-rtdb.firebaseio.com/pickupPoints.json/', myInit);
    
//     fetch(myRequest)
//     .then(response => { response.json()
//         .then(data =>  showData(data))
//     })
//     .catch(error => console.error(error))
    
//     const pointsList = points.reduce( (accumulator, points) => {
//         accumulator +=`<li>${points.name}</li>`
//         return accumulator
//     }, ' ' )

//     const ul = document.querySelector('[data-js="points"]')
//     ul.innerHTML = pointsList
  
// }

// Tentativa com ajax

// function requestPoints(url){

//     let request = new XMLHttpRequest()
//     request.open("GET", url, false)
//     request.send()
//     return request.responseText
    
//     // const arrayPoints = Object.values(point)
//     // const myInit = {
//     // method: 'GET',
//     // mode: 'cors',
//     // cache: 'default',
//     // };

//     // const myRequest = new Request(url, myInit)
    
//     // fetch(myRequest)
//     // .then(response => { response.json()
//     //     .then(data =>  {
//     //     return Object.values(data)
            
//     //         // console.log(data, array)
//     //     })
//     // })
//     // .catch(error => console.error(error))
  
    
// }

// function createCard(points) {
    

// }


// function main() {
//     let dataPoints = requestPoints('https://test-82d8c-default-rtdb.firebaseio.com/pickupPoints.json/');
//     // let arrayPoints = Object.values(dataPoints)
//     let objPoints = JSON.parse(dataPoints)
//     let arrayPoints = Object.values(objPoints)

//     console.log(array, objPoints, arrayPoints, "ihuul")
//     let card = document.getElementById("card")

//     array.forEach(point => {
//         let text = createCard(point)
//         card.appendChild(text)
//     })

//     //Para cada ponto criar um texto
// }