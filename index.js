const express = require('express')
const router = express.Router()

const app = express()

app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use(express.static('static'))
app.use('/', router)

router.get('/', (req, res) => {
    res.render('index.html')
})

app.listen(8080)