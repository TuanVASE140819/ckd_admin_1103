import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const InputForm = () => {
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        // disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Tiêu đề">
          <Input />
        </Form.Item>
        <Form.Item label="Ngôn ngữ">
          <Radio.Group>
            <Radio value="apple"> Tiếng Việt </Radio>
            <Radio value="pear"> Tiếng Anh </Radio>
            <Radio value="pear"> Tiếng Hàn </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Địa chỉ">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Hotline">
          <Input />
        </Form.Item>
        <Form.Item label="GGM">
          <Input />
        </Form.Item>
        <Form.Item label="Copyright">
          <Input />
        </Form.Item>
        <Form.Item label="GGM nhúng">
          <Input />
        </Form.Item>
        <Form.Item label="Head JS">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Body JS">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Analytics">
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </>
  );
};
export default InputForm;
