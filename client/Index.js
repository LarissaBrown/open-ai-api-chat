import dotenv from 'dotenv'
import express from 'express'
import pkg from 'body-parser';
const { json } = pkg;

import { Configuration, OpenAIApi } from 'openai'
import cors from 'cors'
dotenv.config()
const app = new express();

app.use(cors());
app.use(json());

app.get('/', (req, res) => {

})
const token = process.env.OPENAI_KEY;
const configuration = new Configuration({apiKey: token});
const openai = new OpenAIApi(configuration);


app.post('/', (req, res) => {
    const response = openai.createCompletion({
        model: 'text-davinci-003',
        prompt: req.body.prompt,
        temperature: 0,
        top_p: 1,
        frequency_penalty:0,
        presence_penalty: 0,
        max_tokens: 1024
    });
    response.then((data) => {
        res.send({message: data.data.choices[0].text})
    })
});

app.listen(3080, () => {
    console.log('server is running')
})
