import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import VideoPlayerControls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import FullScreen from '../components/full-screen'
class VideoPlayer extends Component {

    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
        currentVolume:1,
    }
    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })

    }
    componentDidMount(){
        this.setState({
            pause: (!this.props.autoPlay) //if ternario
        })
    }

    handleLoadedMetaData = event => {
        this.video = event.target
        this.setState({
            duration: this.video.duration
        })
    }
    handleTimeUpdate = event => {
        // console.log(this.video.currentTime)
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    handleProgressChange = event => {
        //event.target.value  da el valor del evento
        this.video.currentTime = event.target.value
        this.setState({
            currentTime: this.video.currentTime
        })
    }//importante cambiar el estado del value para que fluya el cursor

    handleSeeking = event =>{
        this.setState({
            loading:true,
        })
    }

    handleSeeked = event =>{
        this.setState({
            loading:false,
        })
    }

    handleVolumeChange = event =>{
        this.video.volume = event.target.value
        this.setState({
            currentVolume: event.target.value
        })
    }

    handleVolumenClick = event =>{
        if (this.video.volume == 0) {
            this.video.volume = 1
            this.setState({
                currentVolume: 1
            })
        } else {
            this.video.volume = 0
            this.setState({
                currentVolume: 0
            })
        }
    }
   
    handleFullScreenClick = event => {
        if (!document.webkitIsFullScreen) {
            this.player.webkitRequestFullscreen()
        } else {
            document.webkitExitFullscreen()
        }
    }

    setRef = element => {
        this.player = element
    }
    render(){
        return(
            <VideoPlayerLayout
                setRef={this.setRef}
            >
                <Title 
                    title={this.props.title}
                />
                <VideoPlayerControls>
                    <PlayPause
                        pause={this.state.pause} 
                        handleClick = {this.togglePlay}
                    />
                    <Timer 
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    />
                    <ProgressBar 
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handleProgressChange={this.handleProgressChange} 
                    />
                    <Volume 
                        handleVolumeChange={this.handleVolumeChange}
                        handleVolumenClick={this.handleVolumenClick}
                        value={this.state.currentVolume}
                    />
                    <FullScreen
                        handleFullScreenClick={this.handleFullScreenClick}
                    />
                </VideoPlayerControls>
                <Spinner 
                    active={this.state.loading}
                />
                <Video 
                    autoplay={this.props.autoPlay}
                    pause={this.state.pause}
                    src={this.props.src}
                    handleLoadedMetaData={this.handleLoadedMetaData}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                />
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer;