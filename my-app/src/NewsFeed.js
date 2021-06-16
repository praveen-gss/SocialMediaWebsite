import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NewsFeed() {
    const [selectedFile, setSelectedFile] = useState(null);

    var onChangeHandler = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    var onClickHandler = () => {
        const data = new FormData()
        data.append('file', selectedFile)
        axios.post("http://localhost:3000/upload", data, { 
            // receive two    parameter endpoint url ,form data
        })
        .then(res => { // then print response status
            console.log(res.statusText)
        })
    };

    return (
        <div>
            <label for="post">Post something</label>
            <textarea id="post" name="post"></textarea><br/><br/>
            <input type="file" name="file" onChange={onChangeHandler}/>
            <input type="submit" onClick={onClickHandler}/>
        </div>
    );
}