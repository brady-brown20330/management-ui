import React, { useState } from 'react';

export const ManagementForm = () => {
  const [title, setTitle] = useState(undefined)
  // const [tileImage, setTileImage] = useState(undefined)
  // const [projectLink, setProjectLink] = useState({
  //   "title": undefined,
  //   "href": undefined
  // })

  const handleChange = (e) => {
    console.log("value: ", e.target.value)
    if (e.target.value.length < 1) setTitle(undefined)

    else 
    setTitle(e.target.value)
  };

  return (
    <form>
      <input type="text" onChange={handleChange} />
      <button>Big Dumb Button</button>
    </form>
  )
};