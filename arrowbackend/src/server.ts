import express, { Request, Response } from "express";
import { tableFromIPC } from 'apache-arrow';
import { readFileSync } from 'fs';

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  return res.send("Hello, World!");
});


const arrowFunction = () => {
  const arrow = readFileSync('chicago-crimes-2017.arrow');
  const dataTable = tableFromIPC(arrow);
  console.table(dataTable.toArray());
}

const start = async (): Promise<void> => {

  arrowFunction();


  try {
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error(error);
  }
};


export default start;