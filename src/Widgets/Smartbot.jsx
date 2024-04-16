import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getData } from '../services/operations/generativeApi';
import { Container, TextField, Button, CircularProgress, Typography } from '@mui/material';
import Header from './header';
import Footer from './footer';
import logo from '../assets/logo1.png';

const Smartbot = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const { token } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const responseData = await getData(token, prompt);
            setResponse(responseData.data.text);
            setPrompt("");
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header />
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
                <Container maxWidth="md" className="bg-white rounded-lg shadow-lg p-8">
                    <Typography variant="h4" align="center" gutterBottom className="mb-6 text-3xl font-bold text-gray-800">
                        <img src={logo} alt='' className='absolute h-[250px] top-20 left-10' />
                        Ask Anything!!
                    </Typography>
                    <form onSubmit={handleSubmit} className="mb-6">
                        <TextField
                            label="Enter your prompt"
                            variant="outlined"
                            fullWidth
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            disabled={loading}
                            className="mb-4"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={loading}
                            className="w-full mt-4"
                        >
                            {loading ? <CircularProgress size={24} /> : 'Submit'}
                        </Button>
                    </form>
                    {response && (
                        <Typography variant="body1" gutterBottom className="bg-gray-100 p-4 rounded-md">
                            {response}
                        </Typography>
                    )}
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default Smartbot;
