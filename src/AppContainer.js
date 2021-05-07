import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Summary from './Summary.js'
import BusinessStats from './BusinessStats.js'
import ConsumerStats from './ConsumerStats.js'

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

const AppContainer = (props) => {

    const [state, setState] = useState(0)
    const classes = useStyles()

    return (
        <>
            <div className={classes.root}>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    {props.data.map((strain, index) =>
                        <Button key={`${strain}-${index}`} onClick={() => setState(index)}>{strain.summary.name}</Button>
                    )}
                </ButtonGroup>
            </div>
            <Container align='center'>
                < Summary data={props.data[state]?.summary} sound={props.sounds[state]} state={state} />
                < BusinessStats data={props.data[state]?.businessStats} />
                < ConsumerStats data={props.data[state]?.consumerStats} />
            </Container>
        </>
    )
}

export default AppContainer