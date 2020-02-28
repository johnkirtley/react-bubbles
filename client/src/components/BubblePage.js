import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
      .get('/api/colors')
      .then(res => {
        setTimeout(() => {
          setColorList(res.data)
        }, 2000)
      })
      .catch(err => console.log('Error getting colors', err))
  }, [colorList])

  if (colorList.length === 0) {
    return `Loading Colors...`
  }

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
