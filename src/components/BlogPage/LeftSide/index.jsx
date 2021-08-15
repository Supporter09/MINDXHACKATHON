import React, {useState} from 'react';
import { 
    Typography, 
    List, 
    ListItem, 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    blog_body: {
        padding: theme.spacing(4),
        paddingTop: theme.spacing(10)
    },
    post: {
        margin: theme.spacing(2,0)
    },
    heading: {
        marginBottom:theme.spacing(1),
        textAlign: 'left',
        fontSize:'28px !important'
    },
    container: {
        background: '#FFFFFF',
        border: '1px solid rgba(203, 203, 203, 0.8)',
        borderRadius: '10px',
    },
    left_side: {
        paddingRight: theme.spacing(2),
        padding: theme.spacing(2,0)
    },

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
                                Popular Tags
                            </Typography>
                        </ListItem>
                        <ListItem
                        button
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <Typography variant='body1'>
                                #React
                            </Typography>
                        </ListItem>
                        <ListItem
                        button
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <Typography variant='body1'>
                                #JS
                            </Typography>
                        </ListItem>
                        <ListItem
                        button
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                        >
                            <Typography variant='body1'>
                                #GO
                            </Typography>
                        </ListItem><ListItem
                        button
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                        >
                            <Typography variant='body1'>
                                #VueJS
                            </Typography>
                        </ListItem><ListItem
                        button
                        selected={selectedIndex === 5}
                        onClick={(event) => handleListItemClick(event, 5)}
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
