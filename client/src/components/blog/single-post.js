import React, { Component } from 'react';
import BlogSection1 from './blog-section-1';
import BlogSection3 from './blog-section-3';

const initialState = {
  posts: [],
  newPosts: []
};

class SinglePost extends Component {
  constructor() {
    super();
    
    this.state = initialState;
  }

  componentDidMount() {
    
	}
	
  render() {
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