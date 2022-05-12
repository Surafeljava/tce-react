import logo from './assets/download.png';
import './app.css';
import ItemCard from './componets/item_card';

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
        <div>
            { items.map((item) => {
                return (
                    <ItemCard title={item.title} desc={item.desc} logo={item.logo}/>
                );
            }) }
        </div>
    );
}

export default App;