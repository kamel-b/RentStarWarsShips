import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import './Header.css'
import logo from '../Images/logo.png'
import shop from '../Images/shop.png'



class Header extends React.Component {
    
    constructor(props){
        super(props)

        this.state= {
            totalCost : 0
        }
    }
    
    _showSummary(){

        this.props.history.push({
            pathname :"/summary"
        })
        
    }

    _totalCost (){
        let total = 0 
        const cost = this.props.vehiclesToRent.map(item => item.cost_in_credits)
        for(let i = 0 ; i < cost.length ; i++){
            cost[i] = parseInt(cost[i])
            total = total + cost[i]
        }
        return total
        
    }



    render() {
        
        return(
            <div>
                <div className='header'>
                    <Link to='/'>
                        <img src={logo} alt=''/>
                    </Link>
                    <div className='box-shop' onClick={()=>this._showSummary()}>
                        <p className='total-cost'>{this._totalCost()} CGR </p>
                        <img src={shop} alt=''/>
                        <p className='total-rent'>{this.props.vehiclesToRent.length}</p>
                    </div>
                </div>
            </div>
        )
        }
}

const mapStatetoProps = (state) => {
    return {
        vehiclesToRent : state.vehiclesToRent
        }
}



export default withRouter(connect(mapStatetoProps)(Header))