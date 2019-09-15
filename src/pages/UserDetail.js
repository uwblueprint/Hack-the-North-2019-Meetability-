//UserDetail.js
import React, { } from 'react';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../redux/selectors';
import { createThread } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Page from '../components/Page';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TodayIcon from '@material-ui/icons/Today';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: theme.palette.background.paper
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    }
}));

export default function UserDetail({ selected_user_id = '' }) {

    const dispatch = useDispatch();
    const classes = useStyles();

    const allUsers = useSelector(getAllUsers);
    const selectedUser = allUsers[selected_user_id] || null;

    const handleCreateThread = async () => {
        await dispatch(createThread(selected_user_id));
        navigate('/messages');
    };

    const getEventList = () => {

        if (!selectedUser || !selectedUser.type || selectedUser.type !== 'org' || !selectedUser.events) return null;

        const eventItems = selectedUser.events.map((item, i) => {

            const date = item.date ? new Date(item.date).toString() : '';
            return (
                <ExpansionPanel key={i}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}>
                        <List>
                        <ListItem>
                                        <ListItemIcon><TodayIcon /></ListItemIcon>
                                        <ListItemText primary={item.name} secondary={date}  />
                                    </ListItem>
                                    </List>
                    </ExpansionPanelSummary>
                    <Divider/>
                    <ExpansionPanelDetails>
                        <List>
                        <ListItem>
                                        <ListItemIcon><LocationOnIcon /></ListItemIcon>
                                        <ListItemText primary={item.location} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                                        <ListItemText primary={item.description} />
                                    </ListItem>

                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            );
        });

        return eventItems;
    }

    if (!selectedUser) {
        return (
            <Page title="User Not Found">
                <Typography align="center" variant="h2" component="h2">The selected user was not found.</Typography>
            </Page>
        );

    } else {

        return (
            <Page title={selectedUser.username}>

                <Grid container className={classes.topContainer} spacing={2} justify="center">

                    <Grid item xs={12}>
                        <Card className={classes.card}>
                            <CardHeader title={selectedUser.username} />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                                        <ListItemText primary={selectedUser.type || 'Individual'} />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button onClick={handleCreateThread}>
                                        <ListItemIcon><ChatIcon /></ListItemIcon>
                                        <ListItemText primary="Send Message" />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>

                    </Grid>

                    <Grid item xs={12}>
                        {getEventList()}
                    </Grid>

                </Grid>

            </Page>

        );
    }
}

