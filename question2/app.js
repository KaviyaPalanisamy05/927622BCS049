const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ4MDY1MTgzLCJpYXQiOjE3NDgwNjQ4ODMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImE2ZjgzNDYwLTRjMjktNDQ4My1hNDhiLTFlMTdmMjc0NDdhNCIsInN1YiI6IjkyNzYyMmJjczA0OUBta2NlLmFjLmluIn0sImVtYWlsIjoiOTI3NjIyYmNzMDQ5QG1rY2UuYWMuaW4iLCJuYW1lIjoia2F2aXlhIHAiLCJyb2xsTm8iOiI5Mjc2MjJiY3MwNDkiLCJhY2Nlc3NDb2RlIjoid2hlUVV5IiwiY2xpZW50SUQiOiJhNmY4MzQ2MC00YzI5LTQ0ODMtYTQ4Yi0xZTE3ZjI3NDQ3YTQiLCJjbGllbnRTZWNyZXQiOiJqSEZOUEpqSEplRGFQamp2In0.-VJQmMFSr-AD9MyaJLC9DiDpMY_kUrj05aEsvWmd12s';
axios.get('http://20.244.56.144/evaluation-service/stocks', {
  headers: {
    Authorization: Bearer `${token}`
  }
});

app.post('http://20.244.56.144/evaluation-service/stocks', async (req, res) => {
    try{
        const response = await axios.post(baseURL, req.body);
        res.status(200).json(response.data);
    }
    catch(error){
        res.status(500).json({error : "Failed to add post"});
    }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});