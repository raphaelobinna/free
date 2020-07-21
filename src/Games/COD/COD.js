import React, { Component } from 'react';
import classes from './COD.css';
import Modal from '../../Modal/Modal';


// const GAmeprice = {
//     gam: 7000
// }

class Cod extends Component {
state= {
    game : 0,
    totalprice: 7000,
    purchasable: false
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
   const newprice = oldprice * 2
   this.setState({totalprice: newprice, game: updatedGame})
   this.purchaseHandler(updatedGame)
};
    removeGameHandler = () => {
        const oldCount= this.state.game
        const updatedCount = oldCount - 1
         const updatedGame = updatedCount
        
        const oldprice = this.state.totalprice
        const newprice = oldprice / 2
        this.setState({totalprice: newprice, game: updatedGame})
        this.purchaseHandler(updatedGame)
     }
     
    render () {      
        // const mtGames = Object.keys(this.state.number)
        //                 .map(igKey => {
        //                     return [...Array(this.state.game[igKey])].map(_, i) => {

        //                     }
        //                 })
        return (
            <div>
                <Modal>
                    <h3>You have these in your baskets</h3>
                     <ul>Quantity : {this.state.game}</ul>
                    <p>Your price is : {this.state.totalprice}</p>
                </Modal>
                <header>my short video</header>
                <div className={classes.COD}>
                    <p>PLACE YOUR ORDER</p>
                    <p>PRICE : {this.state.totalprice}</p>
                    <p>NUMBER OF CD : {this.state.game}</p>
                    <button onClick={this.addGameHandler}>Add</button>
                    <button onClick={this.removeGameHandler}>Remove</button><br/>
                    <button disabled={!this.purchaseHandler}>ORDER</button>
                    

                </div>
          
            </div>
        )
    };
};

export default Cod;