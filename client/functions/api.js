import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import * as url from 'url';
//import fetch from "node-fetch";

const api = express();

const router = Router();

//Enable CORS
api.use(cors());


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//Add Static Files
router.use(express.static('../client'));
router.use(express.static('../client/public'));
router.use(express.static('../client/src'));



router.get('/', function(req, res, next){
    res.sendFile(__dirname + '../client/index.html');
})

router.get('/api/comic', async function(req, res, next){

    const fetchData = await fetch('https://xkcd.com/info.0.json');
    const response = await fetchData.json();

    req.test = response.num;

    const comicNumber = rng(req.test);

    const fetchedComic = await fetch(`https://xkcd.com/${comicNumber}/info.0.json`);
    const fetchRes = await fetchedComic.json();
    
    res.json(fetchRes);

});


function rng(latest) {
    return Math.floor(Math.random() * latest);
}

api.use("/.netlify/functions/api", router);


  export const handler = serverless(api);