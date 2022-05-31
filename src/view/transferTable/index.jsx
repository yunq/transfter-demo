
import React from 'react'

import { Space, Table, Tag, Button } from "antd";

const TransferTablePage = () => {
  
    const columns = [
        {
          title: "index",
          dataIndex: "key",
          key: "key"
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address"
        },
        {
          title: "volume",
          key: "tags",
          dataIndex: "tags"
        },
        {
          title: "state",
          dataIndex: "name",
          key: "name"
        },
        {
          title: "Action",
          dataIndex: "Action",
      
          render: (_, record) => (
            <Space size="middle">
              <Button type="primary">Confirm </Button>
              <Button>Operate</Button>
            </Space>
          )
        }
      ];
      const data = [
        {
          key: "01",
          name: "start",
          age: 32,
          address: "0x939Dd9E433552e325D78C33a16EF4cD8004D2F9C",
          tags: "0.014ETH"
        },
        {
          key: "02",
          name: "going on",
          age: 42,
          address: "0x939Dd9E433552e325D78C33a16EF4cD8004D2F9C",
          tags: "0.014ETH"
        },
        {
          key: "03",
          name: "end",
          age: 32,
          address: "0x939Dd9E433552e325D78C33a16EF4cD8004D2F9C",
          tags: "0.014ETH"
        }
      ];

  return (
    <div className="">
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
export default TransferTablePage





