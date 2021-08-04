import React from 'react';
import { Grid } from '@material-ui/core/';
import PokeCard from './PokeCard';

const PokeDeck = ({ pokemon }) => {
    return (
        <div style={{display: "flex", justifyContent:"center", marginTop:20}}>
            <Grid container spacing={2} style={{width: '80%'}}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={3}>
                    {pokemon.map((item) => (
                        <Grid xs={12} sm={6} md={3} item>
                            <PokeCard
                                key={item.id}
                                id={item.id}
                                image={item.sprites.other['official-artwork'].front_default}
                                name={item.name}
                            />
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
} 

export default PokeDeck;