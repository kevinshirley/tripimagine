import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../common/Spinner';
import { BtnPostUrl, Button, ButtonUrl } from '../common/common-button';

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
  }

  fetchPostsAPI() {
    if (thePosts.length < 25) {
      const options = {
        method: 'GET',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: 'https://blog.tripimagine.com/wp-json/wp/v2/posts?per_page=72'
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
                  desc: post.desc,
                  slug: post.slug,
                  content: post.content.rendered
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

  selectPost = (slug, title, img, desc, content) => {
    this.props.onCurrentPost(slug, title, img, desc, content);
  }

  componentDidMount() {
    this.fetchPostsAPI();
  }

  render() {
    return (
      <section className="blog-section-2">
        <div className="overlay">

          <div className="content">
            
            {this.state.newPosts < 1 ? <Spinner/> : this.state.newPosts.map((post, i) => {
              let posts = this.state.newPosts;
              return <div style={{marginBottom: '50px'}} key={i}><img src={post.featuredImg} alt={post.title} /><br/><h3>{post.title}</h3><br/><p dangerouslySetInnerHTML={{__html: post.desc}}></p><br/><Button name="Read More" /*url={"/blog/"+post.slug}*/ icon="add_box" onClick={() => this.selectPost(posts[i].slug, posts[i].title, posts[i].featuredImg, posts[i].desc, posts[i].content)} /></div>;
            })}

          </div>

          <div className="load-more">
            <ButtonUrl name="Load more" url="/blog" icon="refresh" />
          </div>
          
        </div>
      </section>
    );
  }
}

export default BlogSection2;