import React, {useState } from 'react';
import { Comment} from 'semantic-ui-react';
import EscapeOutside from "react-escape-outside";
import SubReply from './SubReply';
import { useContext } from 'react';
import SubComment from './SubComment';
import { Context } from '../../context/Context';
const PF = "http://localhost:5000/images/";


export default function Content({post},props) {
  const [reply,setReply]=useState(false);
  const {user}=useContext(Context);

  function handleClick(){
    setReply(true)
  }
  return (
    <Comment>
    <Comment.Avatar src={PF+post?.profilePic} />
    <Comment.Content>
      <Comment.Author as='a'>{post?.username}</Comment.Author>
      <Comment.Metadata>
        <div>{new Date(post?.createdAt).toDateString()}</div>
      </Comment.Metadata>
      <Comment.Text>{post?.desc}</Comment.Text>
      <Comment.Actions>
      <EscapeOutside onEscapeOutside={()=>{setReply(false);}}>
        <Comment.Action onClick={handleClick}>Reply</Comment.Action> 
        {reply ? <SubReply postId={post._id}/> : null}
        </EscapeOutside>
      </Comment.Actions>
    </Comment.Content>
    <Comment.Group>
    {post.subComment?.map((c)=>(
      <SubComment array={c} />
    ))}
    </Comment.Group>
  </Comment>
  )
}
