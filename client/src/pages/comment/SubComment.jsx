import React, {useState } from 'react';
import { Comment} from 'semantic-ui-react';
import EscapeOutside from "react-escape-outside";
import SubReply from './SubReply';
// import { useContext } from 'react';
// import { Context } from '../../context/Context';
const PF = "http://localhost:5000/images/";


export default function SubComment({array}) {
  const [reply,setReply]=useState(false);
  // const {user}=useContext(Context);
  function handleClick(){
    setReply(true)
  }
  return (
    <Comment >
    <Comment.Avatar src={PF+array?.profilePic} />
    <Comment.Content>
      <Comment.Author as='a'>{array?.username}</Comment.Author>
      <Comment.Metadata><div>{array?.date}</div></Comment.Metadata>
      <Comment.Text>{array?.desc}</Comment.Text>
      <Comment.Actions>
      <EscapeOutside onEscapeOutside={()=>{setReply(false); }}>
        <Comment.Action onClick={handleClick}>Reply</Comment.Action> 
        {reply ? <SubReply postId={array.parentid} /> : null}
        </EscapeOutside>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
  )
}