import FireButton from './FireButton'

const Summary = (props) => {

    return (
        <>
            < FireButton />
            <div>{props.data.name}</div>
            <div>{props.data.image}</div>
            <div>{props.data.description}</div>
        </>
    )
}

export default Summary