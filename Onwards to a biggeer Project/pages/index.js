import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 512345 Some City',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 512345 Some City',
        description: 'This is a second meetup'
    },
    {
        id: 'm3',
        title: 'A Third Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 512345 Some City',
        description: 'This is a third meetup'
    },
    {
        id: 'm4',
        title: 'A Fourth Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 512345 Some City',
        description: 'This is a fourth meetup'
    }
];

const HomePage = props => {
    return <MeetupList meetups={props.meetups} />;
}

//only works for stuff under the "pages" folder to render serverside
//getStaticProps is a reserved function in next.js to do server side rendering
//this function can be async
//any normal server side code (like reading files) can be run here
//this is run only at build time
//this function MUST return a javascript object
export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

export default HomePage;