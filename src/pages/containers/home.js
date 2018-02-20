import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
import { connect } from 'react-redux'

class Home extends Component {

    state = {
        modalVisible: false,
    }

    handleOpenModal = (media) =>{
        this.setState({
            modalVisible: true,
            media,// si la propiedad se llama igual que la key solo lo declaras una vez
        })
    }

    handleCloseModal = (event) =>{
        this.setState({
            modalVisible: false,
        })

    }

    render() {
    
        return (
            <HandleError> 
                <HomeLayout>
                    <Related />
                    
                    <Categories 
                        categories={this.props.categories}
                        handleOpenModal = {this.handleOpenModal}
                        search={this.props.search}
                    />
                    {
                        this.state.modalVisible && //if condicional solo ve true o false
                        <ModalContainer>
                            <Modal
                                handleClick = {this.handleCloseModal}
                            >
                                <VideoPlayer 
                                    autoPlay
                                    src={this.state.media.src}
                                    title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
          
        )
    }
}
function mapStateToProps(state, props) {
    return {
        categories: state.data.categories,
        search: state.search,
    }
    
}
export default connect(mapStateToProps)(Home);