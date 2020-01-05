import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      nav {
        text-align: right;
        margin-top: 10px;
        margin-right: 10px;
      }

      nav a {
        font-weight: normal;
      }

      nav ul {
        list-style: none;
      }

      nav ul li {
        display: inline;
      }

      nav ul li:after {
        content: " / ";
      }

      nav ul li:last-child:after {
        content: "";
      }
    `}</style>
  </nav>
);

export default Nav;
