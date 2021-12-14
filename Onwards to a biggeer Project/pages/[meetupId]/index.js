import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = props => {
    return <MeetupDetail
                id={props.id}
                image={props.image}
                title={props.title}
                address={props.address}
                description={props.description}/>
}

//this is necessary for dynamically generated pages that you want to pre-generate
//since this page uses a parameter in the url to populate data, you need it
//this tells next.js what urls it needs to pre-generate
export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
            {
                params: {
                    meetupId: 'm3'
                }
            },
            {
                params: {
                    meetupId: 'm4'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                meetupId: meetupId,
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
                title:'A First Meetup',
                address:'123 Fake Street',
                description:'The meetup description'
            }
        }
    }
}

export default MeetupDetails;