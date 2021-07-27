import React from 'react';

const News = (props) => {
 return (
   <>
  {props.isOpen?props.children:null}
   </>
 )
}

export default News;