import React from 'react';
import Button from './UI/button/Button';
import {useNavigate} from 'react-router-dom';

const PostItem = ({post, number, remove}) => {
    const navigate = useNavigate();
    return (
        <div className="post">
            <div className="post__content">
                <h2>{number} {post.id} {post.title}</h2>
                <div>{post.body}</div>
            </div>
            <div className="post__btns">
                <Button onClick={() => navigate(`/posts/${post.id}` )}>Открыть</Button>
                <Button onClick={() => remove(post)}>Удалить</Button>
            </div>
        </div>
    );
};

export default PostItem;
