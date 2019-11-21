import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'


class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [],
      editProd: []
    }
    this.updateInventory=this.updateInventory.bind(this)
    this.editProduct = this.editProduct.bind(this)
  }

  componentDidMount() {
    axios
        .get('/api/inventory')
        .then(res=> {
            this.setState({
                inventory: res.data
            })
        })
}

updateInventory(products) {
  this.setState({
    inventory: products
  })
}

editProduct(product) {
  this.setState({
    editProd: product
  })
}

  render() {
    console.log(this.state)
    return (
      <div className="App">
       <Header />
       <Dashboard inventory={this.state.inventory}
       updateInventory={this.updateInventory}
       />
       <Form updateInventory={this.updateInventory}/>
      </div>
    )
}
}

export default App;
