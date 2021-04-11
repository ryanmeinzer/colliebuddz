const ConsumerStats = (props) => {

    console.log(props)
    return (
        <>
            <div>{Object.values(props.data)[0]}</div>
            <div>{Object.values(props.data)[1]}</div>
            <div>{Object.values(props.data)[2]}</div>
        </>
    )
}

export default ConsumerStats