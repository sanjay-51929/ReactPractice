import React, {Component} from 'react';
import './comment.module.css';

export default class Comment extends Component
{
    constructor(){
        super();
        this.state = {
            comments : []
        };
    }

    handleAddComment = () => {       
        if (!document.getElementById('txtComment').value)
            return;
        let _comments = this.state.comments;
        _comments.push(document.getElementById('txtComment').value);
        this.setState({ comments : _comments });
        document.getElementById('txtComment').value = '';
    }

    render()
    {
        return (
            <div className="row">
                <div className="col">
                    <div className="row"> 
                        <div className="col">
                            <div className="container">
                                <label>Enter a comment:</label> &nbsp; {'       '}
                                <textarea cols='50' rows='10' id='txtComment'key='txtComment' placeholder='Here is my comment' ></textarea>                                
                            </div>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col">
                            <button className="button" onClick={() => this.handleAddComment()} >
                                Submit</button>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col">
                            {
                                this.state.comments.map((comment, index) => (
                                    <li key={ 'lst_comments_' + index.toString() }>
                                        {comment} 
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}