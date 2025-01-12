"use client"
import '@ant-design/v5-patch-for-react-19';
import React,{useEffect, useState} from 'react';
import { Button, Input, Space } from 'antd';
import type { GetProps } from 'antd';
import RootLayout from "./layout";
import { setFlagsFromString } from 'v8';

const { Search } = Input;
type SearchProps = GetProps<typeof Input.Search>;
const Home = () => {
  const [queryResponse,setQueryResponse] = useState("");
  const fetchData = async (query_text:string) => {
        await fetch(`http://localhost:8000/query`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({"query_text":query_text})
      }).then(async res => {
            const response = await res.json();
          setQueryResponse(response.query_response);
    })}
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => fetchData(value);
  useEffect(()=>{},[queryResponse])
  return (
      <RootLayout>
        <Space style={{ width: '100%' }}>
          <Search placeholder="Combine input and button" allowClear onSearch={onSearch}/>
        </Space>
        {queryResponse}

      </RootLayout>
  );
}

export default Home;