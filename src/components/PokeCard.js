import React, { useState } from 'react';
import {Typography, Card, CardMedia, CardHeader, CardContent, CardActions, IconButton, Avatar} from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const PokeCard = ({ id, image, name }) => {

    const [count, setCount] = useState(0);

    return (
        <Card>
            <CardMedia
                style={{paddingTop: '100%'}}
                image= { image }
                title={ name }
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                { String(id).padStart(3, '0') }: { name.charAt(0).toUpperCase() + name.slice(1) }
            </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                Buy { name.charAt(0).toUpperCase() + name.slice(1) }!
                </Typography>
            </CardContent>
            <CardActions style={{display: "flex", justifyContent: "center"}}>
                <IconButton 
                    aria-label="Sell"
                    onClick={() => {count > 0 && setCount(count - 1)}}
                    >
                    <RemoveIcon />
                </IconButton>
                <Typography variant="h5" component="h2">
                {count}
                </Typography>
                <IconButton 
                    aria-label="Buy"
                    onClick={() => setCount(count + 1)}
                    >
                    <AddIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
} 

export default PokeCard;