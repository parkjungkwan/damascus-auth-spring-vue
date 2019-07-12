import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../customer/LoginPage"
import Join from "../customer/JoinPage"
import MyPage from "../customer/MyPage"
import Home from "./Home"


const Nav = () =>{
    return (
        <Router>
        <ul class="horizontal">
            <li><a class="active" href="javascript:void(0)">
                    <Link to="/home">Home</Link>
                </a>
            </li>
            <li><a href="javascript:void(0)">BITCAMP</a></li>
            <li><div class="dropdown dropdown2">
                <button class="dropbtn">기본문법</button>
                <div class="dropdown-content">
                    <a href="javascript:void(0)">
                        
                    </a>
                    <a href="javascript:void(0)">
                        <Link to="/hello">Hello</Link>
                    </a>
                    <a href="javascript:void(0)">
                        <Link to="/timer">타이머</Link>
                    </a>
                    <a href="javascript:void(0)">
                        <Link to="/todoapp">스케쥴</Link>
                    </a>
                    <a href="javascript:void(0)">
                        <Link to="/clock">시 계</Link>
                    </a>
                    <a href="javascript:void(0)">
                        <Link to="/switch">SWITCH</Link>
                    </a>
                </div>
                </div>
            </li>
            <li><div class="dropdown dropdown2">
                <button class="dropbtn">회원관리</button>
                <div class="dropdown-content">
                    <a href="javascript:void(0)">
                        
                    </a>
                    <a href="javascript:void(0)">
                        <Link to="/join">회원가입</Link>
                    </a>
                    <a href="javascript:void(0)">
                        <Link to="/login">로그인</Link>
                    </a>
                    <a href="javascript:void(0)">
                        <Link to="/mypage">마이페이지</Link>
                    </a>
                    <a href="javascript:void(0)">
                        <Link to="/clock">시 계</Link>
                    </a>
                    <a href="javascript:void(0)">
                        <Link to="/remove">회원탈퇴</Link>
                    </a>
                </div>
                </div>
            </li>
            <li class="rightli" style="float:right"><a href="javascript:void(0)">About</a></li>
        </ul>
        <Route path="/login" component={Login}/>
        <Route path="/join" component={Join}/>
        <Route path="/mypage" component={MyPage}/>
        <Route path="/home" component={Home}/>
        <Route path="/hello" component={Hello}/>
        <Route path="/switch" component={LightSwitch}/>
        <Route path="/timer" component={Timer}/>
        <Route path="/todoapp" component={TodoApp}/>
        <Route path="/clock" component={Clock}/>
        </Router>
    )
}


export default Nav