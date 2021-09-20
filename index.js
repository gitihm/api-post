const express = require('express')
const app = express()

app.post('/data', (req, res) => {
    res.status(200).json(req.body)
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})