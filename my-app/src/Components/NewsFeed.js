import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar'

export default function NewsFeed() {
    const articleStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    var files = ["https://picsum.photos/614/614","https://picsum.photos/614/650","https://picsum.photos/614/655","https://picsum.photos/614/660","https://picsum.photos/614/665"]
    var jsxFiles = files.map((file) => {
        return (
        <div>
            <br></br>
            <div class="card" style={{width: '40rem'}}>
                <img src={file} class="card-img-top" />
                <div class="card-body">
                    <p class="card-title"><strong>UserName</strong></p>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-primary">Like</button>
                </div>
            </div>
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
            <NavBar />
            <div style={articleStyle}>
            <br></br>
                <div class="card" style={{width: '40rem'}}>
                    <div class="input-group">
                        <span class="input-group-text">Write Something...</span><br></br><br></br>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <div class="input-group">
                        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={onChangeHandler}/>
                        <button class="btn btn-outline-primary" type="button" id="inputGroupFileAddon04" onClick={onClickHandler}>Upload</button>
                    </div>
                </div>
                {jsxFiles}
            </div>
        </div>
    );
}