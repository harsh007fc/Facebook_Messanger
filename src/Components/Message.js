import React,{forwardRef} from 'react'
import '../Css/Message.css'
import {Card,CardContent,Typography} from '@material-ui/core';
const Message = forwardRef(({message,username},ref) => {
  let isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
        <Card className = {isUser ? 'message__userCard' : 'message__guestCard' }>
          <CardContent>
            <Typography color='white' variant='h5' component='h2'>
            { !isUser && `${message.username || 'Unknown'}:` }  {message.message}
            </Typography>
          </CardContent>
        </Card>
           
        </div>
    )
})
export default Message
