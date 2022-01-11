import { CREATE_PRODUCT, GET_PRODUCTS } from '../actions/types'

const initialState = {
  name: '',
  description: '',
  image: null,
  products: [],
}

export default function post(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      }
    case CREATE_PRODUCT:
      return {
        ...state,
        name: payload.name,
        description: payload.description,
        image: payload.image,
      }

    default:
      return state
  }
}
