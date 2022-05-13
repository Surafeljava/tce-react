import { useState, useEffect } from 'react';
import logo from './assets/download.png';
import './app.css';
import ItemCard from './componets/item_card';
import { Button, TextField, Grid } from '@mui/material';
import axios from 'axios';

const items_default = [

];

function App(){

    const [items, addItems] = new useState(items_default);
    const [title, addTitle] = new useState('');
    const [desc, addDesc] = new useState('');

    const [test, addTest] = new useState('Empty');

    function handleButtonClick(event){
        let data = {
            title: title,
            desc: desc,
            logo: logo
        }
        let newItems = [...items, data];
        addItems(newItems);
    }

    const fetchItems = async () => {
        //http://localhost:5000/items
        const resp = await axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode');
        
        let sample = {
            title: JSON.stringify(resp.data.setup),
            desc: JSON.stringify(resp.data.delivery),
            logo: logo
        }
        
        addItems([...items, sample]);
        addTest(JSON.stringify(resp.data.setup));
        
        // axios.get('http://localhost:5000/items')
        // .then((res2) => {
        //     addItems(res2);
        // });

        // [{
        //     title: '',
        //     desc: ''
        // },
        // {
        //     title: '',
        //     desc: ''
        // }]
    }

    useEffect(()=>{
        fetchItems();
    },[]);

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

                <h3> {test} </h3>

            </Grid>

            <Grid item flexGrow={1}>
            </Grid>


        </Grid>
    );
}

export default App;