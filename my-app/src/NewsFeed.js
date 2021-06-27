import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NewsFeed() {
    const styles = {
        width: 500,
        height: 400
    }
    const articleStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    var files = ["/User/1.png","/User/2.png","/User/3.png","/User/4.png","/User/5.png"]
    var jsxFiles = files.map((file) => {
        return (
        <div>
            <br></br>
            <div class="card" style={{width: '40rem'}}>
                <img src={process.env.PUBLIC_URL+file} class="card-img-top" />
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
            <div class="shadow p-3 mb-5 bg-white rounded">
                <nav style={{height:"54px"}} class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src="/logo192.png" alt="" width="30" height="30" class="d-inline-block align-text-top" />
                            SocialMediaApp
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
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