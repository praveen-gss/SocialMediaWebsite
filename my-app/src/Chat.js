import React from 'react';

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

    return (
        <div>
            <div class="shadow p-3 mb-5 bg-white rounded">
                <nav style={{height:"54px"}} class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/NewsFeed">
                            <img src="/logo192.png" alt="" width="30" height="30" class="d-inline-block align-text-top" />
                            SocialMediaApp
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/NewsFeed">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/Chat">Chat</a>
                                </li>
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profile
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/">Signout</a></li>
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
            <div style={{marginLeft: "405px"}} class="container">
                <div class="row">
                    <div class="col-4">
                        <div style={{border:"1px solid rgba(39,41,43,0.1)", justifyContent:"center"}} class="row">UserName</div>
                        <div style={{border:"1px solid rgba(39,41,43,0.1)", justifyContent:"center"}} class="row">ChatList</div>
                    </div>
                    <div style={{border:"1px solid rgba(39,41,43,0.1)", justifyContent:"center"}} class="col-6">
                        Chat Space
                    </div>
                </div>
            </div>
        </div>
    );
}