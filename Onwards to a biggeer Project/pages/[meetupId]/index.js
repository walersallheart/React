import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = props => {
    return <MeetupDetail
                id={props.id}
                image={props.image}
                title={props.title}
                address={props.address}
                description={props.description}/>
}

export function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                id: meetupId,
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
                title:'A First Meetup',
                address:'123 Fake Street',
                description:'The meetup description'
            }
        }
    }
}

export default MeetupDetails;