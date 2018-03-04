import React, { Component } from 'react'
import Search from '../components/search'
import { connect } from 'react-redux'
import { searchEntities } from '../../actions/index'

class SearchContainer extends Component {
    state={
        value:''
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.input.value, "submit")
        this.props.dispatch(searchEntities(this.input.value))
    }

    setInputRef = element => {
        this.input = element
    }

    handleInputChange = event =>{
        this.setState({
            value: event.target.value //event.target.value.replace(' ','-')//usamos replace metodo de los string para cambiar espacio por guion y lo pasamos como estados
        })
    }
    render(){
        return(
            <Search 
                setRef = {this.setInputRef}
                handleSubmit = {this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value}
            />
        )
    }
}

export default connect()(SearchContainer);