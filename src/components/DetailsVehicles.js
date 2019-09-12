import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './DetailsVehicles.css'
import Header from './Header'
import Footer from './Footer'




class DetailsVehicles extends React.Component {

    constructor(props){
        super(props)

        this.state ={
            vehiclesDetail : [],
        }
        
        this.id = this.props.location.state.idVehicle

    }

    _toggleRent(){
        const action = {
            type: 'ADD_RENT',
            value: this.state.vehiclesDetail
        }
        this.props.dispatch(action)

    }

    _cancelRent(){
        const action = {
            type :'CANCEL_RENT',
            value : this.state.vehiclesDetail
        }
        this.props.dispatch(action)
    }

    _validateRent(){
        const rentIndex = this.props.vehiclesToRent.findIndex(item => item.name === this.state.vehiclesDetail.name)
        
        if(rentIndex !== -1){
            return(
                <div className="confirm-msg">
                    <p >Vehicule Reservé ! (Un seul vehicule par catégorie )</p>
                </div>
            )
        }
    
    }

    _validateCancelRent(){
        const rentIndex = this.props.vehiclesToRent.findIndex(item => item.name === this.state.vehiclesDetail.name)
        if(rentIndex === -1){
            return(
                <div className='cancel-msg'>
                    <p>Reservation Annuler !</p>
                </div>
            )
        }

    }

    _displayPrice = () => {
        if(this.state.vehiclesDetail.cost_in_credits === 'unknown') {
            return(
                <p className='no-rent'>Le vehicule n’est pas disponible à la location</p>

            )
        }
        else {
            return(
                <div>
                    <p className='price'>
                        Prix : {this.state.vehiclesDetail.cost_in_credits} CGR ( Crédit Galactique Républicain )
                    </p>

                    <div className={'button_box'}>
                        <button className='rent-btn' onClick={()=>this._toggleRent()}onclick={()=>this._validateRent()}>Reserver</button>
                        <button className='cancel-btn' onClick={()=>this._cancelRent()}>Annuler la reservation</button>
                    </div>
                </div>
            )
                
        }

    }


   

    componentDidMount() {

        this.setState({ vehiclesDetail: this.props.location.state.vehicles[this.id] })

    }


    render() {
        
        const {vehiclesDetail} = this.state
        return(
            <div>
                <Header/>
                <div className='detail_main_container'>
                    <div className='detail_conatainer'>
                        <h1 className='title-detail'>{vehiclesDetail.name}</h1>
                        <p>Model : {vehiclesDetail.model}</p>
                        <p>Fabricant : {vehiclesDetail.manufacturer}</p>
                        <p>Taille : {vehiclesDetail.length} mètres</p>
                        <p>Nombre de personnel nécessaire pour conduire le vehicule : {vehiclesDetail.crew}</p>
                        <p>Nombre de places : {vehiclesDetail.passengers}</p>
                        <p>Vitesse atmospherique maximum : {vehiclesDetail.max_atmosphering_speed} km/h</p>
                        <p>Categorie : {vehiclesDetail.vehicle_class} </p>
                        <p>Capacité de chargement: {vehiclesDetail.cargo_capacity} kg</p>
                        {this._displayPrice()}
                        {this._validateRent()}
                        <div className ='back-btn-box'>
                            <button className='back-btn'>
                                <Link to='/'>Retour</Link>
                            </button>
                        </div>
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

export default connect(mapStatetoProps)(DetailsVehicles)