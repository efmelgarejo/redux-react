import { createStore } from 'redux'

const initialState = {
    jugadores:[
        {
            id:1,
            nombre: 'Anita Diaz',
            foto: 'https://randomuser.me/api/portraits/women/20.jpg'
        },
        {
            id:2,
            nombre: 'Magaly Ramos',
            foto: 'https://randomuser.me/api/portraits/women/25.jpg'
        },
        {
            id:3,
            nombre: 'Alexa Loot',
            foto: 'https://randomuser.me/api/portraits/women/30.jpg'
        },
        {
            id:4,
            nombre: 'Janeth Sabanan',
            foto: 'https://randomuser.me/api/portraits/women/35.jpg'
        },
        {
            id:5,
            nombre: 'Ivanna Chavez',
            foto: 'https://randomuser.me/api/portraits/women/40.jpg'
        },
        {
            id:6,
            nombre: 'Romina Gula',
            foto: 'https://randomuser.me/api/portraits/women/42.jpg'
        },
        {
            id:7,
            nombre: 'Roxana Cabello',
            foto: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            id:8,
            nombre: 'Cristina Brito',
            foto: 'https://randomuser.me/api/portraits/women/48.jpg'
        },
        {
            id:9,
            nombre: 'Jesica Dames',
            foto: 'https://randomuser.me/api/portraits/women/49.jpg'
        },
        {
            id:10,
            nombre: 'Elena Brito',
            foto: 'https://randomuser.me/api/portraits/women/50.jpg'
        },
        {
            id:11,
            nombre: 'Yovana Julca',
            foto: 'https://randomuser.me/api/portraits/women/51.jpg'
        },
        {
            id:12,
            nombre: 'Estefany Duran',
            foto: 'https://randomuser.me/api/portraits/women/52.jpg'
        },
        {
            id:13,
            nombre: 'Jimena Rucci',
            foto: 'https://randomuser.me/api/portraits/women/53.jpg'
        },
        {
            id:14,
            nombre: 'Vanesa Rios',
            foto: 'https://randomuser.me/api/portraits/women/55.jpg'
        }
    ],
    titulares:[],
    suplentes:[]
}

const reducerEntrenador = (state = initialState, action) => {
console.log(action)
    if(action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "AGREGAR_SUPLENTE"){
        return {
            ...state,
        suplentes: state.suplentes.concat(action.jugador),
        jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "QUITAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if(action.type === "QUITAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}


export default createStore(reducerEntrenador)