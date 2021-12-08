import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'George Carlin', text: "I almost don't feel the way I do" },
    { id: 'q2', author: 'George Carlin', text: "A house is just a place to keep your stuff while you go out and get more stuff." },
    { id: 'q3', author: 'George Carlin', text: "Think of how stupid the average person is, and realize half of them are stupider than that."}
];

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <NoQuotesFound />;
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={match.path}  exact>
            <div className='centered'>
                <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
            </div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments />
        </Route>
    </Fragment>;
}

export default QuoteDetail;