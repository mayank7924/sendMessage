const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const SendTestEmail = require("./sendMail") 
 
app.post('/send', async (req, res) => {
    const {email, name, subject, textContent} = req.body
    const result = await SendTestEmail(email, name, subject, textContent)
    console.log(result)
    res.json({status:"success", result})
})
 
app.listen(3000, () => {
    console.log("server has started on port 3000")
})