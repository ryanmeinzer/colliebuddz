const BusinessStats = (props) => {

    console.log(props)
    return (
        <>
            <div>{props.data.difficulty}</div>
            <div>{props.data.yield}</div>
            <div>{props.data.flowering}</div>
        </>
    )
}

export default BusinessStats