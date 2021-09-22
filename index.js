const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(morgan("combined"))
app.use(express.json())
app.use(express.urlencoded({extended: false, limit: "50mb"}))

app.get("/", function(req, res){
    return res.status(200).json({ message: "Welcome to my test of k8s with node js"})
})

app.get("/status", function(req, res){
    return res.status(200).json({
        active: true,
        port: process.env.PORT
    })
})


app.listen(process.env.PORT, function(){
    console.log("Server started on:", process.env.PORT)
})