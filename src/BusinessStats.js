import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 345
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
})

const BusinessStats = (props) => {
    const classes = useStyles()

    return (
        <>
            <Card className={classes.root} style={{margin: '20px'}}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Business Stats
                    </Typography>
                    <br></br>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Growing Difficulty: {props.data?.difficulty}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Yield: {props.data?.yield}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Flowering: {props.data?.flowering}
                    </Typography>
                </CardContent>
            </Card>
        </>
        // <div>
        //     <div>Growing Difficulty: {props.data.difficulty}</div>
        //     <div>Yield: {props.data.yield}</div>
        //     <div>Flowering: {props.data.flowering}</div>
        // </div>
    )
}

export default BusinessStats