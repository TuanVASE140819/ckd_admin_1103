import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Avatar,
  Button,
  Typography,
  Pagination,
  Dropdown,
  Menu,
  Input,
} from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const columns = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Mã đơn hàng",
    dataIndex: "orderCode",
    key: "orderCode",
  },
  {
    title: "Họ và tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Ngày đặt",
    dataIndex: "orderDate",
    key: "orderDate",
  },
  {
    title: "Hình thức thanh toán",
    dataIndex: "paymentMethod",
    key: "paymentMethod",
  },
  {
    title: "Tổng giá",
    dataIndex: "totalPrice",
    key: "totalPrice",
  },
  {
    title: "Mã vận chuyển",
    dataIndex: "shippingCode",
    key: "shippingCode",
  },
  {
    title: "Tình trạng",
    dataIndex: "status",
    key: "status",
    render: (text, record) => (
      <StatusDropdown status={text} orderId={record.key} />
    ),
  },
  {
    title: "Hành động",
    dataIndex: "action",
    key: "action",
    render: () => (
      <Link to="/">Chi tiết</Link>
    ),
  },
];

const data = [
    {
        key: "1",
        orderCode: "DH001",
        name: "Nguyễn Văn A",
        orderDate: "20/12/2020",
        paymentMethod: "Thanh toán khi nhận hàng",
        totalPrice: "500.000",
        shippingCode: "VC001",
        status: "Đang chuẩn bị đơn",
        },
        {
        key: "2",
        orderCode: "DH002",
        name: "Nguyễn Văn B",
        orderDate: "21/12/2020",
        paymentMethod: "Thanh toán khi nhận hàng",
        totalPrice: "600.000",
        shippingCode: "VC002",
        status: "Đang giao hàng",
        },
        {
            key: "3",
            orderCode: "DH001",
            name: "Nguyễn Văn A",
            orderDate: "20/12/2020",
            paymentMethod: "Thanh toán khi nhận hàng",
            totalPrice: "500.000",
            shippingCode: "VC001",
            status: "Đang chuẩn bị đơn",
            },
            {
            key: "4",
            orderCode: "DH002",
            name: "Nguyễn Văn B",
            orderDate: "21/12/2020",
            paymentMethod: "Thanh toán khi nhận hàng",
            totalPrice: "600.000",
            shippingCode: "VC002",
            status: "Đang giao hàng",
            },
            {
                key: "4",
                orderCode: "DH002",
                name: "Nguyễn Văn B",
                orderDate: "21/12/2020",
                paymentMethod: "Thanh toán khi nhận hàng",
                totalPrice: "600.000",
                shippingCode: "VC002",
                status: "Đang giao hàng",
                },
                {
                    key: "4",
                    orderCode: "DH002",
                    name: "Nguyễn Văn B",
                    orderDate: "21/12/2020",
                    paymentMethod: "Thanh toán khi nhận hàng",
                    totalPrice: "600.000",
                    shippingCode: "VC002",
                    status: "Đang giao hàng",
                    },
                    {
                        key: "4",
                        orderCode: "DH002",
                        name: "Nguyễn Văn B",
                        orderDate: "21/12/2020",
                        paymentMethod: "Thanh toán khi nhận hàng",
                        totalPrice: "600.000",
                        shippingCode: "VC002",
                        status: "Đang giao hàng",
                        },

];

const StatusDropdown = ({ status, orderId }) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleMenuClick = (e) => {
    setCurrentStatus(e.key);
    // Thực hiện các hành động cập nhật tình trạng đơn hàng tại đây, ví dụ: gửi yêu cầu cập nhật trạng thái đơn hàng thông qua API
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="Đang chuẩn bị đơn">Đang chuẩn bị đơn</Menu.Item>
      <Menu.Item key="Đang giao hàng">Đang giao hàng</Menu.Item>
      <Menu.Item key="Đã giao hàng">Đã giao hàng</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button>{currentStatus}</Button>
    </Dropdown>
  );
};

function Order() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Số lượng dòng trên mỗi trang
  const [searchText, setSearchText] = useState("");

  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const filteredData = data.filter(
    (item) =>
      item.orderCode.toLowerCase().includes(searchText.toLowerCase())
  );

  

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
        <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs={24} xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Quản lý đơn hàng"
              extra={
                <Radio.Group defaultValue="a">
                  <Radio.Button value="a">Tất cả</Radio.Button>
                  <Radio.Button value="b">Online</Radio.Button>
                </Radio.Group>
              }
            >
              <Input.Search
                placeholder="Nhập mã đơn hàng để tìm kiếm"
                onSearch={handleSearch}
                enterButton
                style={{ width: 300, marginBottom: 16 }}
                
              />
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={paginatedData}
                  pagination={false}
                  className="ant-border-space"
                />
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={filteredData.length}
                  onChange={onChangePage}
                  className="pagination"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Order;
