/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";



function RightMenu(props) {
  const user = useSelector(state => state.user)
  const navigate = useNavigate();

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        navigate("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  const AuthItems = [
    {
      key: 'upload',
      label: <a href='/product/upload'>Upload</a>,
    },
    {
      key: 'cart',
      label: (<Badge count={3}>
                <a href='/user/cart' className="head-example" style={{marginRight: -22, color: '#667777'}}>
                  <ShoppingCartOutlined style={{fontSize: 30, marginBottom: 3}}/>
                </a>                
              </Badge>)
    },
    {
      key: 'logout',
      label: <a onClick={logoutHandler}>Logout</a>
    }
  ]

  const NonAuthItems = [
    {
      key: "mail",
      label: <a href="/login">Signin</a>
    },
    {
      key: 'app',
      label: <a href="/register">Signup</a>
    }
  ]

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode} items={NonAuthItems}/>
    )
  } else {
    return (
      <Menu mode={props.mode} items={AuthItems}/>
    )
  }
}

export default RightMenu;

