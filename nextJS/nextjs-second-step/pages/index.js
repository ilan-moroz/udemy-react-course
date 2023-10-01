import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head';

const HomePage = props => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a list of React Meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// ID DATA CHANGES A LOT OF TIMES=>>>>>>
// export const getServerSideProps = async context => {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

// USUALLY FASTER =>>>>>>
export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://ilan-udemy:8XbJo8T5X07XExZA@udemy-react.2rqqdtp.mongodb.net/'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
