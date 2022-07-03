import React, {useState} from 'react';
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";

const PostForm = ({create}) => {

    const [post, setPost] = useState({
        id: "",
        title: "",
        descr: ""
      });
    
    const addNewPost = (e) => {
        e.preventDefault();
        post.id = Date.now();
        create(post);
        setPost({title: '', descr: ''});
    };

    return (
        <form>
            <Input
                value={post.title}
                type="text" 
                placeholder="Название"
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <Input 
                value={post.descr}
                type="text" 
                placeholder="Описание"
                onChange={e => setPost({...post, descr: e.target.value})}
            />
            <Button onClick={addNewPost}>Создать</Button>
        </form>
    );
};

export default PostForm;
