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

import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

const { Title } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;

const Data = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Dữ liệu");

    worksheet.columns = [
      { header: "STT", key: "key", width: 10 },
      { header: "Ảnh", key: "image", width: 20 },
      { header: "Điểm đánh giá", key: "point", width: 15 },
      { header: "Nguyên nhân", key: "causal", width: 30 },
      { header: "Giải pháp", key: "description", width: 30 },
      { header: "Sản phẩm", key: "remcommendation", width: 30 },
      { header: "Ngày tạo", key: "createAt", width: 20 },
    ];

    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    worksheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF008000" }, // Green color
      bgColor: { argb: "FF0000FF" },
      font: { color: { argb: "FFFFFFFF" } },
    };

    data.forEach((item, index) => {
      worksheet.addRow({
        key: index + 1,
        image: item.image,
        point: item.point,
        causal: item.causal,
        remcommendation: item.recommendation,
        description: item.description,
        createAt: item.createAt,
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "DỮ LIỆU DO ỨNG DỤNG THU THẬP ĐƯỢC.xlsx");

    message.success("Xuất file thành công");
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      width: "5%",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (text, record) => (
        <img src={text} style={{ width: 100, height: 100 }} />
      ),
    },
    {
      title: "Điểm đánh giá",
      dataIndex: "point",
      key: "point",
    },
    {
      title: "Nguyên nhân",
      dataIndex: "causal",
      key: "causal",
    },
    {
      title: "Giải pháp",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Sản phẩm",
      dataIndex: "recommendation",
      key: "recommendation",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createAt",
      key: "createAt",
    },
  ];

  const data = [
    //    review data
    {
      key: "1",
      image: "https://via.placeholder.com/150",
      causal: "Lorem ipsum dolor sit amet",
      point: "9/10 ",
      createAt: "2021-09-09",
      recommendation: "Kem lăn trị mụn",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      key: "2",
      image: "https://via.placeholder.com/150",
      causal: "Lorem ipsum dolor sit amet",
      point: "9/10 ",
      createAt: "2021-09-09",
      recommendation: "Kem lăn trị mụn",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      key: "3",
      image: "https://via.placeholder.com/150",
      causal: "Lorem ipsum dolor sit amet",
      point: "9/10 ",
      createAt: "2021-09-09",
      recommendation: "Kem lăn trị mụn",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      key: "4",
      image: "https://via.placeholder.com/150",
      causal: "Lorem ipsum dolor sit amet",
      point: "9/10 ",
      createAt: "2021-09-09",
      recommendation: "Kem lăn trị mụn",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      key: "5",
      image: "https://via.placeholder.com/150",
      causal: "Lorem ipsum dolor sit amet",
      point: "9/10 ",
      createAt: "2021-09-09",
      recommendation: "Kem lăn trị mụn",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      key: "6",
      image: "https://via.placeholder.com/150",
      causal: "Lorem ipsum dolor sit amet",
      point: "9/10 ",
      createAt: "2021-09-09",
      recommendation: "Kem lăn trị mụn",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      key: "7",
      image: "https://via.placeholder.com/150",
      causal: "Lorem ipsum dolor sit amet",
      point: "9/10 ",
      createAt: "2021-09-09",
      recommendation: "Kem lăn trị mụn",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      key: "8",
      image: "https://via.placeholder.com/150",
      causal: "Lorem ipsum dolor sit amet",
      point: "9/10 ",
      createAt: "2021-09-09",
      recommendation: "Kem lăn trị mụn",
      description: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <>
      {/*  tổng cộng bao nhiêu review */}
      <Title level={3}>Tổng cộng: {data.length} data</Title>
      <Button onClick={exportToExcel}>Export to Excel</Button>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default Data;
