const url = 'https://api.artic.edu/api/v1/artworks?page=2&limit=100'


fetch(url, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
})
// fetch gives us back a response in json format when it is ready
// when you get a response back from the fetch, do something with it
// we are naming the response `response`
.then(function(response){
    // parse the response
    return response.json()
})
// take what just got returned (response.json()) and do something with it
// we assign response.json() to the variable `parsedResponse` 
.then(function(parsedResponse){
    for (let artwork of parsedResponse.data){
        console.log(`${artwork.title} by ${artwork.artist_title}`)
    }
    
})