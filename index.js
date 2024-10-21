//Importing Express Module

import express from 'express'
console.log("this is a change");
// creating an instance of an express application
const app = express();
//defining port variable to listen on
const port = process.env.PORT || 5001

const genres  = {
    rock: {
        emotion: "anger"
    }, 
    jazz: {
        emotion: "relaxing"
    }, 
    techno: {
        emotion: "serious"
    }, 
    trance: {
        emotion: "dazed"
    },
    classical: {
        emotion: "sad"
    }, 
    pop: {
        emotion: "playful"
    }, 
}
//setting up a response for the root path of our application 

//when i get a request to my application send back this information  
app.get('/genre/:genre', (req, res) => {
   console.log(req.params.genre.substring(1))

   for (const genre in genres){
    if (genre == req.params.genre.substring(1)){
        console.log(genres[genre].emotion)
        console.log(`the emotion of this genre is ${genres[genre].emotion}`)
        res.send(`the emotion of this genre is ${genres[genre].emotion}`)
    }
   }
   
   
   
   
    // console.log(req.query)
    // const requestedColor = req.query.color;
    // const matchingFruits = [];

    // for (const fruit in fruits){
    //     if(fruits[fruit].color == requestedColor){
    //         matchingFruits.push(fruit);
    //     }
    // }
    // console.log(matchingFruits)

})
//listening on port 3001 for requests 
app.listen(port, () =>{
    console.log(`My app is listening on port${port}`)
})