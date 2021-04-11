const ConsumerStats = (props) => {

    return (
        <div>
            <div>{Object.keys(props.data)[0][0].toUpperCase() + Object.keys(props.data)[0].substring(1)}: {Object.values(props.data)[0]}</div>
            <div>{Object.keys(props.data)[1][0].toUpperCase() + Object.keys(props.data)[1].substring(1)}: {Object.values(props.data)[1]}</div>
            <div>{Object.keys(props.data)[2][0].toUpperCase() + Object.keys(props.data)[2].substring(1)}: {Object.values(props.data)[2]}</div>
        </div>
    )
}

export default ConsumerStats