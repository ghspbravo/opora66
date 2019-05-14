import fetch from 'node-fetch'

// fetch(`${this.props.server}/posts/${this.props.id}`)
// .then(data => data.json())
// .then(data => this.setState({
//   post: data,
//   isLoading: false,
// }))
// .catch(() => this.setState({
//   isLoading: false,
// }))

// id 17 - video
const server = "http://opora66.ru/wp-json/wp/v2"

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
fetchVideos(server)