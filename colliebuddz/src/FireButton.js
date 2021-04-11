import React, {useState} from 'react'

const FireButton = () => {

    const [fireDisplay, setfireDisplay] = useState(false)

    const ToggleButton = () => {
        setfireDisplay(!fireDisplay)
    }

    return (
        <button onClick={() => ToggleButton()}>
            {fireDisplay ? '🔥' : '🚭'}
        </button>
    )
}

export default FireButton