import express from 'express'
import ConnectToDatabase from './database/ConnectToDatabase.js'
import cors from 'cors'

// routes
import SystemRoutes from './Router/SystemRoutes.js'




const PORT = 4000
const app = express()
ConnectToDatabase()

//parseing JSON requests
app.use(express.json())

//Handeling cors error 
app.use(cors())


// routes
app.use('/', SystemRoutes)




app.listen(PORT, ()=>{
    console.log(`your server is running on http://localhost:${PORT}`)
})