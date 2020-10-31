import React from "react";
import './MainMenu.css';
export const NavMenu = (props) => (
   
  <nav className="main-nav">
  <div class="text-left">
    <ul>
        {props.items.map(item => (
            <dir>
            <li>
                <a href={item.link} >{item.title}</a>
            </li>
            </dir>
        ))}
    </ul>
    </div>
  </nav>
);
