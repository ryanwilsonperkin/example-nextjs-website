import React from "react";
import Link from "next/link";
import Layout from "../../layouts/main";

const postsByYear = [
  {
    year: 2013,
    posts: [
      {
        title: "Co-op at Waveaccounting",
        link: "/posts/2013/09/11/co-op-at-waveaccounting",
        date: "2013/09/11",
        excerpt: `Recently, I started working through the Matasano Crypto Challenges. I'm about to graduate from university, and for my last semester I chose to treat these challenges as an independent research project. It's even worth credit thanks to my wonderful advisor Dan Gillis.`
      }
    ]
  }
];

const Posts = () => {
  return (
    <Layout title="Posts">
      <section id="posts">
        <h1>Posts</h1>
        {postsByYear.map(({ year, posts }) => (
          <React.Fragment key={year}>
            <h2 className="date">{year}</h2>
            <hr />
            <ul>
              {posts.map(({ title, link, date, excerpt }) => (
                <li key={link}>
                  <h3>
                    <Link href={link}>
                      <a>{title}</a>
                    </Link>
                  </h3>
                  <small className="date">Published {date}</small>
                  <p>{excerpt}</p>
                  <Link href={link}>
                    <a>Continue reading...</a>
                  </Link>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </section>
    </Layout>
  );
};

export default Posts;
