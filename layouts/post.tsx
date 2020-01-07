import React from "react";
import Layout from "./main";

interface Props {
  title: string;
  date: string;
}
const PostLayout: React.FC<Props> = props => (
  <Layout title={props.title}>
    <section id="content">
      <div className="post">
        <h1 className="title">{props.title}</h1>
        <small>Published {props.date}</small>
        {props.children}
      </div>
    </section>
  </Layout>
);

export default PostLayout;
