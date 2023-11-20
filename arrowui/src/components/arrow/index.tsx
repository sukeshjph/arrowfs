import { useEffect, useState } from 'react';
import * as Arrow from 'apache-arrow';


const ArrowFile = () => {
    // const [arrowTable, setArrowTable] = useState<Arrow.Table | null>(null);

    const data = {
        table: null as any
    };

    useEffect(() => {
        const getArrowData = async () => {
            const response = await fetch('http://localhost:4000/getJSFromArrowTable');
            const reader = await Arrow.Table.readAll(response);

            // await reader.open();
            // data.table = new Arrow.Table(reader.schema);

            // for await (const recordBatch of reader) {
            //     data.table = [...data.table, recordBatch];
            // }

            console.table(reader);
        }

        getArrowData();

    }, [])

    return <div>
        Hello
    </div>
}


export default ArrowFile;