import React, {Component} from 'react';
import PropTypes from 'prop-types'


class FormItem extends Component{

    static propTypes = {
        deleteLastItem: PropTypes.func.isRequired,
        noItemsFound: PropTypes.func.isRequired,
        addItem: PropTypes.func.isRequired,
      }

    state = {
        value: ''        
      };    

      constructor(props){
        super(props);  
      }

    handleChange = event => {
        this.setState({ value: event.target.value });
      };

      inputIsEmpty = () => {
        return this.state.value === '';
      };
    
      addItemForm = event => {
        event.preventDefault();
        this.props.addItem(this.state.value);
      };

    render(){
        

    return(
    <div className='form-item'>
        <form onSubmit={this.addItemForm}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>        
        <button onClick={this.props.deleteLastItem} disabled={this.props.noItemsFound()}>
        Delete Last Item
      </button>
      </div>    
    )        
    }

}

export default FormItem;