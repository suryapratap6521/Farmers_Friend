import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createMessage, deleteMessage, getAllMessage, allUserApi } from '../services/operations/CommunityApi';
import { toast } from "react-hot-toast";
import { Container, Typography, TextField, Grid, Paper, AppBar, Toolbar, Avatar, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import farmerImg from "../assets/farmer.jpg";
// import user1 from "../assets/user1.jpg";
// import user2 from "../assets/user2.jpg";
import Box from '@mui/material/Box';

// Styling the chat bubble
const ChatBubble = styled(Paper)({
  margin: '10px 0',
  padding: '10px',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '70%',
});

// Styling the sender's chat bubble
const SenderChatBubble = styled(ChatBubble)({
  backgroundColor: '#A8DDFD',
  alignSelf: 'flex-end',
});

// Styling the receiver's chat bubble
const ReceiverChatBubble = styled(ChatBubble)({
  backgroundColor: '#f8e896',
  alignSelf: 'flex-start',
});

// Styling the user list
const StyledUserList = styled('div')({
  padding: '10px',
  backgroundColor: '#f5f5f5',
  borderRadius: '10px',
  height: 'calc(100vh - 64px)',
  overflowY: 'auto',
});

// Styling individual user item
const StyledUserItem = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  marginBottom: '10px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
});

// Styling the chat container
const ChatContainer = styled(Grid)({
  padding: '20px',
  height: 'calc(100vh - 128px)',
  overflowY: 'auto',
});

const CommunityChat = () => {
  const [message, setMessage] = useState("");
  const [inputRef, setInputRef] = useState(null); // Reference to the input field
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { messages, allUsers } = useSelector((state) => state.community);
  const { user } = useSelector((state) => state.profile);
  const chatEndRef = useRef(null); // Reference to the end of the chat container

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getAllMessage(token, dispatch);
        await allUserApi(dispatch, token);
        // Scroll to the end of the chat when messages are loaded
        chatEndRef.current.scrollIntoView({ behavior: "smooth" });
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch data");
      }
    };
    fetchData();
  }, [dispatch, token]);

  const handleMessageSubmit = async (event) => {
    event.preventDefault();
    try {
      await createMessage(message, token, dispatch);
      setMessage("");
      // Scroll to the end of the chat after sending a message
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error creating message:", error);
      toast.error("Failed to send message");
    }
  }

  const handleDeleteMessage = async (messageId) => {
    try {
      await deleteMessage(messageId, token, dispatch);
      toast.success("Message deleted");
    } catch (error) {
      console.error("Error deleting message:", error);
      toast.error("Failed to delete message");
    }
  }

  useEffect(() => {
    // Focus on the input field when the component mounts or refreshes
    if (inputRef) {
      inputRef.focus();
    }
  }, [inputRef]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <Container maxWidth="lg">
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Avatar src={farmerImg} />
          <Typography variant="h6" sx={{ marginLeft: '10px', flexGrow: 1 }}>Farmer's Community</Typography>
          {allUsers.map((user) => (
            <Avatar key={user._id} src={user.image} sx={{ marginLeft: '-5px', border: '2px solid white', position: 'relative', zIndex: '1' }} />
          ))}
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* To push content below the app bar */}
      <Grid container style={{ marginTop: '64px' }}>
        <Grid item xs={12} md={8} component={ChatContainer}>
          {messages.map((msg) => (
            <div key={msg._id} ref={chatEndRef}>
              {user._id === msg.user._id ? (
                <SenderChatBubble>
                  <Typography variant="body1">{msg.message}</Typography>
                  <Typography variant="caption">{formatDate(msg.createdAt)}</Typography>
                  <IconButton onClick={() => handleDeleteMessage(msg._id)} style={{ color: 'red', cursor: 'pointer', position: 'absolute', top: '5px', right: '5px' }}>
                    <DeleteIcon />
                  </IconButton>
                </SenderChatBubble>
              ) : (
                <ReceiverChatBubble>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <Avatar alt="user avatar" src={msg.user.image} />
                    <Typography variant="subtitle1" style={{ marginLeft: '10px' }}>{msg.user.username}</Typography>
                  </div>
                  <Typography variant="body1">{msg.message}</Typography>
                  <Typography variant="caption">{formatDate(msg.createdAt)}</Typography>
                </ReceiverChatBubble>
              )}
            </div>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledUserList>
            <Typography variant="h6" gutterBottom>Farmers In Community</Typography>
            {allUsers.map((user) => (
              <StyledUserItem key={user._id}>
                <Avatar alt="user avatar" src={user.image} />
                <Typography variant="body1">{user.username}</Typography>
              </StyledUserItem>
            ))}
          </StyledUserList>
        </Grid>
      </Grid>
      <form onSubmit={handleMessageSubmit} style={{ position: 'fixed', bottom: '0', left: '0', width: '100%', padding: '10px', borderTop: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
        <TextField
          label="Type your message..."
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          inputRef={(ref) => setInputRef(ref)} // Assigning the input ref
          InputProps={{
            endAdornment: (
              <IconButton type="submit">
                <SendIcon />
              </IconButton>
            ),
          }}
        />
      </form>
    </Container>
  );
}

export default CommunityChat;
