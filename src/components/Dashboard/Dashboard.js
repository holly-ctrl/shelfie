import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'
import './Dashboard.css'
import {Link, withRouter} from 'react-router-dom'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    deleteProd(id) {
        axios.delete(`api/product/${id}`)
            .then(res => {
                this.props.updateInventory(res.data)
            })
    }

    render() {
        return (
            <div>
                <h1>{this.props.inventory.map((el, index) => (
                <div>
                    <img src={el.img}/>
                    <p>{el.name}</p>
                    <p>{el.price}</p>
                    <button onClick={e => this.deleteProd(el.id)}>Delete</button>
                    <button> <Link to='/product'> Edit </Link> </button>
                </div>
                ))}
                </h1>
                
                
                

                   <Product />
                
            </div>
        )
    }
}

export default withRouter(Dashboard)