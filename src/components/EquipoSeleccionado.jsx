import React from 'react'

import Titulares from './Titulares'
import Suplentes from './Suplentes'

function EquipoSeleccionado() {
    return(
        <article>
            <h2>Equipo Seleccionado</h2>
            <Titulares />
            <Suplentes />
        </article>
    )
}

export default EquipoSeleccionado