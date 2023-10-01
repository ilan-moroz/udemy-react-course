import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Dog GANG Meetup',
    image:
      'https://st.depositphotos.com/1146092/2514/i/450/depositphotos_25143517-stock-photo-cool-dog.jpg',
    address: 'Dog city Kitten street 69',
    description: 'GANG GANG',
  },

  {
    id: 'm2',
    title: 'Cat GANG Meetup',
    image:
      'https://steamuserimages-a.akamaihd.net/ugc/1644340994747007967/853B20CD7694F5CF40E83AAC670572A3FE1E3D35/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    address: 'cat city puppy street 69',
    description: 'MEOW MEOW',
  },
];

const HomePage = props => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  // example -- fetch data from api
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
};

export default HomePage;
