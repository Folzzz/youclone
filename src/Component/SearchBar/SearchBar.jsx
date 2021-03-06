import React, {Component} from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             searchTerm: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value,
        })
    }
    
    handleSubmit = (e) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);
        e.preventDefault();

    }
    

    render () {

        return (
            <div>
               <Paper elevation={6} style={{ padding: '25px'}} >
                   <form onSubmit={this.handleSubmit} >
                       <TextField fullWidth label='Search...' onChange={this.handleChange} />
                   </form>
               </Paper> 
            </div>
        )
    }
    
}

export default SearchBar
