import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createMessage, deleteMessage, getAllMessage, allUserApi } from '../services/operations/CommunityApi';
import { setMessages } from '../slices/communitySlice';
import { toast } from "react-hot-toast";
import { Container, Typography, TextField, Button, Grid, Paper, Avatar, Box, Divider, Card, CardContent, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send'; // Import the SendIcon

const StyledUserList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#f5f5f5',
  borderRadius: '10px',
  height: 'calc(100vh - 64px)', // Adjust the height based on your header height
});

const StyledUserItem = styled(Card)({
  width: '100%',
  marginBottom: '10px',
});

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  alignItems: 'center',
});

const StyledUserAvatar = styled(Avatar)({
  marginRight: '10px',
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
    }
  }

  const handleDeleteMessage = async (messageId) => {
    try {
      await deleteMessage(messageId, token, dispatch);
      toast.success("Message deleted");
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  }

  useEffect(() => {
    // Focus on the input field when the component mounts or refreshes
    if (inputRef) {
      inputRef.focus();
    }
  }, [inputRef]);

  return (
    <Container maxWidth="lg">
      <Box position="fixed" top={0} left={0} right={0} padding="20px" backgroundColor="#fff" zIndex={1}>
        <Typography variant="h2"><b>Farmers community</b></Typography>
      </Box>
      <Grid container spacing={3} style={{ marginTop: '100px' }}>
        <Grid item xs={12} md={8}>
          <Paper style={{ padding: '20px', marginBottom: '20px', maxHeight: '60vh', overflowY: 'auto' }}>
            <Box mt={2} mb={4}>
              {messages.map((msg) => (
                <Paper key={msg._id} elevation={3} style={{ padding: '15px', marginBottom: '15px', backgroundColor: user._id === msg.user._id ? '#A8DDFD' : '#f8e896', borderRadius: '10px', marginLeft: user._id === msg.user._id ? '20px' : '0', marginRight: user._id !== msg.user._id ? '20px' : '0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <Avatar alt="user avatar" src={msg.user.image} />
                    <Typography variant="subtitle1" style={{ marginLeft: '10px' }}>{msg.user.username}</Typography>
                  </div>
                  <Typography variant="body1" style={{ margin: '0' }}>{msg.message}</Typography>
                  {user._id === msg.user._id && (
                    <DeleteIcon onClick={() => handleDeleteMessage(msg._id)} style={{ color: 'red', cursor: 'pointer' }}/>
                  )}
                </Paper>
              ))}
              {/* Empty div to be used as a reference for scrolling to the end of the chat */}
              <div ref={chatEndRef}></div>
            </Box>
          </Paper>
          <Box style={{ paddingBottom: '70px' }}>
            <form onSubmit={handleMessageSubmit}>
              <TextField
                label="Type your message..."
                variant="outlined"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ marginBottom: '10px' }}
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
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledUserList>
            <Typography variant="h6" gutterBottom>Farmers In Community</Typography>
            {allUsers.map((user) => (
              <StyledUserItem key={user._id}>
                <StyledCardContent>
                  <StyledUserAvatar alt="user avatar" src={user.image} />
                  <Typography variant="body1">{user.username}</Typography>
                </StyledCardContent>
              </StyledUserItem>
            ))}
          </StyledUserList>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CommunityChat;
