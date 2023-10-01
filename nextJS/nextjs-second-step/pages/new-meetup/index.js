import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetup = async data => {
    const res = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    const responseData = await res.json();
    console.log(
      '🚀 ~ file: index.js:9 ~ addMeetup ~ responseData:',
      responseData
    );
    router.push('/');
  };

  return <NewMeetupForm onAddMeetup={addMeetup} />;
};

export default NewMeetupPage;
