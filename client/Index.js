import { Configuration, OpenAIApi } from "openai";
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const configuration = new Configuration({
    organization: "org-XVof9YY6mHN5rnZO0ANlz2bH",
    apiKey: "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"
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

//create a simple express api that calls the function above

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080

app.post ("/", async(req, res)=>{
    const {message } = req.body;
    res.send('Hello World')
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5, });
console.log()
res.json({
    message: response.data.choices[0].text,
    data: message,
})
})

app.listen(port, () => {
    console.log ('Example app listening at http://localhost:${port}')
})
