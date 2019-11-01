import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }

    handleNameChange(value) {
        this.setState({
            name: value
        })
    }

    handlePriceChange(value) {
        console.log(this.state)
        this.setState({
            price: value
        })
    }

    handleImgChange(value) {
        this.setState({
            imgurl: value
        })
    }

    handleCancelTask() {
        this.setState({
            name: '',
            price: '',
            imgurl: ''
        })
    }

    render() {
        return (
            <div>
                <input
                    id='nameInput'
                    value={this.state.name}
                    placeholder='Product Name'
                    onChange={e => this.handleNameChange(e.target.value)}
                />
                <input
                    id='priceInput'
                    value={this.state.price}
                    placeholder='Price'
                    onChange={e => this.handlePriceChange(e.target.value)}
                />
                <input
                    id='imgInput'
                    value={this.state.imgurl}
                    placeholder='Image URL'
                    onChange={e => this.handleImgChange(e.target.value)}
                />
                <button onClick={e => this.handleCancelTask(e.target.value)}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}

export default Form