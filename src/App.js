import './App.css'
import React, {useState, useEffect} from 'react'
import ComeAround from './sounds/ComeAround.m4a'
import BlindToYou from './sounds/BlindToYou.m4a'
import LetMeKnow from './sounds/LetMeKnow.m4a'
import AppContainer from './AppContainer'
// import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

    const [isLoading, setIsLoading] = useState(true)
    const [DATA, setData] = useState([])
    const sounds = [ComeAround, BlindToYou, LetMeKnow]
    const [state, setState] = useState(0)

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/ryanmeinzer/colliebuddz/db')
            .then(response => response.json())
            .then(json => setData(json.data))
            .finally(setIsLoading(false))
    }, [])

    const navClickHandler = (index) => {
        setState(index)
    }

    if (!isLoading) {
        return (
            <>
                <AppContainer data={DATA} sounds={sounds} state={state} onNavChange={navClickHandler} />
            </>
        )
    }
    return <div>Loading...</div>

}

export default App