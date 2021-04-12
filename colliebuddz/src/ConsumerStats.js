import Card from '@material-ui/core/Card'
import {makeStyles} from '@material-ui/core/styles';
import {BarChart, Bar, XAxis } from 'recharts';

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
        <Card className={classes.root} style={{margin: '20px'}}>
            <BarChart width={275} height={200} data={props.data} style={{margin: '20px'}}>
                <Bar dataKey="value" fill="green" />
                <XAxis dataKey="name" />
            </BarChart>
        </Card>
    )
}

export default ConsumerStats