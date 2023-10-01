import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://ilan-udemy:8XbJo8T5X07XExZA@udemy-react.2rqqdtp.mongodb.net/'
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    console.log('🚀 ~ file: new-meetup.js:13 ~ handler ~ result:', result);
    client.close();

    res.status(201).json({ message: 'Meetup inserted successfully!' });
  }
};

export default handler;
