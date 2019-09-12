import React from 'react';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import VehiculesList from  './components/VehiclesList'
import DetailsVehicles from './components/DetailsVehicles'
import { BrowserRouter, Route } from 'react-router-dom'
import Summary from './components/Summary'

function App() {
  return (

    <Provider store={Store}>
        <BrowserRouter>
          <div>   
            <Route path='/' exact component={VehiculesList}/>
            <Route path='/detail' exact component={DetailsVehicles} />
            <Route path='/summary' exact component={Summary}/>
          </div>
        </BrowserRouter>
    </Provider>
    
  )
}

export default App;
