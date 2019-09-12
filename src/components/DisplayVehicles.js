import React from 'react'
import './DisplayVehicles.css'
import { withRouter } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'




class DisplayVehicles extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            vehicles : this.props.vehicles,
            idVehicle: ""
        }

    }


  
    
    _displayDetailVehicles(index) {

        this.setState({ idVehicle : index},()=> {

            this.props.history.push({
                pathname: "/detail", 
                state: {
                    idVehicle: this.state.idVehicle,
                    vehicles : this.props.vehicles
                }
            });
        })
    
        
    }
    
    render() {
        
        return(
            <div>
                <Header/>
                <div className ='main_container' >
                    {this.props.vehicles.map((vehicle , index) => 
                        <div key={index} className ='container' > 
                            <h1>{vehicle.name}</h1>
                            <p>Marque :  {vehicle.model} </p>
                            <p>Prix : {vehicle.cost_in_credits} CGR ( Crédit Galactique Républicain ) </p>
                            <p>Nombre de places : {vehicle.passengers}</p>
                            <button className='btn-detail' onClick={()=>this._displayDetailVehicles(index)}>Voir details</button>
                        </div>
                    )}
                </div>
                <Footer/>
            </div>
                
        )

    }
    

}

        
     



export default withRouter (DisplayVehicles)