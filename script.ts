import axios from "axios";
import express from 'express'

const app = express()

app.use(express.json())

var imageIndex = 1;
app.get('/foto', (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/albums/1/photos").then(
        (result)=>{
            imageIndex = Math.random() * (result.data.length - 1);
            res.send(result.data[Math.round(imageIndex)].url);
        }
    )
})



app.listen(3000, () => console.log('Servidor rodando na porta 3000'))