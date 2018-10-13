import React from 'react';
import PropTypes from 'prop-types'

function DeleteItem(props){
    return(
      <button onClick={props.deleteLastItem} disabled={props.noItemsFound()}>
        Delete Last Item
      </button>)
}

DeleteItem.propTypes = {
    noItemsFound: PropTypes.func.isRequired,
    deleteLastItem: PropTypes.func.isRequired,
  };
  

export default DeleteItem;