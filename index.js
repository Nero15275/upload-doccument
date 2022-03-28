const express = require('express')
const cors = require('cors');
require(`dotenv`).config()
const mongoose = require(`./db_connection/dbConnection`)
const document = require('./collections/document_api')

const app = express()
const port = process.env.port || 8000
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))

app.use(`/document`, document)

app.listen(port, () => console.log(`server is running ar ${port}`))
