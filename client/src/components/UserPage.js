// User Page React Component
import React from 'react';
import axios from 'axios';

const UserPage = () => {
    const [data, setData] = React.useState([]);

    // on component mount get private page
    React.useEffect(() => {
        axios.get('http://localhost:5000/api/v1/private', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }})
            .then(res => {
                console.log(res.data.data)
                setData(res.data.data);
                console.log("here i am")
            })
            .catch(err => {
                console.log(`Bearer ${localStorage.getItem('token')}`)
                console.log(err);
            }
        );
    }, []);

    return (
        <div className="user-page">
            <h1>User Page</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserPage;