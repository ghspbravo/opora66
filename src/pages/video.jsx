import React, { Component } from 'react'

import './video.css'

import Parser from 'html-react-parser';

async function fetchVideos(server) {
  const videos = [];
  await fetch(`${server}/posts?categories=17&per_page=100`)
    .then(data => data.json())
    .then(data => {
      data.forEach(videoItem => {
        const video = {};
        video.title = videoItem.title.rendered;
        video.content = videoItem.content.rendered;
        videos.push(video);
      });
    });
  return videos;
}

export default class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videoList: []
    }
  }


  componentDidMount() {
    fetchVideos(this.props.server).then(videoList => {
      this.setState({
        videoList
      })
    })

    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <div className="container">
          <button className="post-single-back" onClick={this.props.goBack} >← Назад</button>
          <h1>Видеоархив</h1>
          <div className="video-gallery">

            {this.state.videoList.length > 0 &&
              this.state.videoList.map(video => <div className="video-item">
                <h2>{video.title}</h2>
                {Parser(video.content)}
              </div>)

            }

          </div>
        </div>
      </div>
    )
  }
}
