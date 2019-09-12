import React from 'react'
import axios from 'axios'
import DisplatyVehicles from './DisplayVehicles'


class VehiclesList extends React.Component {


    constructor(props){
        super(props)

        this.state = {
            vehicles : []
        }

    }

     getVehiclesFromApi = () => {
     
        return axios.get('https://swapi.co/api/vehicles')
        .then((response) => {
        this.setState({ vehicles : response.data.results });
            
        })

    }

    componentDidMount(){
        this.getVehiclesFromApi()
    }

    render(){
        
        return(
            <DisplatyVehicles 
                vehicles={this.state.vehicles} />
        )
    }
}



export default VehiclesList