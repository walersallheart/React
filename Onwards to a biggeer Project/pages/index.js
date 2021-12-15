import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

const HomePage = props => {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta
                    name='description'
                    content='Browse a list of highly active React meetups!'
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>);
}

//only works for stuff under the "pages" folder to render serverside
//getStaticProps is a reserved function in next.js to do server side rendering
//this function can be async
//any normal server side code (like reading files) can be run here
//this is run only at build time
//this function MUST return a javascript object
export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://willy:G33Kr0uJhV7xYb5T@cluster0.7uqja.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                id:meetup._id.toString(),
                title:meetup.title,
                image:meetup.image,
                address:meetup.address
            }))
        }
    }
}

export default HomePage;