const express = require('express')
const app = express()
const multer = require('multer')
const cors = require('cors')
let { pool: pool } = require('./db')
const { Pool } = require('pg')

const path = require('path')

//middlewares
app.use(cors())
app.use(express.json())

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../FrontEnd/public/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.replaceAll(/\s/g, ''))
  },
})

const upload = multer({ storage: fileStorageEngine })

//Routes
//1-Creat a product
app.post('/products', async (req, res) => {
  try {
    const { name, description, image_link, image_name } = req.body

    const newProduct = await pool.query(
      'INSERT INTO product (name, description,image_link,image_name) VALUES ($1, $2,$3,$4) RETURNING *',
      [name, description, image_link, image_name]
    )

    res.json(newProduct.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})
//2-get all products

app.get('/products', async (req, res) => {
  try {
    const allProducts = await pool.query('SELECT * FROM product')
    res.json(allProducts.rows)
  } catch (error) {
    console.error(error.message)
  }
})

app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.image)
  res.json({ message: 'uploadded' })
})

const port = 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
