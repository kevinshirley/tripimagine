import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
// import ReactPaginate from 'react-paginate';
import { currentPost } from '../../actions/blogActions';
import BlogSection1 from './blog-section-1'
import BlogSection2 from './blog-section-2'

const initialState = {
  posts: [],
  newPosts: []
};

let thePosts = [];

class Blog extends Component {
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
		// DONT delete this api call, all though the app is using the posts called from the api call in BlogSection2 comp. Found in testing that if you delete this one, then the posts called in BlogSection2 don't show up when you first arrive in /blog
  }

  aCurrentPost = (slug, title, img, desc, content) => {
    this.props.currentPost(slug, title, img, desc, content);
    this.props.history.push('/blog/'+slug);
  }

  componentDidMount() {
    this.fetchPostsAPI();
	}
	
  render() {
		return (
			<section className="blog">
				<div className="overlay">

					<BlogSection1 />
          <BlogSection2 
            posts={this.state.newPosts} 
            onCurrentPost={this.aCurrentPost}
          />
				
				</div>
			</section>
		);
	}
}

Blog.proptypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {currentPost})(Blog);