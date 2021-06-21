import express from 'express'

const app = express()

app.listen(3000, () => console.log('server is running'))

app.get('/teste', (req, res) => { return res.send('Primeira rota da aplicação')})
app.post('/teste', (req, res) => { return res.send('Segunda rota da aplicação')})