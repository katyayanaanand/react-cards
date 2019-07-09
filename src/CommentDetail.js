import React from 'react'

const CommentDetail = prop => {
    return (
        <div className="comments">
                <a href="/" className="avatar">
                    <img alt="avatar" src={prop.img} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {prop.author}
                    </a>
                </div>
                <div className="metadata">
                    <span className="date">{prop.times}</span>
                </div>
                <div className="text">
                    {prop.blog}
                </div>
            </div>
    );
};

export default CommentDetail;