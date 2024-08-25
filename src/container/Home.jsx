import React, { Component } from 'react'

export default class home extends Component {
    constructor(){
        super()
        this.state={
            products:[]
        }
       
    }
    getProducts(){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>this.setState({products:json}))
    }
    componentDidMount(){
        this.getProducts()
    }
  render() {
    return (

      <div>
        {this.state.products.map(
            (products,index)=>{
                return(
                    <div key={index}>
                        <div>
                            <img src={products.image} alt="" style={{height:"200px",width:"250px"}} />
                        </div>
                        <p>{products.title}</p>
                        <p>{products.price}</p>
                    </div>
                )
            }
        )}
      </div>
    )
  }
}
