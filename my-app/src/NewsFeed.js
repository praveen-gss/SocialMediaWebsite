import React, { useState, useEffect } from 'react';

export default function NewsFeed() {
    return (
        <div>
            <label for="post">Post something</label>
            <textarea id="post" name="post"></textarea><br/><br/>
            <input type="file" id="myFile" name="filename" />
            <input type="submit" />
        </div>
    );
}