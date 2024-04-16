import React, { useState } from 'react';
import { useSelector } from 'react-redux'; // Assuming you're using Redux for state management
import { getData } from '../services/operations/generativeApi';
import { Container, TextField, Button, CircularProgress, Typography } from '@mui/material';

const Smartbot = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const { token } = useSelector((state) => state.auth); // Assuming you have authentication state in Redux

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setLoading(true); // Set loading state while fetching data

        try {
            const responseData = await getData(token, prompt);
            setResponse(responseData.data.text);
            setPrompt("");
        } catch (error) {
            console.error("Error:", error);
            // Handle error if API call fails
        } finally {
            setLoading(false); // Reset loading state after fetching data
        }
    };

    return (
        <Container maxWidth="sm" sx={{ marginTop: '50px' }}>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <TextField
                    label="Enter your prompt"
                    variant="outlined"
                    fullWidth
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    disabled={loading} // Disable input field when loading
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading} // Disable button when loading
                    style={{ marginTop: '10px' }}
                >
                    {loading ? <CircularProgress size={24} /> : 'Submit'}
                </Button>
            </form>
            <div>
                {/* Display the response from the API */}
                {response && (
                    <Typography variant="body1" gutterBottom>
                        {response}
                    </Typography>
                )}
            </div>
        </Container>
    );
};

export default Smartbot;
