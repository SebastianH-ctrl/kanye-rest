// Importera nödvändiga moduler
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const FakeYou = require('fakeyou.js');
const { default: axios } = require('axios');

// Gör en instans av express
const app = express();
app.use(cors());
app.use('/output', express.static('tts_inference_output'));

const port = process.env.PORT || 3000;

// Här gör vi en ny klient till tjänsten (loggar in på api)
const fy = new FakeYou.Client({
    usernameOrEmail: '',
    password: ''
});

// Hämta random kanye quote
async function fetchQuote() {
    const quote = await axios.get('https://api.kanye.rest');
    return quote.data.quote;
}

// Ändpunkt som returnerar objekt med quote och URL till en ljudfil som läser quote
app.get('/tts', async (req, res) => {
    const voiceModel = 'Kanye West (V4)';
    const text = await fetchQuote();

    try {
        await fy.start();

        const model = fy.searchModel(voiceModel).first();
        if (model) {
            const ttsResult = await model.request(text);

            // Här konstrukterar vi den URL som skickas
            const audioUrl = `https://storage.googleapis.com/vocodes-public${ttsResult.audioPath}`;

            console.log(ttsResult);
            res.status(200).send({ quote: text, audioPath: audioUrl });
        } else {
            res.status(404).send({ error: 'Voice model not found' });
        }
    } catch (error) {
        console.error('Error details:', error); 
        res.status(500).send({ error: 'Error processing TTS request' });
    }
});


// Starta servern
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




