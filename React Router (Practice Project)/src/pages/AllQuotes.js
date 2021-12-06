import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'George Carlin', text: "I almost don't feel the way I do" },
    { id: 'q2', author: 'George Carlin', text: "A house is just a place to keep your stuff while you go out and get more stuff." },
    { id: 'q3', author: 'George Carlin', text: "Think of how stupid the average person is, and realize half of them are stupider than that."}
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes;