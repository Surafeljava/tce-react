import {Link} from '@mui/material';

function ItemCard({title, desc, logo}){
    return (
        <div className='item'>
            <img src={logo} alt="Item logo" />
            <h1> {title} </h1>
            <h3> {desc} </h3>
            <Link href='http://localhost:3000/item'> See Details </Link>
        </div>
    );
}

export default ItemCard;