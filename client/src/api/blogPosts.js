import axios from 'axios';

let thePosts = [];
let posts = [];
const fetchPostsAPI = () => {
  if (thePosts.length < 100) {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      url: 'https://blog.tripimagine.com/wp-json/wp/v2/posts?per_page=94'
    };

    axios(options)
      .then(res => {
        let postDetails;
        let value;
        posts = res.data;
        posts.map(post => {
          postDetails = post._links['wp:featuredmedia'][0].href;

          const options = {
            method: 'GET',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: postDetails
          };
      
          axios(options)
            .then(res => {
              value = res.data.guid.rendered;
              post.featuredImg = value;
              post.desc = post.excerpt.rendered;
              thePosts.push({
                featuredImg: post.featuredImg,
                title: post.title.rendered,
                desc: post.desc
              });
            })
            .catch(err => console.log(err));
            return value;
        });
      })
      .catch(err => console.log(err));
  }
  return thePosts;
};

export default fetchPostsAPI;