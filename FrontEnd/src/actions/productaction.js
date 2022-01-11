import axios from 'axios'

import { CREATE_PRODUCT, GET_PRODUCTS } from './types'

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`/products`)

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    })
    console.log('hello1')
  } catch (err) {
    console.error(err.message)
    console.log('hello')
  }
}

export const addProduct = (formdata) => async (dispatch) => {
  try {
    const body = JSON.stringify(formdata)
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(`/products`, body, config)

    dispatch({
      type: CREATE_PRODUCT,
      payload: res.data,
    })
  } catch (err) {
    console.error(err.message)
  }
}

export const upload = (image) => async (dispatch) => {
  try {
    let formData = new FormData()
    formData.append('image', image)
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }

    const res = await axios.post('/upload', formData, config)

    if (!res.ok) {
      console.log('error')
    }

    console.log('Image Uploaded')
  } catch (err) {
    console.error(err.message)
  }
}
