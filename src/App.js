import React from 'react'
import { Provider } from 'react-redux'
import store from './sotore'

import Jugadores from './components/Jugadores'
import EquipoSeleccionado from './components/EquipoSeleccionado'

import './styles/styles.scss'

function App() {
  return (
    <Provider store={store}>
      <main>
        <h1>Manager</h1>
      <Jugadores />
      <EquipoSeleccionado/>
    </main>
    </Provider>
  );
}

export default App;
