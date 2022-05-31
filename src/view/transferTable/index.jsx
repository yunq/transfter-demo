
import React from 'react'

import { Space, Table, Tag, Button,Form, Input, } from "antd";

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

    //form
    const onFinish = (values) => {
      console.log("Success:", values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };



  return (
    <div className="">
      <div style={{width:'80%',margin:'30px auto 0px auto'}}>
        <Form
          name="basic"
          labelCol={{
            span: 4
          }}
          wrapperCol={{
            span: 20
          }}
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Receive address :"
            name="Receive address :"
            rules={[
              {
                required: true,
                message: "Please input your Receive address!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tokens address :"
            name="Tokens address :"
            rules={[
              {
                required: true,
                message: "Please input your Tokens address!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Volume :"
            name="Volume :"
            rules={[
              {
                required: true,
                message: "Please input your Volume!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 20
            }}
          >
            <Button type="primary" htmlType="Confirm">
              Confirm
            </Button>

            <Button htmlType="button" style={{marginLeft:'10px'}}>Operate</Button>
          </Form.Item>
        </Form>
      </div>
      <div style={{width:'80%',margin:'0px auto'}}>
      <Table columns={columns} dataSource={data} pagination={false} />

      </div>
      
    </div>
  )
}
export default TransferTablePage





