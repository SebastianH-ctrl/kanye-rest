// Import the necessary modules
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const FakeYou = require('fakeyou.js');
const { default: axios } = require('axios');

// Create an instance of the Express app
const app = express();
app.use(cors());
app.use('/output', express.static('tts_inference_output'));

const port = process.env.PORT || 3000;

// Initialize the FakeYou client
const fy = new FakeYou.Client({
    usernameOrEmail: '',
    password: ''
});

async function fetchQuote() {
    const quote = await axios.get('https://api.kanye.rest');
    return quote.data.quote;
}

// Endpoint to handle TTS requests using GET method and query parameters
app.get('/tts', async (req, res) => {
    const voiceModel = 'Kanye West (V4)';
    const text = await fetchQuote();

    try {
        await fy.start();

        const model = fy.searchModel(voiceModel).first();
        if (model) {
            const ttsResult = await model.request(text);

            // Construct the audio URL
            const audioUrl = `https://storage.googleapis.com/vocodes-public${ttsResult.audioPath}`;

            console.log(ttsResult);
            res.status(200).send({ quote: text, audioPath: audioUrl });
        } else {
            res.status(404).send({ error: 'Voice model not found' });
        }
    } catch (error) {
        console.error('Error details:', error); // Log the error details
        res.status(500).send({ error: 'Error processing TTS request' });
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




