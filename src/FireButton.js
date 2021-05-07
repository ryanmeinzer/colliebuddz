import WhatshotIcon from '@material-ui/icons/Whatshot'
import useSound from 'use-sound';
import Button from "@material-ui/core/Button"
import React, {useEffect} from 'react'

const FireButton = (props) => {

    const [play, {stop, isPlaying}] = useSound(props.sound)

    useEffect(() => {
        stop()
    }, [props.state, stop])

    const Pause = ({stop}) => {
        return (
            <Button onClick={() => stop()} aria-label="fire" variant="contained" style={{color: 'red', borderRadius: '50%', height: '4rem', width: '4rem', margin: '1rem'}} >
                <WhatshotIcon style={{fontSize: '2.5rem'}} />
            </Button>
        )
    }

    const Play = ({play}) => {
        return (
            <Button onClick={() => play()} aria-label="fire" variant="contained" style={{color: 'gray', borderRadius:'50%', height: '4rem', width: '4rem', margin: '1rem'}}>
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