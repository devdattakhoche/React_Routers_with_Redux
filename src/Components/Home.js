import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { Component } from "react";
import { connect } from "react-redux";
class Home extends Component {
  render() {
     console.log(this.props)
    const { posts } = this.props;
    const postlist = posts.length ? (
      posts.map(post => {
        return (
          <div key={post.id} className="shadow-lg p-3 mb-5 bg-white rounded">
            <h5>
              <strong>
                <Link to={"post/" + post.id}>{post.title}</Link>
              </strong>
            </h5>
            <p>{post.body}</p>
          </div>
        );
      })
    ) : (
      <div className="shadow-lg p-3 mb-5 bg-white rounded">
        No Posts Available.
      </div>
    );
    return (
      <div className="container text-center my-5">
        <h5 className="display-4">Home</h5>
        {postlist}
      </div>
    );
  }
}

const mapStateTopProps = state => {
  return {
    posts: state.posts
  };
};
export default connect(mapStateTopProps)(Home);
