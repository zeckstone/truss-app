import { useEffect, useState } from 'react';
import CustomTable from '../customTable/customTable';
import LoadingIcon from '../loadingIcon/loadingIcon';
import MessagePrompt from '../messagePrompt/messagePrompt';
import { fetchData } from '../../utils/utils';

const DataTable = () => {
    const [data, setData] = useState({ tableData: '', error: '' });
    const { tableData, error } = data;

    useEffect(() => {
       fetchData(setData);
    }, []);

    if (error) return <MessagePrompt message={error}/>
    return tableData ? <CustomTable data={tableData}/> : <LoadingIcon />;
}

export default DataTable;