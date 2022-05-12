function ItemCard({title, desc, logo}){
    return (
        <div className='item'>
            <img src={logo} alt="Item logo" />
            <h1> {title} </h1>
            <h3> {desc} </h3>
        </div>
    );
}

export default ItemCard;