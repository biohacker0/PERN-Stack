import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { connect } from 'react-redux'
import { upload } from '../actions/productaction'
import { addProduct } from '../actions/productaction'
import './Form.css'
import { CardHeader } from '@material-ui/core'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// const useStyles = makeStyles({
//   root: {
//     maxWidth: '60%',
//     margin: 'auto',
//     marginTop: '2em',
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// })

function SimpleCard({ upload, addProduct }) {
  // const classes = useStyles()

  const [formdata, setFormdata] = useState({
    name: '',
    description: '',
    image_name: '',
    image_link: '',
  })
  const [image, setImage] = useState('')
  const { name, description } = formdata

  const handleSubmit = (e) => {
    e.preventDefault()
    upload(image)

    addProduct(formdata)
    toast.success('Product created')
  }

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }
  const handleFileChange = (e) => {
    setImage(e.target.files[0])
    setFormdata({
      ...formdata,
      image_name: e.target.files[0].name.replaceAll(/\s/g, ''),
      image_link: '/uploads/' + e.target.files[0].name.replaceAll(/\s/g, ''),
    })
  }

  return (
    <Card className='auth'>
      <ToastContainer />
      <h1 style={{ textAlign: 'center' }}>Create a Product</h1>
      <CardContent>
        <form>
          <div>
            {' '}
            <TextField
              style={{ width: '100%' }}
              id='outlined-basic'
              label='Enter Product Name'
              variant='outlined'
              name='name'
              value={name}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              style={{ width: '100%' }}
              id='outlined-multiline-static'
              label='Product Descripttion'
              multiline
              rows={6}
              variant='outlined'
              name='description'
              value={description}
              onChange={(e) => handleChange(e)}
            />
            <input
              // style={{ opacity: '0' }}
              type='file'
              id='imageButton'
              name='image'
              className='btn'
              onChange={(e) => handleFileChange(e)}
            ></input>
            <button className='btn-secondary' onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default connect(null, { upload, addProduct })(SimpleCard)
