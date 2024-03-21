import { Row, Col, Form, Input } from "antd";

const Pagination = () => {
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
        <h3> Phân trang</h3>
        <Row gutter={16}>
          <Col span={12}>
            <h1>Số SP phân trang:</h1>
            <Form.Item>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <h1>Số SP liên quan phân trang:</h1>
            <Form.Item>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <h1>Số Tin phân trang:</h1>
            <Form.Item>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <h1>Số tin liên quan phân trang</h1>
            <Form.Item>
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Pagination;
