const ConsumerStats = (props) => {

    console.log(props)
    return (
        <>
            <div>{props.data.first}</div>
            <div>{props.data.second}</div>
            <div>{props.data.third}</div>
        </>
    )
}

export default ConsumerStats