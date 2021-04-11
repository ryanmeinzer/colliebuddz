const Summary = (props) => {

    console.log(props)
    return (
        <>
            <div>{props.data.name}</div>
            <div>{props.data.image}</div>
            <div>{props.data.description}</div>
        </>
    )
}

export default Summary