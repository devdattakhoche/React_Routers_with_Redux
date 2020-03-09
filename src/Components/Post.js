import React from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {deletePost} from '../Actions/postActions'

class Post extends React.Component{
    
handleClick = () =>
{
    console.log(this.props.post.id)
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
}
    
    render(){
        const post = this.props.post ? (
            <div className="shadow-lg center">
                {this.props.post.title}
                <div>
                <button onClick ={this.handleClick.bind()} className="btn px-3 mb-4 btn-danger">
                    Delete Post
                </button>
                </div>
            </div>
        ) : (
            <div className="center">
                <h1 className="display-4">
                    No request setInterval.
                </h1>
            </div>
        )
        return(
            <div className="container">
                <h1 className="display-4">
                    {post}
                </h1>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id =  ownProps.match.params.post_id
    return{
        post : state.posts.find(post => 
            post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        deletePost  : (id) => { dispatch(deletePost(id)) }
    } 
}


export default connect(mapStateToProps,mapDispatchToProps)(Post);