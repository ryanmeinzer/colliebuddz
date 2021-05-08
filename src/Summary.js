import React, {useState} from 'react'
import FireButton from './FireButton'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
})

const Summary = (props) => {
    const classes = useStyles()

    const [open, setOpen] = useState(false)

    const handleShareClick = () => {
        setOpen(true)
        props.state === 0 ? navigator.clipboard.writeText("https://colliebuddz.netlify.app/blue-dream")
        : props.state === 1 ? navigator.clipboard.writeText("https://colliebuddz.netlify.app/gods-gift")
        : navigator.clipboard.writeText("https://colliebuddz.netlify.app/grandaddy-purple")
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    const handleLearnMoreClick = () => {
        const confirmed = window.confirm('You will be redirected to learn more about this strain on Leafly.com')
        if (confirmed) {
            window.open(`https://www.leafly.com/strains/${props.data.name.replace(/'/, '').replace(/\s+/g, "-").toLowerCase()}`, "_blank")
        }
    }

    return (
        <>
            <Card className={classes.root} style={{margin: '10px'}}>
                < FireButton sound={props.sound} state={props.state} />
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`${props.data?.image}`}
                        title="Contemplative Reptile"
                        style={{width: '150px'}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.data?.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.data?.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={handleShareClick} size="small" color="primary">
                        Share
                    </Button>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Share URL Copied to Your Clipboard"
                        action={
                            <>
                                <Button style={{color: 'green'}} size="small" onClick={handleClose}>
                                    Enjoy! <ShareIcon />
                                </Button>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </>
                        }
                    />
                    <Button onClick={handleLearnMoreClick} size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Summary