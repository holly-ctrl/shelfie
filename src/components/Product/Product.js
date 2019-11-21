import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Product extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Link to='/'> Products </Link>
            </div>
        )
    }
}

export default Product