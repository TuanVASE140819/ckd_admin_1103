// tôi muốn dùng Drawer của antdesign

// Path: src/pagesindex/Review.js

import React, { useState } from "react";
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
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      width: "5%",
    },
    {
      title: "Tiêu đề",
      dataIndex: "function",
      key: "function",
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
            onClick={showDrawer}
          >
            Sửa
          </Button>
          <Button
            style={{
              background: "#f58a78",
              color: "white",
              marginRight: 5,
            }}
            onClick={showDrawer}
          >
            Xóa
          </Button>
        </span>
      ),
    },
  ];

  const data = [
    //    review data
    {
      key: "1",
      function:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    },
    {
      key: "2",
      function:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    },
    {
      key: "3",
      function:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    },
    {
      key: "4",
      function:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    },
    {
      key: "5",
      function:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    },
    {
      key: "6",
      function:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    },
    {
      key: "7",
      function:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    },
    {
      key: "8",
      function:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
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
        onClick={showDrawer}
      >
        Tạo bình luận
      </Button>

      <Table columns={columns} dataSource={data} />
      <Drawer
        title="Chi tiết"
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
        >
          <Row gutter={16}>
            <Col span={12}>
              <h1>Tiêu đề:</h1>
              <Form.Item>
                <Input value="Lorem ipsum dolor sit amet" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <h1>Mô tả:</h1>
              <Form.Item>
                <Input value="Lorem ipsum dolor sit amet" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <h1>Ảnh:</h1>
              <Form.Item>
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button>Click to upload</Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={12}>
              <h1>Trạng thái:</h1>
              <Form.Item>
                <Switch defaultChecked />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default Review;
