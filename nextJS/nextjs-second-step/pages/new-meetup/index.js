import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const addMeetup = data => {
    console.log('🚀 ~ file: index.js:5 ~ NewMeetupPage ~ data:', data);
  };

  return <NewMeetupForm onAddMeetup={addMeetup} />;
};

export default NewMeetupPage;
