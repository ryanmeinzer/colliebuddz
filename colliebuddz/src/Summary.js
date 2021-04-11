import FireButton from './FireButton'

const Summary = (props) => {

    return (
        <>
            <div>{props.data.name}</div>
            <img alt={props.data.name} src={props.data.image} width='150px' ></img>
            < FireButton />
            <div>{props.data.description}</div>
        </>
    )
}

export default Summary