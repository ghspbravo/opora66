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

function fetchCategory(server) {
  fetch(`${server}/posts?categories=21&per_page=100&_embed`)
    .then(data => data.json())
    .then(data => {
      const result = data.map(item => {
        return {
          id: item.id,
          title: item.title.rendered,
          image: item._embedded['wp:featuredmedia'][0].source_url,
        }
      });
      console.log(result)
      return result;
    });
}
fetchCategory(server)