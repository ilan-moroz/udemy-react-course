import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';

const MeetupDetails = props => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content="Add your own Meetups" />
      </Head>
      <MeetupDetail
        img={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://ilan-udemy:8XbJo8T5X07XExZA@udemy-react.2rqqdtp.mongodb.net/'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async context => {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://ilan-udemy:8XbJo8T5X07XExZA@udemy-react.2rqqdtp.mongodb.net/'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
      },
    },
    revalidate: 10,
  };
};

export default MeetupDetails;
