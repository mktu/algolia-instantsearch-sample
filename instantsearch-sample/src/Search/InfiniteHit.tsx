import React from 'react';
import { InfiniteHitsProvided, Hit } from 'react-instantsearch-core';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Message } from './types';
import Highlight from './Highlight';

const useStyle = makeStyles({
    root: {
        overflowX: 'hidden',
        overflowY: 'scroll',
        maxHeight : '90vh'
    },
    listItem: {
        borderBottom : '1px solid rgba(0,0,0,0.1)'
    },
    button: {
        color : '#6578FF'
    }
})

const Hits: React.FC<InfiniteHitsProvided<Hit<Message>>> = ({
    hits,
    hasMore,
    refineNext
}) => {
    const classes = useStyle();
    return (
        <List className={classes.root}>
            {hits.map(hit => (
                <ListItem key={hit.objectID} button className={classes.listItem}>
                    <ListItemText secondary={<Highlight hit={hit} attribute='senderName'/>}>
                        <Highlight hit={hit} attribute='message'/>
                    </ListItemText>
                </ListItem>
            ))}
            {hasMore && <Button className={classes.button} onClick={refineNext}>...More</Button>}
        </List>
    )
};

export default connectInfiniteHits(Hits);