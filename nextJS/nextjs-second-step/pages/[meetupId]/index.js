import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = props => {
  return (
    <MeetupDetail
      img="https://st.depositphotos.com/1146092/2514/i/450/depositphotos_25143517-stock-photo-cool-dog.jpg"
      title="Dog GANG Meetup"
      address="Dog city Kitten street 6"
      description="GANG GANG"
    />
  );
};

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [{ params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } }],
  };
};

export const getStaticProps = async context => {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: '',
        title: '',
        address: '',
        description: '',
      },
    },
    revalidate: 10,
  };
};

export default MeetupDetails;
