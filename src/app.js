const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))

app.set('view engine', 'hbs')
const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)
const articles = require('./tools/articles')


app.get('',(req,res)=>{
    articles((error, data) =>{
    console.log(data)
    return res.render('index.hbs',{data})

    })
    // if(!req.query.apikey){
    //     return res.send({
    //         error:'you must provide apikey'
    //     })
    // }
    // articles(req.query.apikey,(error,data)=>{
    //     if(error){
    //         return res.send({error})
    //     }
    //     res.send({
    //         apikey:req.query.apikey,
    //         articles:data
        // })
    // })
})
app.listen(port,() =>{
    console.log('server is running', port)
})
