import React, { Component } from 'react';
import axios from 'axios';
import BlogSection3 from './blog-section-3';

const initialState = {
  posts: [],
  newPosts: []
};

let thePosts = [];

class SinglePost extends Component {
  constructor() {
    super();
    
    this.state = initialState;

    this.fetchPostsAPI = this.fetchPostsAPI.bind(this);
	}
	
	fetchPostsAPI() {
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
          this.setState({ posts: res.data });
          this.state.posts.map(post => {
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
		this.setState({ newPosts: thePosts });
  }

  componentDidMount() {
    this.fetchPostsAPI();
	}
	
  render() {
		// console.log(this.state.newPosts);
		return (
			<section className="single-post">
				<div className="overlay">

					<BlogSection3 />
				
				</div>
			</section>
		);
	}
}

export default SinglePost;