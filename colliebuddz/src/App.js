import './App.css'
import Summary from './Summary.js'
import BusinessStats from './BusinessStats.js'
import ConsumerStats from './ConsumerStats.js'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {makeStyles} from '@material-ui/core/styles'
import React, {useState, useEffect} from 'react'
import Container from '@material-ui/core/Container'

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
  const dataInitialState = {
    summary: {
      name: '',
      image: '',
      description: ''
    },
    businessStats: {
      difficulty: '',
      yield: '',
      flowering: ''
    },
    consumerStats: [
      {
        name: '',
        value: ''
      },
      {
        name: '',
        value: ''
      },
      {
        name: '',
        value: ''
      }
    ],
    sound: ''
  }
  
  const [data, setData] = useState([dataInitialState])

  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(json => setData(json.data)
      )
  }, [])

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
        < Summary data={data[state].summary} sound={data[state].sound}/>
        < BusinessStats data={data[state].businessStats} />
        < ConsumerStats data={data[state].consumerStats} />
      </Container>
    </>
    )
}

export default App