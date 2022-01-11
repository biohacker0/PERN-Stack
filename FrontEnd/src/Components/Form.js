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
const useStyles = makeStyles({
  root: {
    maxWidth: '60%',
    margin: 'auto',
    marginTop: '2em',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

function SimpleCard({ upload, addProduct }) {
  const classes = useStyles()

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
    console.log(e.target.files[0])
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <form className={classes.root}>
          <div>
            {' '}
            <TextField
              style={{ width: '90%' }}
              id='outlined-basic'
              label='Enter Product Name'
              variant='outlined'
              name='name'
              value={name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <TextField
              style={{ width: '90%' }}
              id='outlined-multiline-static'
              label='Product Descripttion'
              multiline
              rows={6}
              variant='outlined'
              name='description'
              value={description}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            {/* <Button
              style={{ width: '30%', height: '40px' }}
              variant='contained'
              color='default'
              className={classes.button}
              startIcon={<CloudUploadIcon />}
            > */}
            <input
              // style={{ opacity: '0' }}
              type='file'
              id='imageButton'
              name='image'
              onChange={(e) => handleFileChange(e)}
            ></input>
            {/* <button onClick={() => upload(image)}>Upload image</button> */}

            {/* </Button> */}
          </div>

          <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
      </CardContent>
    </Card>
  )
}

export default connect(null, { upload, addProduct })(SimpleCard)
