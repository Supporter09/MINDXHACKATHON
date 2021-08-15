import React, {useState} from 'react';
import { 
    Typography, 
    List, 
    ListItem} from '@material-ui/core';
    import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    right_panel: {
        padding: theme.spacing(0,4)
    },
    container: {
        background: '#FFFFFF',
        border: '1px solid rgba(203, 203, 203, 0.8)',
        borderRadius: '10px',
    },
    right_side: {
        paddingLeft: theme.spacing(2),
        padding: theme.spacing(2,0)
    }
}))


export default function Blog() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <>
            <div className={classes.container}>
                <List component="nav" aria-label="secondary mailbox folder">
                    <ListItem>
                        <Typography variant='h2' className={classes.heading}>
                            Trending blogs
                        </Typography>
                    </ListItem>
                    <ListItem
                    button
                    selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6)}
                    >
                        <Typography variant='body1'>
                            #React
                        </Typography>
                    </ListItem>
                    <ListItem
                    button
                    selected={selectedIndex === 7}
                    onClick={(event) => handleListItemClick(event, 7)}
                    >
                        <Typography variant='body1'>
                            #JS
                        </Typography>
                    </ListItem>
                    <ListItem
                    button
                    selected={selectedIndex === 8}
                    onClick={(event) => handleListItemClick(event, 8)}
                    >
                        <Typography variant='body1'>
                            #GO
                        </Typography>
                    </ListItem><ListItem
                    button
                    selected={selectedIndex === 9}
                    onClick={(event) => handleListItemClick(event, 9)}
                    >
                        <Typography variant='body1'>
                            #VueJS
                        </Typography>
                    </ListItem><ListItem
                    button
                    selected={selectedIndex === 10}
                    onClick={(event) => handleListItemClick(event, 10)}
                    >
                        <Typography variant='body1'>
                            #PHP
                        </Typography>
                    </ListItem>
                </List>
            </div>          
        </>
    )
}
