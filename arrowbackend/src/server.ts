import express, { Request, Response } from "express";
import path from 'path';
import { tableFromIPC, tableFromArrays } from 'apache-arrow';
import { readFileSync } from 'fs';

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  return res.send("Hello, World!");
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

const getSimpleArrowTable = () => {
  const arrow = readFileSync(path.resolve(__dirname, './data/simple.arrow'));
  const dataTable = tableFromIPC(arrow);
  return dataTable;
}

const getArrowTableFromJS = () => {
  const LENGTH = 2000;

  const rainAmounts = Float32Array.from(
    { length: LENGTH },
    () => Number((Math.random() * 20).toFixed(1)));

  const rainDates = Array.from(
    { length: LENGTH },
    (_, i) => new Date(Date.now() - 1000 * 60 * 60 * 24 * i));

  const rainfall = tableFromArrays({
    precipitation: rainAmounts,
    date: rainDates
  });

  // console.table([...rainfall]);

  console.log(rainfall.get(0)!.toString());

  return rainfall;
}


app.get("/getArrowTable", (_, res) => {
  const arrowTable = getSimpleArrowTable();
  return res.send(arrowTable);
});

app.get("/getJSFromArrowTable", (_, res) => {
  const arrowTable = getArrowTableFromJS();
  return res.send(arrowTable);
});


const server = async (): Promise<void> => {
  try {
    app.listen(4000, () => {
      console.log("Server started on port 4000");
    });
  } catch (error) {
    console.error(error);
  }
};


export default server;