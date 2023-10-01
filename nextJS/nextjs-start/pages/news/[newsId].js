import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;

  return (
    <>
      <h1>Detail Page</h1>
      {newsId}
    </>
  );
};

export default DetailPage;
