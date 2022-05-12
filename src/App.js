import logo from './assets/download.png';
import './app.css';
import ItemCard from './componets/item_card';
import { Button, TextField, Grid } from '@mui/material';

const items = [
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
                <TextField fullWidth variant='outlined' label='title'/>
                <br />
                <TextField fullWidth variant='outlined' label='description'/>
                <br />
                <Grid container direction="row" justifyContent="space-evenly">
                    <Grid item xs={4}>
                        <Button fullWidth variant='contained'> Add </Button>
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