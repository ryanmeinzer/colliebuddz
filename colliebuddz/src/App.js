import './App.css'
import Summary from './Summary.js'
import BusinessStats from './BusinessStats.js'
import ConsumerStats from './ConsumerStats.js'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {makeStyles} from '@material-ui/core/styles'
import React, {useState} from 'react'

const data = [
  {
    summary: {
      name: 'Sour Diesel',
    image: 'https://images.leafly.com/flower-images/sour-diesel.jpg?auto=compress,format&w=440&dpr=2',
    description: 'Sour Diesel has defined East Coast high-THC cannabis since the 1990s and has decades-long popularity among elite consumers.'
    },
    businessStats: {
      difficulty: 'Moderate',
      yield: '1-3 (Oz/Ft)²',
      flowering: '10-12 Weeks'
    },
    consumerStats: {
      happy: 57,
      uplifted: 50,
      euphoric: 49
    }
  },
  {
    summary: {
      name: 'Sour Diesel',
      image: 'https://images.leafly.com/flower-images/sour-diesel.jpg?auto=compress,format&w=440&dpr=2',
      description: 'Sour Diesel has defined East Coast high-THC cannabis since the 1990s and has decades-long popularity among elite consumers.'
    },
    businessStats: {
      difficulty: 'Moderate',
      yield: '1-3 (Oz/Ft)²',
      flowering: '10-12 Weeks'
    },
    consumerStats: {
      happy: 57,
      uplifted: 50,
      euphoric: 49
    }
  },
  {
    summary: {
      name: 'Sour Diesel',
      image: 'https://images.leafly.com/flower-images/sour-diesel.jpg?auto=compress,format&w=440&dpr=2',
      description: 'Sour Diesel has defined East Coast high-THC cannabis since the 1990s and has decades-long popularity among elite consumers.'
    },
    businessStats: {
      difficulty: 'Moderate',
      yield: '1-3 (Oz/Ft)²',
      flowering: '10-12 Weeks'
    },
    consumerStats: {
      happy: 57,
      uplifted: 50,
      euphoric: 49
    }
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

function App() {
  const [state, setState] = useState(0)
  const classes = useStyles()
  console.log(state)
  return (
      <>
      <div className={classes.root}>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button onClick={() => setState(0)}>One</Button>
          <Button onClick={() => setState(1)}>Two</Button>
          <Button onClick={() => setState(2)}>Three</Button>
        </ButtonGroup>
      </div>      
      < Summary data={data[state].summary} />
      < BusinessStats data={data[state].businessStats} />
      < ConsumerStats data={data[state].consumerStats} />
      </>
    )
}

export default App
