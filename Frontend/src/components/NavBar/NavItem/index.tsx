import React from 'react';
import { Link } from 'react-router-dom'

const NavItem = (props: any) => {
  return (
    <li>
      <Link to={props.link}>
        {props.title}
      </Link>
    </li>
  );
};

export default NavItem;