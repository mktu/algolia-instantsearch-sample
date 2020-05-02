import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchBoxProvided } from 'react-instantsearch-core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    root: {
        backgroundColor: '#6578FF',
        padding : '0.5rem 3rem'
    },
    inputWrapper: {
        display : 'flex',
        alignItems : 'center',
        backgroundColor: '#92A1FF',
        borderRadius: '5px',
        padding: '0.5rem 1rem',
        maxWidth : '40vw',
    },
    icon: {
        opacity : '0.6',
        marginRight : '0.5rem',
    }
})

const SearchBox: React.FC<SearchBoxProvided> = ({
    refine,
    currentRefinement,
}) => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.inputWrapper}>
                <SearchIcon className={classes.icon}/>
                <InputBase placeholder='Search messages' value={currentRefinement} onChange={(e) => {
                    refine(e.target.value);
                }} />
            </div>
        </div>
    )
};

export default connectSearchBox(SearchBox);