import WhatshotIcon from '@material-ui/icons/Whatshot'
import useSound from 'use-sound';
import Button from "@material-ui/core/Button"
import React, {useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        color: 'red',
        borderRadius: '50%',
        height: '4rem',
        width: '4rem',
        margin: '1rem',
        animation: '$fireLit 5000ms infinite',
        },
        '@keyframes fireLit': {
            'from': {boxShadow: '0 0 - 10px red'},
            'to': {boxShadow: '0 0 20px red'}
        }
})

const FireButton = (props) => {

    const [play, {stop, isPlaying}] = useSound(props.sound)

    useEffect(() => {
        console.log('mounted')
        return () => isPlaying && stop()
    }, [props.state])

    const Pause = ({stop}) => {
        const classes = useStyles()
        return (
            <Button onClick={() => stop()} aria-label="fire" variant="contained" className={classes.root} >
                <WhatshotIcon style={{fontSize: '2.5rem'}} />
            </Button>
        )
    }

    // () => {alert('Blazing music for this strain will now play - Enjoy!'); play()}
    
    const handleAlert = () => {
        alert('Blazing music for this strain will now play - Enjoy!')
    }

    const handlePlay = ({play}) => {
        return play()
    }

    const Play = ({play}) => {
        return (
            <Button onClick={() => {handleAlert(); handlePlay({play})}} aria-label="fire" variant="contained" style={{color: 'gray', borderRadius:'50%', height: '4rem', width: '4rem', margin: '1rem'}}>
                <WhatshotIcon style={{fontSize: '2.5rem'}} />
            </Button>
        )
    }

    return (
        <div>
            {isPlaying ? <Pause stop={stop} /> : <Play play={play} />}
        </div>
    )
}

export default FireButton