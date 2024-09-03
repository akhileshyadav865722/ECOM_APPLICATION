import React, { Component } from 'react'
import "./Home.css/";

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
    console.log(this.state.products)
    return (

      <>

      <div className='products'>
      {this.state.products.map(
            (products,index)=>{
                return(
                <div className="first">
                    <div key={index} >
                        <div className='image'>
                            <img src={products.image} alt="" style={{height:"25vh",width:"15vw"}} />
                        </div>
                       <div  style={{height:"150px"}}>
                       <h3>{products.title}</h3>
                       <p>{products.price}</p>
                       </div>
                        <div className="buttons">
                        <button className='button1'>add to cart</button>
                        <button className='button1'>view product</button>
                        <button className='button1'><i class="fa-solid fa-heart"></i></button>
                        </div>
                    </div>
                    </div>
                
                )
            }
        )}
      </div>
      </>
    )
  }
}
