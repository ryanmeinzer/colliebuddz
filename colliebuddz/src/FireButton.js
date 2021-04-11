import React, {useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const FireButton = () => {

    const [fireDisplay, setfireDisplay] = useState(false)

    const ToggleButton = () => {
        setfireDisplay(!fireDisplay)
    }

    return (
        <>
            {fireDisplay
                ?
                <IconButton onClick={() => ToggleButton()} aria-label="fire" style={{color: 'red'}} >
                    <WhatshotIcon />
                </IconButton>
                :
                <IconButton onClick={() => ToggleButton()} aria-label="fire" >
                    <WhatshotIcon style={{color: 'disabled'}} />
                </IconButton>
            }
        </>
    )
}

export default FireButton