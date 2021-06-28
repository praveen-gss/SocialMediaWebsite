import React from 'react';
import NavBar from './NavBar'

export default function Chat() {
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
            <NavBar />
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