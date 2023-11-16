import React from "react";
//CHILD OF POSTLIST

function Post(props) {
  console.log('post props', props)
  return (
    <div>
      <h5>Post component test</h5>
      <div>{props.message.post}</div>
    </div>
  );
}

export default Post;
