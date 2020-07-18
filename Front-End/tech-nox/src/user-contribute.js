import React from "react";
import { fade, withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import axios from 'axios';

const drawerWidth = 240;
const topAppBarWidth = 64;

const useStyles = theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        // width: `calc(100% - ${drawerWidth}px)`,
        // marginLeft: drawerWidth,
        backgroundColor:'black'
    },
    searchBar:{
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        marginTop:'25rem',
        backgroundColor:'black'
    },
    title: {
        flexGrow: 1,
    },
    inputRoot: {
        color: 'inherit',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '20rem',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        },
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '100ch',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        marginTop: topAppBarWidth,
        width: drawerWidth
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    },
    gridTypo: {
        padding: theme.spacing(2)
    }
});

class ContributePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.match.params.username,
            ingredient_count: 0,
            ingredient_list: [],
            ingredient_checked: [],
            category_list: [],
            selected_ingredients: []
        };

        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.handleCheckReset = this.handleCheckReset.bind(this);
        this.deleteIngredient = this.deleteIngredient.bind(this);
    }

    componentDidMount() {
        this.getIngredients();
        this.getCategories();
    }

    async getIngredients() {
        let response = await axios.get('/ingredient');
        
        this.setState({
            ingredient_count: response.data.count,
            ingredient_list: response.data.ingredients,
            ingredient_checked: new Array(response.data.count).fill().map((item, idx) => item = false)
        });
    }

    async getCategories() {
        let response = await axios.get('/category');

        this.setState({
            category_list: response.data.categories
        });
    }

    handleCheckChange(event) {
        let ingrCheck = [...this.state.ingredient_checked];
        let ingrSelect = [...this.state.selected_ingredients];

        ingrCheck[event.target.value] = event.target.checked;

        if (event.target.checked) {
            ingrSelect.push(this.state.ingredient_list[event.target.value]);
            ingrSelect.sort();
        } else {
            ingrSelect = ingrSelect.filter(x => x !== event.target.name);
        }

        this.setState({
            ingredient_checked: ingrCheck,
            selected_ingredients: ingrSelect
        });
    }

    handleCheckReset() {
        this.setState({
            ingredient_checked: new Array(this.state.ingredient_count).fill().map((item, idx) => item = false),
            selected_ingredients: []
        });
    }

    deleteIngredient(text) {
        let ingrCheck = [...this.state.ingredient_checked];
        let ingrSelect = [...this.state.selected_ingredients];

        let index = this.state.ingredient_list.findIndex(x => x === text);
        if (index !== -1) {
            ingrCheck[index] = false;
        }

        ingrSelect = ingrSelect.filter(x => x !== text);

        this.setState({
            ingredient_checked: ingrCheck,
            selected_ingredients: ingrSelect
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.title}>
                        mealmatch
                    </Typography>
                    <Button color="inherit" >{this.state.username}</Button>
                    <Button color="inherit" href={'/' + this.state.username}>Home</Button>
                    <Button color="inherit" href='/'>Logout</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor="left"
            >
                {/* <div className={classes.toolbar} /> */}
                {/* <Divider /> */}
                <Grid container direction="row" justify="center" alignItems="center">
                {this.state.selected_ingredients.map((text, index) => (
                    <React.Fragment key={index}>
                        <Grid item xs={3}>
                            <IconButton 
                                name={text} value={index} 
                                aria-label="delete" color="secondary" 
                                onClick={this.deleteIngredient.bind(this, text)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={9}>
                            {/* <Typography> */}
                                {text}
                            {/* </Typography> */}
                        </Grid>
                    </React.Fragment>
                ))}
                </Grid>
                <Divider />
                {/* <AppBar position="static">
                </AppBar> */}
                <div><Button
                    onClick={this.handleCheckReset.bind(this)} 
                    className={classes.clearBtn}>Clear
                </Button></div>
                <FormGroup>
                {this.state.ingredient_list.map((text, index) => (
                    <FormControlLabel
                        key={index} control={<Checkbox checked={this.state.ingredient_checked[index]} 
                        onChange={this.handleCheckChange} name={text} value={index} color="primary" />}
                        label={text}
                    />
                ))}
                </FormGroup>
            </Drawer>
            </div>
        );
    }
}

export default withStyles(useStyles)(ContributePage);
                