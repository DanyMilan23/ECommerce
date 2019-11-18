import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { VerticalAlignBottom } from '@material-ui/icons';
function Copyright() {
    return (
        <Typography variant="body2" color="inherit" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Tim
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        paddingTop: theme.spacing(8),
    },
    footer: {
        paddingTop: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor: '#585858',
        color: 'darkgray',
    },
    footerfin: {
        paddingTop: theme.spacing(0),
        marginTop: '15px',
        backgroundColor: 'black',
    },
    seccion: {
        marginTop: '0',
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    dividergrid: {
        borderRight: '0.05em solid gray',
        
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (



        <div className={classes.root}>
            <footer className={classes.footer}>
                <seccion className={classes.seccion}>
                    <Container maxWidth="sm">
                        <Typography className={classes.tipografia} variant="body1" align="center"> My sticky footer can be found here.</Typography>
                    </Container>
                </seccion>
                <seccion className={classes.seccion}>

                    <Divider className={classes.divider} />
                    <Grid container spacing={2}>

                        <Grid className={classes.dividergrid} item xs={6} sm={4}>Marca  </Grid>
                        <Grid className={classes.dividergrid} item xs={6} sm={4}>Redes sociales</Grid>
                        <Grid item xs={6} sm={4}>buscar
                        </Grid>
                    </Grid>
                    <Container  className={classes.footerfin}>
                        <Copyright />
                    </Container>
                </seccion>
            </footer>
        </div>
    );
}