import React from 'react'

import { Contact, Introduction, Header, Services } from './containers';
import { Navbar} from './components';
import './App.css'


const App = () => {
    return (
        <div className='App'>
                <Navbar />
                <Header />
                <Introduction />
                <Contact />
                <Services />
        </div>
    )
}

export default App

