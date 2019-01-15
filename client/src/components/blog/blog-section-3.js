import React, { Component } from 'react';
import Spinner from '../common/Spinner';
import { BtnPostUrl, ButtonUrl } from '../common/common-button';

const initialState = {
  posts: [],
  newPosts: []
};

class BlogSection3 extends Component {
  constructor() {
    super();
    
    this.state = initialState;
  }

  render() {
    return (
      <section className="blog-section-3">
        <div className="overlay">

          single post
          
        </div>
      </section>
    );
  }
}

export default BlogSection3;