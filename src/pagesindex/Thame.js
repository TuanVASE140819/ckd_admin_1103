import React, { useState, useMemo } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Card,
  Row,
  Col,
  Modal,
  Upload,
  Button,
  notification,
  Input,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { message } from "antd";

const { Meta } = Card;

const gridStyle = {
  width: "25%",
  textAlign: "center",
};
const data = [
  {
    key: "1",
    Image:
      "https://firebasestorage.googleapis.com/v0/b/ckd--project.appspot.com/o/web%20VietNam-10.png?alt=media&token=19169340-01f5-4283-871f-0252368d5c7f",
    title: "Green",

    createAt: "2021-09-01",
  },
  {
    key: "2",
    Image:
      "https://skin-face-scan.vercel.app/static/media/aigirl.ca96aef0548a3226dfbe.png",
    title: "Orange",
    createAt: "2021-09-01",
  },
];
function Thame() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Thay đổi thông tin thành công!",
    });
  };
  const showModal = (item) => {
    setCurrentItem(item);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    openNotificationWithIcon("success");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const uploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", // replace with your upload URL
    headers: {
      authorization: "authorization-text",
    },
    style: { width: "200px", height: "200px" },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        console.log(`${info.file.name} file uploaded successfully`);
        // Update the image URL in the state
        setCurrentItem({ ...currentItem, Image: info.file.response.url });
      } else if (info.file.status === "error") {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
    listType: "picture-card",
    showUploadList: false,
    beforeUpload(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
      }
      return isJpgOrPng;
    },
  };

  return (
    <>
      {contextHolder}
      <Input
        placeholder="Tìm kiếm theo tiêu đề"
        style={{ marginBottom: "1rem" }}
        value={searchTerm}
        onChange={handleSearch}
      />
      <Row gutter={16}>
        {filteredData.map((item) => (
          <Col className="gutter-row" span={6}>
            <Card
              style={{
                width: 300,
                // height: 300,
              }}
              cover={
                <img
                  alt={item.title}
                  src={item.Image || "https://via.placeholder.com/300"}
                  style={{
                    padding: "1rem",
                    height: "300px",
                  }}
                />
              }
              actions={[]}
            >
              <Meta title={item.title} description={item.createAt} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Thame;
