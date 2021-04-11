import Card from '@material-ui/core/Card'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
})

const ConsumerStats = (props) => {
    const classes = useStyles()
    return (
        <Card className={classes.root} style={{margin: '10px'}}>
            <div>
            <div>{Object.keys(props.data)[0][0].toUpperCase() + Object.keys(props.data)[0].substring(1)}: {Object.values(props.data)[0]}</div>
            <div>{Object.keys(props.data)[1][0].toUpperCase() + Object.keys(props.data)[1].substring(1)}: {Object.values(props.data)[1]}</div>
            <div>{Object.keys(props.data)[2][0].toUpperCase() + Object.keys(props.data)[2].substring(1)}: {Object.values(props.data)[2]}</div>
            </div>
        </Card>
    )
}

export default ConsumerStats