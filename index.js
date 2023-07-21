import bodyParser from "body-parser";
import dotEnv from "dotenv";
import express from "express";
import path from "path";
import {fileURLToPath} from 'url';
import test from "./server/routes/test.js";

const app = new express();
const port = 9090 || dotEnv.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  // .use(express.static(path.resolve(__dirname + '/../react-client/dist')))
  .use('/api', test)

app.listen(port, () => console.log('listening on port ', port));
