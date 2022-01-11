import './App.css'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import Product from './Components/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Form />} />
          <Route exact path='/products' element={<Product />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
