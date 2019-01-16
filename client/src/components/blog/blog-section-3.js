import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Spinner from '../common/Spinner';
import { connect } from 'react-redux';
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

  componentDidMount() {
    
  }

  render() {
    const { post } = this.props.blog;
    console.log(post);
    return (
      <section className="blog-section-3">
        <div className="overlay">

          <BtnPostUrl name="Back to Blog" url="/blog" icon="arrow_back" />

          <h1>{post.title}</h1>
          <img src={post.img} alt={post.title} />
          <p>{post.content}</p>
          
        </div>
      </section>
    );
  }
}

BlogSection3.proptypes = {
  blog: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  blog: state.blog
});

export default connect(mapStateToProps, {})(BlogSection3);