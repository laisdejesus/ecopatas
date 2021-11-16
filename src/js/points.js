let array = []

const regions = []
const regionNames = []
const regionDisplays = []

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
    pName = document.createElement("h5");
    pCep = document.createElement("p");
    pStreetNumber = document.createElement("p");
    pNumber = document.createElement("p");
    pNeighborhood = document.createElement("p");
    pRegion = document.createElement("p");
    pSchedule = document.createElement("p");

    pName.innerHTML = point.name
    pCep.innerHTML = " CEP: "+ point.cep
    pStreetNumber.innerHTML = point.street + ", " + point.number
    pNumber.innerHTML = point.number
    pNeighborhood.innerHTML = point.neighborhood
    pRegion.innerHTML = point.region
    pSchedule.innerHTML = point.schedule

    card.style.border = "2px solid #FFF2E2"
    card.style.boxSizing = "border-box"
    card.style.borderRadius = "8px"
    card.style.padding = "10px"
    card.style.margin = "20px 5px"
    card.style.width = "30%"
    
    
    card.appendChild(pName)
    card.appendChild(pCep)
    card.appendChild(pStreetNumber)
    
    card.appendChild(pNeighborhood)
    card.appendChild(pRegion)
    card.appendChild(pSchedule)

    formatRegions(card, point.region)
}

function formatRegions(card, regionName) {

    if (!regionNames.includes(regionName)) {
        regionNames.push(regionName)
        regionDisplays.push(false)

        const newRegionCard = {
            name: "SP - " + regionName,
            points: [card]
        }

        regions.push(newRegionCard)
    }
    else {
        const regionIndex = regionNames.indexOf(regionName)

        regions[regionIndex].points.push(card)
    }
}

function showContent(regionName) {
    
    const regionCard = document.getElementById(regionName)

    showingCard = regionDisplays[regionNames.indexOf(regionName)]

    if (showingCard) {
        regionCard.style.display = "none";
    }
    else {
        regionCard.style.display = "flex";
        regionCard.style.flexWrap = "wrap";

        // regionCard.style.justifyContent = "flex-start"
        // regionCard.style.gridTemplateColumn = "1fr 1fr 1fr";
        // regionCard.style.gridTemplateRow = "auto";
    }

    regionDisplays[regionNames.indexOf(regionName)] = !showingCard
}

function populateHTML(card) {
    for (const region of regions) {

        regionCard = document.createElement("div");

        pointsCard = document.createElement("div");
        pointsCard.id = region.name
        pointsCard.style.display = "none";

        // regionCard.className = region.name

        header = document.createElement("h3");

        // header.style.backgroundColor = "#FFF2E2";
        // header.style.border = "1px solid black";
        header.style.cursor = "pointer";

        header.innerHTML = region.name
        header.onclick = () => showContent(region.name);

        regionCard.appendChild(header)
        regionCard.appendChild(pointsCard)

        for (const point of region.points) {

            pointsCard.appendChild(point)
        }

        card.appendChild(regionCard)
    }
}


async function main() {
    let dataPoints = await requestPoints('https://test-82d8c-default-rtdb.firebaseio.com/pickupPoints.json/')
    .then(data =>  {
        array = Object.values(data)
    })
    .catch(error => console.error(error))

    // let arrayPoints = Object.values(dataPoints)
    // let objPoints = JSON.parse(dataPoints)
    // let arrayPoints = Object.values(objPoints)

    let card = document.getElementById("card")

    array.forEach(point => {
        createCard(point)
    })

    populateHTML(card)
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