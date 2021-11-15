const request = require('request')
const articles = (callback) =>{
    const url =  'https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=0aff478e88a6498b85ba796ab912a8a3'
    request({url ,json:true},(error,response)=>{
        if(error){
            callback('error has occured' ,undefined)

        }
        
        else{
         callback(undefined,response.body.articles)
              
        }
    })
} 
module.exports = articles