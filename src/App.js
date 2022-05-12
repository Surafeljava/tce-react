import { useState } from 'react';

import logo from './assets/download.png';
import './app.css';
import ItemCard from './componets/item_card';
import { Button, TextField, Grid } from '@mui/material';

const items_default = [
    {
        title: "Item1",
        desc: "Item1 Description",
        logo: logo
    },
    {
        title: "Item2",
        desc: "Item2 Description",
        logo: logo
    }
];

function App(){

    const [items, addItems] = new useState(items_default);
    const [title, addTitle] = new useState('');
    const [desc, addDesc] = new useState('');

    function handleButtonClick(event){
        let data = {
            title: title,
            desc: desc,
            logo: logo
        }
        let newItems = items;
        newItems.push(data);
        addItems(newItems);
        console.log(data);
    }

    return (
        <Grid container direction="row" width="100%">
            <Grid container direction="column" xs={6}>
                { items.map((item) => {
                    return (
                        <ItemCard title={item.title} desc={item.desc} logo={item.logo}/>
                    );
                }) }
            </Grid>

            <Grid item flexGrow={1}>
            </Grid>

            <Grid container direction="column" xs={3} alignItems="center">
                <h1> Create Item </h1>
                <TextField 
                value={title} 
                onChange={(event) => {
                    addTitle(event.target.value);
                    console.log(event.target.value);
                }}
                fullWidth variant='outlined' label='title'/>
                <br /> 
                <TextField 
                value={desc} 
                onChange={(event) => {
                    addDesc(event.target.value);
                    console.log(event.target.value);
                }}
                fullWidth variant='outlined' label='description'/>
                <br />
                <Grid container direction="row" justifyContent="space-evenly">
                    <Grid item xs={4}>
                        <Button 
                        fullWidth 
                        variant='contained'
                        onClick={handleButtonClick}
                        >  
                            Add 
                        </Button>
                    </Grid>

                    <Grid item xs={4}>
                        <Button fullWidth variant='outlined'> Reset </Button>
                    </Grid>
                </Grid>

            </Grid>

            <Grid item flexGrow={1}>
            </Grid>
        </Grid>
    );
}

export default App;