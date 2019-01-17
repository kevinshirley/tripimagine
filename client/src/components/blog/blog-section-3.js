import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Spinner from '../common/Spinner';
import { connect } from 'react-redux';
import { ButtonUrl } from '../common/common-button';

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
    window.scrollTo(0, 0);
  }

  render() {
    const { post } = this.props.blog;
    return (
      <section className="blog-section-3">
        <div className="overlay">

          <ButtonUrl name="Back to Blog" url="/blog" icon="arrow_back" />

          <h1 dangerouslySetInnerHTML={{__html: post.title}}></h1>
          <img src={post.img} alt={post.title} />
          <p dangerouslySetInnerHTML={{__html: post.content}}></p>

          <ButtonUrl name="Back to Blog" url="/blog" icon="arrow_back" />
          
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