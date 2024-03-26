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
import { Switch, Route, Redirect } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Brand from "./pagesindex/Brand";
import User from "./pagesindex/User";
import Order from "./pagesindex/Order";
import News from "./pagesindex/News";
import Policy from "./pagesindex/Policy";
import ImageStructure from "./pagesindex/ImageStructure";
import Review from "./pagesindex/Review";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userInfo) => {
    // Thực hiện xác thực thông tin đăng nhập ở đây (ví dụ: gửi yêu cầu đăng nhập đến máy chủ)
    // Sau khi xác thực thành công, cập nhật trạng thái đăng nhập và thông tin người dùng
    if (
      userInfo.username === "admin" &&
      userInfo.password === "123"
    ) {
      setIsLoggedIn(true);
      setUser({
        username: userInfo.username,
        isAdmin: true,
      });
    } else {
      // Xử lý trường hợp không đăng nhập thành công
      console.log("Đăng nhập không thành công");
    }
  };

  return (
    <div className="App">
      <Switch>
        {!isLoggedIn ? (
          <Switch>
            <Route exact path="/sign-in">
              <SignIn onLogin={handleLogin} />
            </Route>
            <Route exact path="/sign-up">
              <SignUp />
            </Route>
            <Redirect from="*" to="/sign-in" />
          </Switch>
        ) : (
          <Main>
            <Route exact path="/dashboard" component={Home} />
            {/* <Route exact path="/tables" component={Brand} /> */}
            <Route exact path="/brand" component={Brand} />
            <Route exact path="/users" component={User} />
            <Route exact path="/news" component={News} />
            <Route exact path="/policy" component={Policy} />
            <Route exact path="/image" component={ImageStructure} />
            <Route exact path="/review" component={Review} />
            <Route exact path="/billing" component={Billing} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/profile" component={Profile} />
            <Redirect from="*" to="/dashboard" />
          </Main>
        )}
      </Switch>
    </div>
  );
}

export default App;
