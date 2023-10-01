import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">NextJS is Great🔥</Link>
        </li>
        <li>bla bla</li>
      </ul>
    </>
  );
};

export default NewsPage;
