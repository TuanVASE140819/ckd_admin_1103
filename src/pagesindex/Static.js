import React from "react";
import { Badge, Descriptions } from "antd";
const items = [
  {
    key: "1",
    label: "Sản phẩm được recommend nhiều nhất",
    children: "Kem lăn trị mụn",
  },
  {
    key: "2",
    label: "Số lượng request đã thực hiện",
    children: "200",
  },
  {
    key: "3",
    label: "Số tuổi phổ biến",
    children: "18-25",
  },
  {
    key: "4",
    label: "Sản phẩm được recommend Top 2",
    children: "Kem lăn trị mụn",
  },
  {
    key: "5",
    label: "Số lượng request đã thực hiện",
    children: "200",
  },
  {
    key: "6",
    label: "Số tuổi phổ biến",
    children: "18-25",
  },
  {
    key: "7",
    label: "Sản phẩm được recommend Top 2",
    children: "Kem lăn trị mụn",
  },
  {
    key: "8",
    label: "Số lượng request đã thực hiện",
    children: "200",
  },
  {
    key: "9",
    label: "Số tuổi phổ biến",
    children: "18-25",
  },
  // {
  //   key: "4",
  //   label: "Order time",
  //   children: "2018-04-24 18:00:00",
  // },
  // {
  //   key: "5",
  //   label: "Usage Time",
  //   children: "2019-04-24 18:00:00",
  //   span: 2,
  // },
  // {
  //   key: "6",
  //   label: "Status",
  //   children: <Badge status="processing" text="Running" />,
  //   span: 3,
  // },
  // {
  //   key: "7",
  //   label: "Negotiated Amount",
  //   children: "$80.00",
  // },
  // {
  //   key: "8",
  //   label: "Discount",
  //   children: "$20.00",
  // },
  // {
  //   key: "9",
  //   label: "Official Receipts",
  //   children: "$60.00",
  // },
  // {
  //   key: "10",
  //   label: "Config Info",
  //   children: (
  //     <>
  //       Data disk type: MongoDB
  //       <br />
  //       Database version: 3.4
  //       <br />
  //       Package: dds.mongo.mid
  //       <br />
  //       Storage space: 10 GB
  //       <br />
  //       Replication factor: 3
  //       <br />
  //       Region: East China 1
  //       <br />
  //     </>
  //   ),
  // },
];

const Static = () => {
  return (
    <Descriptions title="Product Details" layout="vertical" bordered>
      {items.map((item) => (
        <Descriptions.Item key={item.key} label={item.label} span={item.span}>
          {item.children}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};

export default Static;
