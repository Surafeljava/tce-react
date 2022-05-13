import { useState, useEffect } from 'react';
import logo from './assets/download.png';
import './app.css';
import ItemCard from './componets/item_card';
import { Button, TextField, Grid, CircularProgress} from '@mui/material';
import axios from 'axios';

const items_default = [

];

function App(){

    const [items, addItems] = new useState(items_default);
    const [title, addTitle] = new useState('');
    const [desc, addDesc] = new useState('');

    const [test, addTest] = new useState('Empty');

    const [loading, setLoading] = new useState(false);

    // function handleButtonClick(event){
    //     let data = {
    //         title: title,
    //         desc: desc,
    //         logo: logo
    //     }
    //     let newItems = [...items, data];
    //     addItems(newItems);
    // }

    function handleAddButton(event){

        setLoading(true);
        //upload here
        axios.post('http://localhost:5000/items', 
        {
            title: title,
            desc: desc,
            logo: "https://ionicframework.com/docs/icons/logo-react-icon.png"
        }).then((result) => {
            console.log(result.status);
            //call fetchItems
            reset();
            fetchItems();
        });
    }

    const fetchItems = async () => {
        const resp = await axios.get('http://localhost:5000/items');
        addItems(resp.data);

        setLoading(false);
        
        // axios.get('http://localhost:5000/items')
        // .then((res2) => {
        //     addItems(res2.data);
        // });
    }

    function reset(){
        addTitle('');
        addDesc('');
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
                        onClick={handleAddButton}
                        >  
                            Add 
                        </Button>
                    </Grid>

                    <Grid item xs={4}>
                        <Button fullWidth variant='outlined'
                        onClick={reset}
                        > Reset </Button>
                    </Grid>
                </Grid>

                {loading===true && (
                    <CircularProgress/>
                )}

            </Grid>

            <Grid item flexGrow={1}>
            </Grid>


        </Grid>
    );
}

export default App;