import React, { useEffect, useState } from 'react'
import './App.css'


function App() {

const [gitHubName, setGitHubName] = useState('')           
const [githubUrl, setGitHubUrl] = useState('')          


useEffect(() => {
    fetch('https://api.github.com/users/learningToCode1234')
    .then(res => res.json())
    .then(data => {
        setGitHubName(data.name)
        setGitHubUrl(data.html_url)
    })
}, [])

return (
    <div className="App">
        <h1>Github Profile Info:</h1>
        <h2>{gitHubName}</h2>
        <a href={githubUrl}>
          <button  >Link to github </button>
        </a>
    </div>
);
}

export default App
    