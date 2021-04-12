import './App.css'
import Summary from './Summary.js'
import BusinessStats from './BusinessStats.js'
import ConsumerStats from './ConsumerStats.js'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {makeStyles} from '@material-ui/core/styles'
import React, {useState} from 'react'
import Container from '@material-ui/core/Container'

const data = [
  {
    summary: {
      name: 'Blue Dream',
      image: 'https://images.leafly.com/flower-images/blue-dream.png?auto=compress,format&w=343&dpr=2',
      description: 'This top-searched, best-selling strain has owned the charts for over a decade & is loved by all types of cannabis consumers.'
    },
    businessStats: {
      difficulty: 'Moderate',
      yield: '3-6 (Oz/Ft)²',
      flowering: '10-12 Weeks'
    },
    consumerStats: [
      {
        name: 'Happy',
        value: 57
      },
      {
        name: 'Euphoric',
        value: 52
      },
      {
        name: 'Relaxed',
        value: 48
      }
    ]
  },
  {
    summary: {
      name: 'Sour Diesel',
      image: 'https://images.leafly.com/flower-images/sour-diesel.jpg?auto=compress,format&w=343&dpr=2',
      description: 'This strain has defined East Coast high-THC cannabis since the 1990s and has decades-long popularity among elite consumers.'
    },
    businessStats: {
      difficulty: 'Moderate',
      yield: '1-3 (Oz/Ft)²',
      flowering: '10-12 Weeks'
    },
    consumerStats: [
      {
        name: 'Happy',
        value: 57
      },
      {
        name: 'Uplifted',
        value: 50
      },
      {
        name: 'Euphoric',
        value: 49
      }
    ]
  },
  {
    summary: {
      name: 'Granddaddy Purple',
      image: 'https://images.leafly.com/flower-images/granddaddy-purple.png?auto=compress,format&w=343&dpr=2',
      description: 'GDP enjoys solid consumer demand and is the matriarch of The Purps strain family, easily making it a Leafly legend of 420.'
    },
    businessStats: {
      difficulty: 'Easy',
      yield: '3-6 (Oz/Ft)²',
      flowering: '7-9 Weeks'
    },
    consumerStats: [
      {
        name: 'Relaxed',
        value: 56
      },
      {
        name: 'Sleepy',
        value: 46,
      },
      {
        name: 'Happy',
        value: 44
      }
    ]
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
  return (
    <>
      <div className={classes.root}>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button onClick={() => setState(0)}>Blue Dream</Button>
          <Button onClick={() => setState(1)}>Sour Diesel</Button>
          <Button onClick={() => setState(2)}>Granddaddy Purple</Button>
        </ButtonGroup>
      </div>
      <Container align='center'>
        < Summary data={data[state].summary} />
        < BusinessStats data={data[state].businessStats} />
        < ConsumerStats data={data[state].consumerStats} />
      </Container>
    </>
    )
}

export default App
