import React, { Component } from 'react';
import axios from 'axios';
// import Fade from 'react-reveal/Fade';

const initialState = {
  posts: [],
  newPosts: []
};

let thePosts = [];

class BlogSection2 extends Component {
  constructor() {
    super();
    
    this.state = initialState;

    this.fetchPostsAPI = this.fetchPostsAPI.bind(this);

    // this.fetchPostsAPI();
  }

  // componentWillMount() {
  //   if (thePosts.length < 1) {
  //     this.fetchPostsAPI();
  //   }
    
  //   // thePosts = [];
  // }

  fetchPostsAPI() {
    // let thePosts = [];

    if (thePosts.length < 25) {
      const options = {
        method: 'GET',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: 'https://blog.tripimagine.com/wp-json/wp/v2/posts?per_page=10'
      };

      axios(options)
        .then(res => {
          let postDetails;
          let value;
          this.setState({ posts: res.data });
          // this.state.posts.map(post => console.log(post.title.rendered));
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
                // this.state.myArray.push('new value');
                
              })
              .catch(err => console.log(err));
              return value;
          });
        })
        .catch(err => console.log(err));
    }
    this.setState({ newPosts: thePosts });
    // console.log(thePosts);
  }

  componentDidMount() {
    // if (thePosts.length < 25) {
    //   this.fetchPostsAPI();
    // } else {
    //   this.setState({ newPosts: thePosts });
    // }
    this.fetchPostsAPI();
  }

  render() {
    console.log(this.state.newPosts);
    return (
      <section className="blog-section-2">
        <div className="overlay">

          <div className="content">
            
            {this.state.newPosts.map((post, i) => {
              return <div style={{marginBottom: '50px'}} key={i}><img src={post.featuredImg} alt={post.title} /><br/><h3>{post.title}</h3><br/>{post.desc}<br/></div>;
            })}

          </div>
          
        </div>
      </section>
    );
  }
}

export default BlogSection2;