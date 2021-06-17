import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NewsFeed() {
    const styles = {
        width: 250,
        height: 200
    }
    var files = ["/User/1.png","/User/2.png","/User/3.png","/User/4.png","/User/5.png"]
    var jsxFiles = files.map((file) => {
        return (
        <div>
            <img style={styles} src={process.env.PUBLIC_URL+file}/>
            <button>Like</button>
        </div>
        )
    });

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
            <div>
                <label for="post">Post something</label>
                <textarea id="post" name="post"></textarea><br/><br/>
                <input type="file" name="file" onChange={onChangeHandler}/>
                <input type="submit" onClick={onClickHandler}/>
            </div>
            {jsxFiles}
        </div>
    );
}