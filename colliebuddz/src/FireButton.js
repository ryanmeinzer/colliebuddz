import IconButton from '@material-ui/core/IconButton';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import useSound from 'use-sound';
import ComeAround from './sounds/ComeAround.m4a'

const FireButton = () => {

    const [play, {stop, isPlaying}] = useSound(ComeAround)

    const Pause = ({stop}) => {
        return (
            <IconButton onClick={() => stop()} aria-label="fire" style={{color: 'red'}} >
                <WhatshotIcon />
            </IconButton>
        )
    }

    const Play = ({play}) => {
        return (
            <IconButton onClick={() => play()} aria-label="fire" >
                <WhatshotIcon style={{color: 'disabled'}} />
            </IconButton>
        )
    }

    return (
        <>
            {isPlaying ? <Pause stop={stop} /> : <Play play={play} />}
        </>
    )
}

export default FireButton