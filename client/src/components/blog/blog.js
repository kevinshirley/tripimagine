import React, { Component } from 'react';
import BlogSection1 from './blog-section-1';
import BlogSection2 from './blog-section-2';

class Blog extends Component {
  render() {
    return (
      <main className="blog">
        <BlogSection1 />
        <BlogSection2 />
      </main>
    );
  }
}

export default Blog;