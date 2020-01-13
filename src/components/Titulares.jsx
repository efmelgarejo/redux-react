import React, { useEffect, createRef } from 'react'
import { connect } from 'react-redux'

import cancha from '../cancha.svg'

function Titulares({titulares, quitarTitular}){

    const gridJugadores = createRef()

  useEffect(() => {
    setScrollContainer()
    document.addEventListener('click', setScrollContainer)
  }, []) 
  
  // Función que fija el tamaño del grid de los jugadores
  const setScrollContainer = (desktop = true) => {
    let container = gridJugadores.current
    if (container) {
      const generatedGrid = () => {
        let items = container.getElementsByClassName('jugador')
        let itemsLength = items.length
        let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1

        const getWidth = () => {
          let n = bp + (itemsLength > bp ? 0.3 : 0)
          return (itemsLength / n) * 100
        }
        return `
                display: grid;
                grid-template-columns: repeat(${itemsLength}, 225px);
                grid-gap: 1rem;
                width : ${getWidth()}%;
              `
      }
      let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
      container.setAttribute('style', styles)
    }
  }

    return(
        <section>
            <h2>Titulares</h2>
            <div className="cancha">
                {
                    titulares.map(j =>(
                        <article className="titular" key={j.id}>
                            <div>
                                <img src={j.foto} alt={j.nombre}/>
                                <button onClick={() => quitarTitular(j)}>X</button>
                            </div>
                            <p>{j.nombre}</p>
                        </article>
                    ))
                }
                
            <img src={cancha} alt="cancha de futbol"/>
            </div>
        </section>
        
    )
}

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = (dispatch) => ({

    quitarTitular(jugador){
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)