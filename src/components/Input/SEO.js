import { useState } from "react";
import { Row, Col, Form, Input, Switch } from "antd";

const SEO = () => {
  const [disabled, setDisabled] = useState(true);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

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
        style={{
          maxWidth: 600,
        }}
      >
        <h3 className="title">Tạo SEO</h3>
        <Switch checked={!disabled} onChange={toggleDisabled} />
        <Row gutter={16}>
          <Col span={12}>
            <h1>Số SP phân trang:</h1>
            <Form.Item>
              <Input disabled={disabled} value={2} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <h1>Số SP liên quan phân trang:</h1>
            <Form.Item>
              <Input disabled={disabled} value={2} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <h1>Số Tin phân trang:</h1>
            <Form.Item>
              <Input disabled={disabled} value={2} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <h1>Số tin liên quan phân trang</h1>
            <Form.Item>
              <Input disabled={disabled} value={2} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default SEO;
