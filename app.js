const express = require('express')
const app = express()

app.use(express.static('public'));

app.get('/',(request,response)=>response.sendFile(`${__dirname}/views/home-page.html`))

app.get('/about',(request,response)=>response.sendFile(`${__dirname}/views/about-page.html`))

app.get('/works',(request,response)=>response.sendFile(`${__dirname}/views/works-page.html`))

app.listen(3000, () => console.log('App listening on port 3000!'));