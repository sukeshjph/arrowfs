// import start from './server';
import path from 'path';
import { tableFromIPC, tableFromArrays } from 'apache-arrow';
import { readFileSync } from 'fs';

// start();

const arrowFunction = () => {
    console.log(process.cwd())
    const arrow = readFileSync(path.resolve(__dirname, './data/simple.arrow'));
    const dataTable = tableFromIPC(arrow);
    console.table(dataTable.toArray());
}

const arrowFunc2 = () => {
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
}

//arrowFunction();
arrowFunc2();