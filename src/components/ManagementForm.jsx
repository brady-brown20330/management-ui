import React, { useState } from 'react';
import contentstackClient from '../API/Requests'

export const ManagementForm = () => {
  const [title, setTitle] = useState(undefined)
  // const [tileImage, setTileImage] = useState(undefined)
  const [projectTitle, setProjectTitle] = useState(undefined)
  const [projectLink, setProjectLink] = useState(undefined)

  const handleTitleChange = (e) => {
    if (e.target.value.length < 1) setTitle(undefined)
    else 
    setTitle(e.target.value)
  };

  const handleProjectTitleChange = (e) => {
    // if (e.target.value.length < 1) setProjectLink.title(undefined)
    // else 
    setProjectTitle(e.target.value)
  };

  const handleLinkChange = (e) => {
    // if (e.target.value.length < 1) setProjectLink.href(undefined)
    // else 
    setProjectLink(e.target.value)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(`here is what were sending: ${title}, ${projectTitle}, ${projectLink}`)
    let entry = {
        "title": "Star Wars II",
            "tile_image": "blt8a1c281b279ca2da",
        "project_link": {
                "title":"Star Wars II",
                "href": "https://www.starwars.com/"
            }
    }
      loginToContentstack.then(
        contentstackClient.createEntry(entry)
      )
      
    
    

  }

  const loginToContentstack = new Promise((resolve, reject) => { contentstackClient.login() })

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <input type="text" onChange={handleTitleChange} placeholder="Title"/>
      <br />
      <input type="text" onChange={handleProjectTitleChange} placeholder="Project Link"/>
      <input type="text" onChange={handleLinkChange} placeholder="Link"/>
      <button>Big Dumb Button</button>
    </form>
  )
};