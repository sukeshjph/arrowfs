import { useEffect } from 'react';
import { tableFromIPC } from 'apache-arrow';


const Arrow = () => {
    // const [arrowTable, setArrowTable] = useState();

    useEffect(() => {
        const getArrowData = async () => {
            const table = await tableFromIPC(fetch('http://localhost:4000/getJSFromArrowTable'));
            console.table(table);
        }

        getArrowData();

    }, [])

    return <div>
        Hello
    </div>
}


export default Arrow;