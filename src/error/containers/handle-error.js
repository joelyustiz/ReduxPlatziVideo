import React, {Component} from 'react'
import RegularError from '../components/regular-error'

class HandleError extends Component {

    state = {     
        handleError: false,
    }

    componentDidCatch (error, info) {
        //Envia este error a un servicio como sentry
        this.setState({
            handleError: true,
        })
    }
    render() {
        if (this.state.HandleError) {
            return <RegularError />
            
        }
        return this.props.children
    }
}

export default HandleError;