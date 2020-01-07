import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Layout from "../../layouts/main";

const postsByYear = [
  {
    year: 2015,
    posts: [
      {
        title: "Matasano Crypto Challenges",
        link: "/posts/2015/02/13/matasano-crypto-challenges",
        date: "2015/02/13",
        excerpt: `Recently, I started working through the Matasano Crypto Challenges.
I'm about to graduate from university, and for my last semester I chose to
treat these challenges as an independent research project. It's even worth
credit thanks to my wonderful advisor Dan Gillis.
`
      },
      {
        title: "Co-op at Thalmic Labs",
        link: "/posts/2015/01/06/co-op-at-thalmic-labs",
        date: "2015/01/06",
        excerpt: `> "When our founders, Stephen, Matthew, and Aaron, started thinking about the future of technology, they wanted to give users a way to interact with digital devices in a natural and mobile environment. They came up with the idea of a wearable device that would communicate based on EMG signals from the forearm, rather than touch, voice control, or camera-based control. And since the Myo™ armband doesn’t rely on cameras, it can travel with the user wherever they go."
*-Thalmic Labs Blog*
`
      }
    ]
  },
  {
    year: 2014,
    posts: [
      {
        title: "Co-op at Google",
        link: "/posts/2014/06/03/co-op-at-google",
        date: "2014/06/03",
        excerpt: `*"Thank you for taking the time to interview with our team! We received the
feedback from your technical interviews and will be moving forward to the second
round of the interview process."*
`
      }
    ]
  },
  {
    year: 2013,
    posts: [
      {
        title: "Co-op at Waveaccounting",
        link: "/posts/2013/09/11/co-op-at-waveaccounting",
        date: "2013/09/11",
        excerpt: `It had been barely two months since my job at Research In
Motion had ended and I was already looking for new work. I
had decided that for my next work term I would want to work at a small
company that put an emphasis on shipping code quickly so that my efforts
would go towards meaningful change.
`
      },
      {
        title: "Co-op at Research In Motion",
        link: "/posts/2013/01/11/co-op-at-research-in-motion",
        date: "2013/01/11",
        excerpt: `When I was in the fifth grade, I bought a copy of Interplay's "Learn to Program Basic" from a Scholastic magazine flier.`
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
            <h2>{year}</h2>
            <hr />
            <ul>
              {posts.map(({ title, link, date, excerpt }) => (
                <li className="post" key={link}>
                  <h3>
                    <Link href={link}>
                      <a>{title}</a>
                    </Link>
                  </h3>
                  <small>Published {date}</small>
                  <ReactMarkdown source={excerpt} />
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
