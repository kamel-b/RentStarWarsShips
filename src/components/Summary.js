import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Summary.css'
import Header from './Header'
import Footer from './Footer'

class Summary extends React.Component {

    _totalCost (){
        let total = 0 
        const cost = this.props.vehiclesToRent.map(item => item.cost_in_credits)
        for(let i = 0 ; i < cost.length ; i++){
            cost[i] = parseInt(cost[i])
            total = total + cost[i]
        }
        return total
        
    }
    
    render(){
        console.log('ma prosp',this.props.vehiclesToRent);
        const vehicleName = this.props.vehiclesToRent.map(vehicle =>{ 
            return(
                <ul>
                    <li>{vehicle.name}</li>
                </ul>
            )   
        })
            
        
        return(
            <div>
                <Header/>
                <div className="summary_main_container">
                    <div className='summary_container'>
                        <h1>Récapitulatif</h1>
                        <div className="summary">
                            <p>Véhicule(s) Loué :  </p>
                            {vehicleName} 
                            <p className='total-cost-summary'>Cout Total :  <span>{this._totalCost()} CGR</span></p> 
                        </div>

                        <button className='back-btn-summary'>
                                <Link to='/'>Retour</Link>
                        </button>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        vehiclesToRent : state.vehiclesToRent
        }
}

export default connect(mapStatetoProps)(Summary) 