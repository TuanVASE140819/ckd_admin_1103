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
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
} from "antd";

import {
  ToTopOutlined,
  EyeFilled,
  EyeInvisibleFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images
import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import pencil from "../assets/images/pencil.svg";

import { Checkbox } from "antd";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const { Title } = Typography;

// table code start
const columns = [
  {
    //STT
    title: "ID",
    dataIndex: "key",
    key: "key",
    width: "5%",
  },
  {
    // Hình
    title: "Hình",
    dataIndex: "name",
    key: "name",
    width: "10%",
  },
  // Tiêu đề
  {
    title: "Tiêu đề",
    dataIndex: "function",
    key: "function",
    width: "15%",
  },
  // Người tạo
  {
    title: "Hiện thị",
    dataIndex: "status",
    key: "status",
    width: "10%",
  },
  {
    title: "Mới nhất",
    dataIndex: "employed",
    key: "employed",
    width: "10%",
  },
  {
    title: "Hành động",
    dataIndex: "actions",
    key: "actions",
    width: "10%",
  },
];

const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
        </div>
      </>
    ),

    status: (
      <>
        {/*  Bật tắt svg icon con mắt */}
        <EyeFilled
          style={{
            fontSize: "20px",
            color: "#f58a78",
          }}
        />
      </>
    ),
    employed: (
      <>
        <Checkbox
          onChange={onChange}
          style={{
            fontSize: "20px",
            color: "#f58a78",
          }}
        />
      </>
    ),
    actions: (
      <>
        <EditOutlined
          style={{
            fontSize: "20px",
            color: "#f58a78",
            marginRight: "10px",
          }}
        />
        <DeleteOutlined style={{ fontSize: "20px", color: "#f58a78" }} />
      </>
    ),
  },
  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
        </div>
      </>
    ),

    status: (
      <>
        {/*  Bật tắt svg icon con mắt */}
        <EyeFilled
          style={{
            fontSize: "20px",
            color: "#f58a78",
          }}
        />
      </>
    ),
    employed: (
      <>
        <Checkbox
          onChange={onChange}
          style={{
            fontSize: "20px",
            color: "#f58a78",
          }}
        />
      </>
    ),
    actions: (
      <>
        <EditOutlined
          style={{
            fontSize: "20px",
            color: "#f58a78",
            marginRight: "10px",
          }}
        />
        <DeleteOutlined style={{ fontSize: "20px", color: "#f58a78" }} />
      </>
    ),
  },
  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
        </div>
      </>
    ),

    status: (
      <>
        {/*  Bật tắt svg icon con mắt */}
        <EyeFilled
          style={{
            fontSize: "20px",
            color: "#f58a78",
          }}
        />
      </>
    ),
    employed: (
      <>
        <Checkbox
          onChange={onChange}
          style={{
            fontSize: "20px",
            color: "#f58a78",
          }}
        />
      </>
    ),
    actions: (
      <>
        <EditOutlined
          style={{
            fontSize: "20px",
            color: "#f58a78",
            marginRight: "10px",
          }}
        />
        <DeleteOutlined style={{ fontSize: "20px", color: "#f58a78" }} />
      </>
    ),
  },
  {
    key: "4",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
        </div>
      </>
    ),

    status: (
      <>
        {/*  Bật tắt svg icon con mắt */}
        <EyeFilled
          style={{
            fontSize: "20px",
            color: "#f58a78",
          }}
        />
      </>
    ),
    employed: (
      <>
        <Checkbox
          onChange={onChange}
          style={{
            fontSize: "20px",
            color: "#f58a78",
          }}
        />
      </>
    ),
    actions: (
      <>
        <EditOutlined
          style={{
            fontSize: "20px",
            color: "#f58a78",
            marginRight: "10px",
          }}
        />
        <DeleteOutlined style={{ fontSize: "20px", color: "#f58a78" }} />
      </>
    ),
  },
  {
    key: "5",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
        </div>
      </>
    ),

    status: (
      <>
        {/*  Bật tắt svg icon con mắt */}
        <EyeFilled
          style={{
            fontSize: "20px",
            color: "#f58a78",
          }}
        />
      </>
    ),
    employed: (
      <>
        <Checkbox
          onChange={onChange}
          style={{
            fontSize: "20px",
            color: "#f58a78",
          }}
        />
      </>
    ),
    actions: (
      <>
        <EditOutlined
          style={{
            fontSize: "20px",
            color: "#f58a78",
            marginRight: "10px",
          }}
        />
        <DeleteOutlined style={{ fontSize: "20px", color: "#f58a78" }} />
      </>
    ),
  },
  {
    key: "6",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
        </div>
      </>
    ),

    status: (
      <>
        {/*  Bật tắt svg icon con mắt */}
        <EyeFilled
          style={{
            fontSize: "20px",
            color: "#f58a78",
          }}
        />
      </>
    ),
    employed: (
      <>
        <Checkbox
          onChange={onChange}
          style={{
            fontSize: "20px",
            color: "#f58a78",
          }}
        />
      </>
    ),
    actions: (
      <>
        <EditOutlined
          style={{
            fontSize: "20px",
            color: "#f58a78",
            marginRight: "10px",
          }}
        />
        <DeleteOutlined style={{ fontSize: "20px", color: "#f58a78" }} />
      </>
    ),
  },
  {
    key: "7",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
        </div>
      </>
    ),

    status: (
      <>
        {/*  Bật tắt svg icon con mắt */}
        <EyeFilled
          style={{
            fontSize: "20px",
            color: "#f58a78",
          }}
        />
      </>
    ),
    employed: (
      <>
        <Checkbox
          onChange={onChange}
          style={{
            fontSize: "20px",
            color: "#f58a78",
          }}
        />
      </>
    ),
    actions: (
      <>
        <EditOutlined
          style={{
            fontSize: "20px",
            color: "#f58a78",
            marginRight: "10px",
          }}
        />
        <DeleteOutlined style={{ fontSize: "20px", color: "#f58a78" }} />
      </>
    ),
  },
];

function News() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Quản lý bài viết"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">Hiện thị</Radio.Button>
                    <Radio.Button value="b">Không hiện thị</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={{ pageSize: 5 }} // Số dòng trên mỗi trang
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
  
  export default News ;
  