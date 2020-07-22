import React, { Component } from 'react';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import classes from './GOW.css';




class gow extends Component {
    state= {
        game : 0,
        totalprice: 15000,
        purchasable: false,
        purchasing: false
    }
    purchaseHandler (game) {
        const sum = game
        this.setState ({purchasable: sum > 0})
    
    }
    addGameHandler =() =>{
       const oldCount= this.state.game
       const updatedCount = oldCount + 1
        const updatedGame = updatedCount
       
       const oldprice = this.state.totalprice
       const newprice = oldprice + 7000
       this.setState({totalprice: newprice, game: updatedGame})
       this.purchaseHandler(updatedGame)
    };
        removeGameHandler = () => {
            const oldCount= this.state.game
            const updatedCount = oldCount - 1
             const updatedGame = updatedCount
            
            const oldprice = this.state.totalprice
            const newprice = oldprice - 7000
            this.setState({totalprice: newprice, game: updatedGame})
            this.purchaseHandler(updatedGame)
         }
         orderPurchaseHandler = () => {
             this.setState({purchasing: true})
         }
         orderCancelPurchaseHandler = () => {
             this.setState({purchasing: false})
         }
         orderContinueHandler = () => {
             alert('Thanks but I am not done with the server side yet')
         }
         
        render () {      
            // const mtGames = Object.keys(this.state.number)
            //                 .map(igKey => {
            //                     return [...Array(this.state.game[igKey])].map(_, i) => {
    
            //                     }
            //                 })
            return (
                <div className={classes.gow}>
                    <Modal 
                    show={this.state.purchasing}
                    modalClosed={this.orderCancelPurchaseHandler}>
                        <h3>You have these in your basket</h3>
                         <p>Quantity : {this.state.game}</p>
                        <p>Your price is : {this.state.totalprice}</p>
                        <Button btnType="Danger" clicked={this.orderCancelPurchaseHandler}>Cancel</Button>
                        <Button btnType="Success"clicked={this.orderContinueHandler}>Continue</Button>
                    </Modal>
                    
                    
                    <div className={classes.GOW}>
                    <img  src="/GOW.jpg" alt=""/>
                    <h1>GOD OF WAR 4</h1>
                        <p>PLACE YOUR ORDER</p>
                        <p>PRICE : {this.state.totalprice}</p>
                        <p>NUMBER OF CD : {this.state.game}</p>
                        <button onClick={this.addGameHandler}>Add</button>
                        <button onClick={this.removeGameHandler}>Remove</button><br/>
                        <button 
                        disabled={!this.purchaseHandler}
                        onClick={this.orderPurchaseHandler}>ORDER</button>
                        
    
                    </div>
              
                </div>
            )
        };
};
export default gow;