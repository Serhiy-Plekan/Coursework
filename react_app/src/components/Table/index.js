import { Table } from 'antd';
import React from 'react';
import 'antd/dist/antd.css'; 

const DataTable = ({serverData}) => {
  const dataToShow = {};

  for(let key in serverData) {
    if(typeof serverData[key] === 'object') dataToShow[key] = serverData[key]
  }

  const columns = Object.keys(dataToShow).map(key => ({
    title: key,
    dataIndex: key
  }));
  const data = serverData.data.map((item, index) => ({
    key: index,
    ...Object.keys(dataToShow).reduce((acc, key) => {
      acc[key] = serverData[key][index]
      return acc;
    }, {})
  }))

  return (
    <Table columns={columns} dataSource={data} size="middle" pagination={false} />
  );
};

export default DataTable;