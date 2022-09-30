import React from 'react';
import { Menu } from 'antd';



function LeftMenu(props) {
  const LeftMenuItems = [
    {
      key: 'mail',
      label: <a href="/">Home</a>
    },
    {
      key: 'sub1',
      label: <span>Blogs</span>,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              key:'setting:1',
              label: "Option 1"
            },
            {
              key:'setting:2',
              label: "Option 2"
            },
          ]
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              key:'setting:3',
              label: "Option 3"
            },
            {
              key:'setting:4',
              label: "Option 4"
            },
          ]
        },
        
      ]
    }
  ]
  
  return (
    <Menu mode={props.mode} items={LeftMenuItems} />
  )
}

export default LeftMenu