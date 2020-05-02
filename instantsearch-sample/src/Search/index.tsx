import React from 'react';
import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-dom';
import SearchBox from './SearchBox';
import Hits from './Hits';
import InfiniteHits from './InfiniteHit';

const searchClient = process.env.REACT_APP_ALGOLIA_APP_ID 
&& process.env.REACT_APP_ALGOLIA_API_KEY 
&& algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY);

const Search: React.FC = () => {
    return (<InstantSearch searchClient={searchClient} indexName='messages'>
        <SearchBox />{/* 検索ボックス */}
        <InfiniteHits />{/* 検索結果 */}
    </InstantSearch>)
}

export default Search;