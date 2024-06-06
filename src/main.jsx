import React from 'react'
import ReactDOM from 'react-dom/client'
import {RickandMortyApp} from './components/RickandMortyApp.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RickandMortyApp/>
    </React.StrictMode>,
)
