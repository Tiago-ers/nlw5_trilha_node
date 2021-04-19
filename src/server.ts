import express from 'express';

const app = express();

app.get("/", (req, res) => {
    return res.send("VQV nlw-5")
});

app.post("/", (req, res) => {
    return res.json({message:"Usuário slavo com sucesso!"})
})

app.listen(3333, ()=> console.log('Server is runnig on port 3333'));