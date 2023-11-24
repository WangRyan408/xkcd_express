import express from "express";
import cors from "cors";
import * as url from 'url';
//import fetch from "node-fetch";

const app = express();

//Enable CORS
app.use(cors());


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//Add Static Files
app.use(express.static('../client'));
app.use(express.static('../client/public'));
app.use(express.static('../client/src'));



app.get('/', function(req, res, next){
    res.sendFile(__dirname + '../client/index.html');
})


app.get('/api', async function(req, res, next) {

const fetchData = await fetch('https://xkcd.com/info.0.json');
const response = await fetchData.json();

req.num = response.num;

res.json({'latest': req.num});

});

app.get('/api/comic', async function(req, res, next){

    const fetchData = await fetch('https://xkcd.com/info.0.json');
    const response = await fetchData.json();

    //req.num = response.num;

   // const latestComic = await fetch('http://localhost:3001/api');
    //const comicRes = await latestComic.json();
    
    req.test = response.num;

    const comicNumber = rng(req.test);

    const fetchedComic = await fetch(`https://xkcd.com/${comicNumber}/info.0.json`);
    const fetchRes = await fetchedComic.json();
    

    //console.log(comicRes.latest);

    res.json(fetchRes);

});


function rng(latest) {
    return Math.floor(Math.random() * latest);
}

const listener = app.listen(process.env.PORT || 3001, () => {
    console.log('Your app is listening on port ' + listener.address().port)
  })