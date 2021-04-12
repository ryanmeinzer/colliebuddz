import IconButton from '@material-ui/core/IconButton';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import useSound from 'use-sound';
import React, {useEffect} from 'react'

const FireButton = (props) => {

    const [play, {stop, isPlaying}] = useSound(props.sound)

    const Pause = ({stop}) => {
        return (
            <IconButton onClick={() => stop()} aria-label="fire" style={{color: 'red'}} >
                <WhatshotIcon style={{fontSize: '2.5rem'}} />
            </IconButton>
        )
    }

    const Play = ({play}) => {
        return (
            <IconButton onClick={() => play()} aria-label="fire" >
                <WhatshotIcon style={{color: 'disabled', fontSize: '2.5rem'}} />
            </IconButton>
        )
    }

    return (
        <div>
            {isPlaying ? <Pause stop={stop} /> : <Play play={play} />}
        </div>
    )
}

export default FireButton