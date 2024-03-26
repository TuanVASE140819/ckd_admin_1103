/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Button,
  Select,
  Space,
  Typography,
  Modal,
  Divider,
} from "antd";
import { Input } from "antd";
import React, { useState, useRef } from "react";

import { Link } from "react-router-dom";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const { Title } = Typography;

const list = [
  {
    img: "https://skin-face-scan.vercel.app/static/media/product1.322d0291da915e35b43b.png",
    Title: "Kem dưỡng da",
    desc: "Kem dưỡng trắng da toàn thân",
    brand: "LACTOR",
  },
  {
    img: "https://skin-face-scan.vercel.app/static/media/product1.322d0291da915e35b43b.png",
    Title: "Kem dưỡng da",
    desc: "Kem dưỡng trắng da toàn thân",
    brand: "CKD",
  },
  {
    img: "https://skin-face-scan.vercel.app/static/media/product1.322d0291da915e35b43b.png",
    Title: "Kem dưỡng da",
    desc: "Kem dưỡng trắng da toàn thân",
    brand: "CKD",
  },
  {
    img: "https://skin-face-scan.vercel.app/static/media/product1.322d0291da915e35b43b.png",
    Title: "Kem dưỡng da",
    desc: "Kem dưỡng trắng da toàn thân",
    brand: "CKD",
  },
  {
    img: "https://skin-face-scan.vercel.app/static/media/product1.322d0291da915e35b43b.png",
    Title: "Kem dưỡng da",
    desc: "Kem dưỡng trắng da toàn thân",
    brand: "CKD",
  },
  {
    img: "https://skin-face-scan.vercel.app/static/media/product1.322d0291da915e35b43b.png",
    Title: "Kem dưỡng da",
    desc: "Kem dưỡng trắng da toàn thân",
    brand: "CKD",
  },
];

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
function Brand() {
  const [selectedBrand, setSelectedBrand] = useState("ALL");
  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };
  const filteredList =
    selectedBrand === "ALL"
      ? list
      : list.filter((d) => d.brand === selectedBrand);

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentAction, setCurrentAction] = useState(null); // new state
  const [currentProduct, setCurrentProduct] = useState(null); // new state

  const [items, setItems] = useState(["CKD", "LACTOR"]);
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || "new item"]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  const openModal = (action, product) => {
    setCurrentAction(action);
    setCurrentProduct(product);
    setModalVisible(true);
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <>
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card bordered={false} className="criclebox cardbody h-full">
            <div className="project-ant">
              <div>
                <Title level={5}>Sản phẩm giới thiệu</Title>{" "}
                <Button
                  type="primary"
                  className="ant-btn ant-btn-primary"
                  onClick={() => openModal("add", null)} // updated onClick
                >
                  Thêm sản phẩm
                </Button>
              </div>
              <div className="ant-filtertabs">
                <div className="antd-pro-pages-dashboard-analysis-style-salesExtra">
                  <Radio.Group onChange={handleBrandChange} defaultValue="ALL">
                    <Radio.Button value="CKD">CKD</Radio.Button>
                    <Radio.Button value="LACTOR">LACTOR</Radio.Button>
                    <Radio.Button value="ALL">ALL</Radio.Button>
                  </Radio.Group>
                </div>
              </div>
            </div>
            <div className="ant-list-box table-responsive">
              <table className="width-100">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Sản phẩm</th>
                    <th>Mô tả</th>
                    <th>Brand</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredList.length > 0 ? (
                    filteredList.map((d, index) => (
                      <tr key={index}>
                        <td>
                          <h6>
                            <span className="text-xs font-weight-bold">
                              {index + 1}
                            </span>
                          </h6>
                        </td>
                        <td>
                          <h6>
                            <img
                              src={d.img}
                              alt=""
                              className="avatar-sm mr-10"
                            />{" "}
                            {d.Title}
                          </h6>
                        </td>
                        <td>{d.desc}</td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            {d.brand}
                          </span>
                        </td>
                        <td>
                          <Button
                            type="primary"
                            className="ant-btn ant-btn-primary mr-5"
                            onClick={() => openModal("edit", d)} // updated onClick
                          >
                            Sửa
                          </Button>

                          <Button
                            type="primary"
                            danger
                            className="ant-btn ant-btn-primary"
                          >
                            Xóa
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5}>
                        <div className="ant-empty ant-empty-normal">
                          <div className="ant-empty-image">
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              className=""
                              data-icon="smile"
                              width="184px"
                              height="184px"
                              fill="currentColor"
                              aria-hidden="true"
                            ></svg>
                          </div>
                          <p className="ant-empty-description">
                            Không có sản phẩm nào
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="uploadfile shadow-none">
              {/* <Upload {...uploadProps}>
                <Button
                  type="dashed"
                  className="ant-full-box"
                  icon={<ToTopOutlined />}
                >
                  <span className="click">Click to Upload</span>
                </Button>
              </Upload> */}
            </div>
          </Card>
        </Col>
      </Row>
      <Modal
        title={currentAction === "add" ? "Thêm sản phẩm" : "Sửa sản phẩm"} // updated title
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        {/* Nội dung của Modal ở đây */}
        {currentAction === "add" ? (
          <div>
            <Title level={5}>Thêm sản phẩm</Title>
            <Input placeholder="Tên sản phẩm" className="mb-2" />
            <Input placeholder="Mô tả" className="mb-2" />
            <Select
              style={{
                width: 300,
              }}
              className="mb-2"
              placeholder="Chọn brand"
              dropdownRender={(menu) => (
                <>
                  {menu}
                  <Divider
                    style={{
                      margin: "8px 0",
                    }}
                  />
                  <Space
                    style={{
                      padding: "0 8px 4px",
                    }}
                  >
                    <Input
                      placeholder="Please enter item"
                      ref={inputRef}
                      value={name}
                      onChange={onNameChange}
                      onKeyDown={(e) => e.stopPropagation()}
                    />
                    <Button
                      type="text"
                      icon={<PlusOutlined />}
                      onClick={addItem}
                    >
                      Add item
                    </Button>
                  </Space>
                </>
              )}
              options={items.map((item) => ({
                label: item,
                value: item,
              }))}
            />

            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
            <div style={{ textAlign: "right" }}>
              <Button type="primary" className="ant-btn ant-btn-primary m-2">
                Thêm sản phẩm
              </Button>
              {/* nút xóa nội dung của Modal */}
            </div>
          </div>
        ) : (
          <div>
            <div>
              <Title level={5}>Thêm sản phẩm</Title>
              <Input placeholder="Tên sản phẩm" className="mb-2" />
              <Input placeholder="Mô tả" className="mb-2" />
              <Select
                style={{
                  width: 300,
                }}
                className="mb-2"
                placeholder="Chọn brand"
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    <Divider
                      style={{
                        margin: "8px 0",
                      }}
                    />
                    <Space
                      style={{
                        padding: "0 8px 4px",
                      }}
                    >
                      <Input
                        placeholder="Please enter item"
                        ref={inputRef}
                        value={name}
                        onChange={onNameChange}
                        onKeyDown={(e) => e.stopPropagation()}
                      />
                      <Button
                        type="text"
                        icon={<PlusOutlined />}
                        onClick={addItem}
                      >
                        Add item
                      </Button>
                    </Space>
                  </>
                )}
                options={items.map((item) => ({
                  label: item,
                  value: item,
                }))}
              />

              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                      width: "100%",
                    }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
              <div style={{ textAlign: "right" }}>
                <Button type="primary" className="ant-btn ant-btn-primary m-2">
                  Thêm sản phẩm
                </Button>
                {/* nút xóa nội dung của Modal */}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default Brand;
