import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Login = ({ onLogin }) => {
  const [form] = Form.useForm();

  const handleLogin = () => {
    form
      .validateFields()
      .then((values) => {
        // Thực hiện kiểm tra thông tin đăng nhập ở đây (ví dụ: gọi API)
        // Nếu thông tin hợp lệ, gọi hàm `onLogin` với thông tin người dùng
        onLogin(values);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          zIndex: "-1",
          objectFit: "cover",
          filter: "blur(10px)",
          WebkitFilter: "blur(10px)",
          backdropFilter: "brightness(0.5) blur(5px)",
        }}
      >
        <source
          src="https://www.shutterstock.com/shutterstock/videos/1014122444/preview/stock-footage-alien-spaceship-screen-universal-hud-ui-graphic-elements-sci-futuristic-user-interface-digital.webm"
          type="video/mp4"
        />
      </video>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            // background: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(30px)",
          }}
        >
          <Title
            level={2}
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "white",
            }}
          >
            ĐĂNG NHẬP
          </Title>
          <Form form={form} onFinish={handleLogin}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Vui lòng nhập tên đăng nhập!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Tên đăng nhập" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Mật khẩu"
              />
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
