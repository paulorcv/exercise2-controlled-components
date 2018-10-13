import React from 'react';

function ItemList(props){

    const items = props.items;

    return(
       <div className='ItemList'>
        <p className="items">Items</p>
        <ol className="item-list">
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
        </div> 
    );
}

export default ItemList;
