import FireButton from './FireButton'

const Summary = (props) => {

    return (
        <>
            < FireButton />
            <img alt={props.data.name} src={props.data.image} width='150px' ></img>
            <div>{props.data.name}</div>
            <div>{props.data.description}</div>
        </>
    )
}

export default Summary