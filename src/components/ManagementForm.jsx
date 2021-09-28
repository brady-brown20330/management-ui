import React, { useState } from 'react';

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

  const handleSubmit = (event) => {
    alert(`here is what were sending: ${title}, ${projectTitle}, ${projectLink}`)
    event.preventDefault();
  }

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