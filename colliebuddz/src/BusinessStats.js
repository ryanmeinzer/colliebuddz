const BusinessStats = (props) => {

    console.log(props)
    return (
        <div>
            <div>Growing Difficulty: {props.data.difficulty}</div>
            <div>Yield: {props.data.yield}</div>
            <div>Flowering: {props.data.flowering}</div>
        </div>
    )
}

export default BusinessStats