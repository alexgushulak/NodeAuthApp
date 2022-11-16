// User Page React Component
import React from 'react';
import axios from 'axios';

const PostsPage = () => {
    const [title, setTitle] = React.useState([]);
    const [body, setBody] = React.useState([]);
    const [titleList, setTitleList] = React.useState([]);
    const [bodyList, setBodyList] = React.useState([]);

    // function to get posts
    const getPosts = () => {
        axios.get('http://localhost:5000/api/v1/posts/getPosts', { 
            headers: {"content-type": "application/json"},
        })
        .then(res => {
            // map through the posts and set the title and body
            console.log(res.data)
            // for all res.data objects, set the title and body
            res.data.map((item, index) => {
                setTitleList(titleList => [...titleList, item.title]);
                setBodyList(bodyList => [...bodyList, item.body]);
            });

        })
        .catch(err => {
            console.log(err);
        }
    )};


    // on page load get posts
    React.useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="user-page">
            <h1>Posts Page</h1>
            <p>
                {titleList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </p>
            <p>
                {bodyList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </p>
        </div>
    );
}

export default PostsPage;