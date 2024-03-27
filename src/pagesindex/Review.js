// tôi muốn dùng Drawer của antdesign

// Path: src/pagesindex/Review.js

import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Drawer, Button } from "antd";
import { Form, Input, Radio, Checkbox } from "antd";
import { Upload, message, Progress } from "antd";
import { Typography } from "antd";
import { Row, Col } from "antd";
import { Select } from "antd";
import { DatePicker } from "antd";
import { Cascader } from "antd";
import { Slider } from "antd";
import { Switch } from "antd";
import { TreeSelect } from "antd";

const { Title } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;

const Review = () => {
  const [review, setReview] = useState([]);
  const [currentRecord, setCurrentRecord] = useState(null); // Add this line
  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/f433ce2f-8de0-4322-a076-ae1d6804b66b"
      );
      const data = await res.json();
      setReview(data);
      console.log("Data Fetched: ", data);
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const [visible, setVisible] = useState(false);
  const [currentAction, setCurrentAction] = useState(null); // Add this line

  const showCreateDrawer = () => {
    setCurrentAction("create"); // Set the current action to 'create'
    setVisible(true);
  };

  const showEditDrawer = (record) => {
    setCurrentAction("edit"); // Set the current action to 'edit'
    setCurrentRecord(record); // Set the current record to the one being edited
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "no",
      key: "no",
      width: "5%",
    },
    {
      title: "ảnh đại diện",
      dataIndex: "avatar",
      key: "avatar",
      render: (text, record) => (
        <img
          src={record.avatar}
          alt="avatar"
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
          }}
        />
      ),
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Hành động",
      key: "action",
      render: (text, record) => (
        <span>
          <Button
            style={{
              background: "",
              color: "#f58a78",
              marginRight: 5,
            }}
            onClick={() => showEditDrawer(record)} // Pass the record to the function
          >
            Sửa
          </Button>
          <Button
            style={{
              background: "#f58a78",
              color: "white",
              marginRight: 5,
            }}
            onClick={() => {
              console.log("Delete: ", record);
            }}
          >
            Xóa
          </Button>
        </span>
      ),
    },
  ];

  return (
    <>
      {/* tạo bình luận */}
      <Button
        style={{
          marginBottom: 16,
          background: "#f58a78",
          color: "white",
        }}
        onClick={showCreateDrawer} // Use the new function here
      >
        Tạo bình luận
      </Button>

      <Table columns={columns} dataSource={review} />
      <Drawer
        title={currentAction === "create" ? "Create Comment" : "Edit Comment"} // Change the title based on the current action
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={600}
      >
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
          initialValues={currentRecord} // Set the initial values to the current record
        >
          <Form.Item label="" name="">
            <Title level={5}>Tên</Title>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>
          <Form.Item label="Avatar" name="avatar">
            <Upload
              name="avatar"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
            >
              <Button>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Date" name="date">
            <DatePicker />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default Review;
