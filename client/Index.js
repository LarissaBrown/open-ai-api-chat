import dotenv from 'dotenv'
import express from 'express'

import { Configuration, OpenAIApi } from 'openai'
import cors from 'cors'
dotenv.config()
const app = express();
const port = 3080;

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())

app.post('/', async (req, res) => {
    const { message } = req.body;
    console.log("message", message);
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${message}`,
        temperature: 0.5,
        top_p: 1,
        frequency_penalty:0,
        presence_penalty: 0,
        max_tokens: 1024
    });

    res.json({
        // data: response.data,
        message: response.data.choices[0].text,
    })

})
const token = process.env.OPENAI_API_KEY;
const configuration = new Configuration({apiKey: token});
const openai = new OpenAIApi(configuration);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`)
})