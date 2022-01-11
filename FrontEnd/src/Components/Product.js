import React, { useEffect } from 'react'
import ProductCard from './PrductCard'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { getProducts } from '../actions/productaction'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

function Product({ products, getProducts }) {
  const classes = useStyles()

  useEffect(() => getProducts(), [])

  console.log(products)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products.map((obj) => (
          <Grid item xs={6} sm={3}>
            <ProductCard obj={obj} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
const mapStateToProps = (state) => ({
  products: state.product.products,
})

export default connect(mapStateToProps, { getProducts })(Product)
