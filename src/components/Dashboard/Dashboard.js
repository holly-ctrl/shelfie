import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>Dashboard</div>
                
                   <Product />
                
            </div>
        )
    }
}

export default Dashboard