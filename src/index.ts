import express from "express"

const app = express();
const port = 5000;
app.get('/', (request, response) =>{
    response.send('Hello world!9999');
});
app.listen(port, () => console.log(`Running on port ${port}`));