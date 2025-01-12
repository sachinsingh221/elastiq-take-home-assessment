"use client"
import { useEffect,useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import RootLayout from "../layout";
interface DataType {
  key: string;
  query_text: string;
  query_response: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Query',
    dataIndex: 'query_text',
    key: 'query_text',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Response',
    dataIndex: 'query_response',
    key: 'query_response',
    render: (text) => <a>{text}</a>,
  },
];


const SearchHistory = () => {
    const [searchHistory,setSearchHistory] = useState([]);
    const fetchData = async () => {
        await fetch(`http://localhost:8000/query_list`).then(async res => {
            const response = await res.json()
            setSearchHistory(response);
    })
}

    useEffect(()=>{
        fetchData()    
    },[]);
    return (
        <RootLayout>
            <Space/>
        <Table<DataType> columns={columns} dataSource={searchHistory}/>
            </RootLayout>
    );
};

export default SearchHistory;