// tôi muốn dùng Drawer của antdesign

// Path: src/pagesindex/Review.js
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Drawer, Button } from "antd";
import { Input, Radio, Checkbox } from "antd";
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
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Bạn chưa nhập tên!"),
  description: Yup.string().required("Bạn chưa nhập mô tả!"),
  avatar: Yup.string().required("Bạn chưa nhập ảnh đại diện!"),
});
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

  const postData = async (data) => {
    const dataWithSequenceAndTime = {
      ...data,
      no: review.length + 1, // Add a sequence number
      createdAt: new Date().toISOString(), // Add the current time
    };

    try {
      const response = await fetch(
        "https://sheet.best/api/sheets/f433ce2f-8de0-4322-a076-ae1d6804b66b",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataWithSequenceAndTime),
        }
      );

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const postData = await response.json();
      console.log("Data Posted: ", postData);

      message.success("Thêm thành công"); // Display success message
      getData(); // Update the review list
    } catch (error) {
      console.log("Failed to post data: ", error);
      message.error("Thêm thất bại"); // Display failure message
    }
  };
  const [addData, setAddData] = useState({
    name: "",
    description: "",
    avatar: "",
    date: new Date().toString(),
  });
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
        title={
          currentAction === "create" ? "Thêm Bình Luận" : "Chỉnh Sửa Bình Luận"
        } // Change the title based on the current action
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={600}
      >
        <Formik
          initialValues={{
            name: currentRecord?.name || "",
            description: currentRecord?.description || "",
            avatar: currentRecord?.avatar || "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            postData(values);
            setSubmitting(false);
            onClose();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div style={{ marginBottom: 16 }}>
                <label htmlFor="name">Tên</label>
                <Field id="name" name="name" placeholder="Tên" as={Input} />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label htmlFor="description">Bình luận</label>
                <Field
                  id="description"
                  name="description"
                  placeholder="Bình luận"
                  as={Input}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label htmlFor="avatar">Anh đại diện (URL ảnh) </label>
                <Field
                  id="avatar"
                  name="avatar"
                  placeholder=" Ảnh đại diện"
                  as={Input}
                />
                <ErrorMessage
                  name="avatar"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <Button
                type="primary"
                htmlType="submit"
                disabled={isSubmitting}
                style={{ marginRight: 16 }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </Form>
          )}
        </Formik>
      </Drawer>
    </>
  );
};

export default Review;
