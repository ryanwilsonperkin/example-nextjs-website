import React from "react";
import Link from "next/link";
import Layout from "../../layouts/main";

const Home = () => {
  return (
    <Layout title="Posts">
      <Link href="/posts/2013/09/11/co-op-at-waveaccounting">
        <a>Co-Op at Waveaccounting</a>
      </Link>
    </Layout>
  );
};

export default Home;
