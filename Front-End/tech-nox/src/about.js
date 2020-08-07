import React from "react";
import { Redirect } from 'react-router-dom';
import { fade, withStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import 'fontsource-roboto';

const useStyles = theme => ({
    root: {
        display: "flex",
        fontFamily: 'Roboto'
      },
    appBar: {
        backgroundColor:'black'
    },
    searchBar:{
        backgroundColor: 'black',
        height: '4rem',
        borderRadius: '5px',
        marginTop: '1rem'
    },
    title: {
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      fontFamily: 'Avenir',
      fontSize: "16px"
    },
    padding20: {
    padding: '20px 20px',
    },
    content_container: {
      background: '#FFFFFF',
      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.12)',
      borderRadius: '5px',
      transition: 'box-shadow 0.3s ease-in-out',
    },
    big_top_margin: {
    marginTop: '40px',
    },
    container: {
      width: 'auto',
      marginRight: '100px',
      marginLeft: '100px',
    },
    big_top_spacer: {
    paddingTop: '40px',
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      marginRight: '-15px',
      marginLeft: '-15px',
    },
    offset_sm_1: {
      marginLeft: '8.333333%',
    },

    col_sm_10: {
      msFlex: '0 0 83.333333%',
      flex: '0 0 83.333333%',
      maxWidth: '83.333333%',
    },
    col_sm_6: {
      msFlex: '0 0 50%',
      flex: '0 0 50%',
      maxWidth: '50%',
    },
    col_sm_3: {
      msFlex: '0 0 25%',
      flex: '0 0 25%',
      maxWidth: '25%',
    },
    row1: {
      display: 'flex',
      flexWrap: 'wrap',
      marginRight: '-15px',
      marginLeft: '-15px',
    },
    bottom_margin: {
      marginBottom: '20px',
    },
    bottom_spacer: {
      paddingBottom: '20px',
    },
    imageUpload: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%',
      marginBottom: '20px',
      marginTop: '-20px',
    },

  });

class AboutPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
            redirectToHome: false
        };

        this.handleMenu = this.handleMenu.bind(this);
        this.handleMenuClose = this.handleMenuClose.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleMenu = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        })
    };
    
    handleMenuClose = () => {
        this.setState({
            anchorEl: null
        })
    };

    handleLogout() {
        this.setState({
            redirectToHome: true
        });
    }

    render() {
      if (this.state.redirectToHome === true) {
          return <Redirect to={'/'} />
      }

      const { classes } = this.props;

      return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Box display='flex' flexGrow={1}>
                  <Typography variant="h6" noWrap>
                      <span style={{color: "#FFA500"}}>m</span>eal<span style={{color: "#FFA500"}}>m</span>atch
                  </Typography>
                  <Button color="inherit" style={{marginLeft:'5%'}} href={'/'}>Home</Button>
              </Box>
              <Button color="inherit" style={{marginRight:'2%'}} href={'/about'}>About</Button>
              <Button color="inherit" href={'/login'}>Login</Button>
            </Toolbar>
          </AppBar>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <div className={classes.content_container+' '+classes.container+' '+classes.padding20+' '+classes.big_top_margin}>
              <div className={classes.row+' '+classes.big_top_spacer}>
                <div className={classes.col_sm_10+' '+classes.offset_sm_1}>
                  <h1>About <span style={{color: "#FFA500"}}>m</span>eal<span style={{color: "#FFA500"}}>m</span>atch</h1>
                </div>
              </div>

              <div className={classes.row1+' '+classes.bottom_margin+' '+classes.bottom_spacer}>
                <div className={classes.col_sm_10+' '+classes.offset_sm_1}>
                  <p>
                    MealMatch learns perfectly what flavours and textures would work
best together using ingredients in the fridge and pantry which are easily available to you. With thousands
of recipes in its database, it does all the brainstorming work for you.
                  </p>

                  <p>
                    This site is the latest part of our ongoing project to make effective nutrition strategies available
                    to everyone, especially people who are too busy to get started on their own. What began
                    as a simple tool to help bodybuilders hit macronutrient
                    requirements created by just Louis, has grown into the current service supported by a small and
                    dedicated team.
                  </p>

                </div>
              </div>
              <img src={require('./static/images/about_image.jpg')}
                   alt="Food"
                   className={classes.imageUpload}
              />
              <br/>
              <hr/>

              <br/>

              <div className={classes.row1+' '+classes.top_margin}>
                  <div className={classes.col_sm_10+' '+classes.offset_sm_1}>
                      <h2>Why us?</h2>
                  </div>
              </div>

              <div className={classes.row1+' '+classes.top_spacer}>
                  <div className={classes.col_sm_10+' '+classes.offset_sm_1}>
                      <p>There is enough food produced in the world to feed everyone, but sadly one in every nine
                          people do not have enough food to eat, that is 793 million people worldwide who are
                          undernourished. Globally, the impacts of food waste are astounding. Eliminating global food
                          waste would save 4.4 million tonnes of CO2 a year, the equivalent of taking one in four cars off
                          the road. These are staggering figures. Wasted food not only affects the environment but also
                          our livelihoods and health. Australians discard up to 20% of the food they purchase. This equates
                          to 1 out of every 5 bags of groceries they purchase. The Government estimates food waste costs
                          the Australian economy $20 billion each year. These facts are alarming. While waste occurs
                          throughout the food value chain in Australia, roughly two- thirds of food waste is generated in
                          consumer-facing businesses (e.g. restaurants and retail outlets) or in the home.
                      </p>
                      <p>
                          People tend to have a limited set of ingredients on-hand with which to
                          prepare their meals. They can often be inexperienced with the recipe options that
                          are possible given a limited set of ingredients. This is where MealMatch comes in! It allows you to easily enter
                          the available ingredients and provides you with a set of exciting recipe options which are
                          possible based on those ingredients.
                      </p>
                  </div>
              </div>

              <br/><br/>
              <hr/>
              <br/>

              <div className={classes.row1+' '+classes.top_margin}>
                  <div className={classes.col_sm_10+' '+classes.offset_sm_1}>
                      <h2>Our whole team</h2>
                  </div>
              </div>

              <div className={classes.row1+' '+classes.big_top_spacer}>
                  <div className={classes.col_sm_6+' '+classes.offset_sm_1}>
                      <h4>Amritesh Singh</h4> <h6>Student, UNSW</h6>

                      <p>
                      I am a Master of Information Technology student at the University of New South Wales, 
                      with dual specialization in Artificial Intelligence, and Data Science and Engineering. 
                      I am highly motivated and pro-active with effective communication and organizational 
                      skills. I have been involved in team-based projects that have enabled me to thrive working in 
                      collaborative environments. I specialized in Robotics during my undergraduate period 
                      and I have worked on projects related to problems of cognition and automation. 
                      I am also interested in mathematics at the engineering level, and completed a course on 
                      multivariate analysis which allowed me to gain experience in the SAS language. 
                      My experience working on multiple projects based on software development, data science 
                      and machine learning, have given me the required experience in the field, while 
                      allowing me to inculcate the habit of thinking towards the logical solution of any 
                      problem.
                      </p>

                  </div>
                  <div className={classes.col_sm_3+' '+classes.offset_sm_1+' '+classes.top_margin}>
                      <img src={require('./static/images/Amritesh_Singh.png')}
                           title="Amritesh Singh" alt="Amritesh Singh"
                           style={{marginTop: '40px', borderRadius: '50%', border: '5px solid #eee', boxShadow: '0 3px 2px rgba(0, 0, 0, 0.3)'}}
                      />
                  </div>
              </div>

              <div className={classes.row1+' '+classes.big_top_spacer}>
                  <div className={classes.col_sm_6+' '+classes.offset_sm_1}>
                      <h4>Sahil Punchhi</h4> <h6>Student, UNSW</h6>

                      <p>
                        MealMatch was a capstone experience and culminating project of my masters coursework at UNSW.
                        I teamed up with my friends and we are continuously trying to improve the product and understand the
                        concerns of the user. Our aim is to reduce food wastage in Australia which is a staggering figure. This exhibition
                        was also a great journey for my Front-end learnings in React and our entire platform is built on that framework.
                      </p>

                      <p>
                        I am a postgraduate student in IT (majoring in Data Science and AI) at UNSW with nearly 3 years of experience
                        working in financial institutions (including JP Morgan). I enjoy adventure sports and steal time for my passion
                         to do oil paintings. I also love reading about technology.
                      </p>

                  </div>
                  <div className={classes.col_sm_3+' '+classes.offset_sm_1+' '+classes.top_margin}>
                      <img src={require('./static/images/Sahil_Punchhi.png')}
                           title="Sahil Punchhi" alt="Sahil Punchhi"
                           style={{marginTop: '40px', borderRadius: '50%', border: '5px solid #eee', boxShadow: '0 3px 2px rgba(0, 0, 0, 0.3)'}}
                      />
                  </div>
              </div>

              <div className={classes.row1+' '+classes.big_top_spacer}>
                  <div className={classes.col_sm_6+' '+classes.offset_sm_1}>
                      <h4>Rishabh Khurana</h4> <h6>Student, UNSW</h6>

                      <p>
                        I'm an engineer by trade and have had the opportunity to work as Software engineer at 
                        Accenture for 2+ years , during which I was a part of various projects belonging to domains 
                        such as banking/e-commerce, energy, hospitality, etc. I also have considerable amount of 
                        international experience when it comes to technology as I worked in Germany for 1 year. 
                        Our client was a leading bank based in Frankfurt and my role was mainly delivering technical 
                        presentations on the new features added during that particular quarter, and also involved 
                        developing, testing and enhancing the web application portal we were working on. 
                        I was a part of the core team for developing this product and my role also included working 
                        alongside software Architects, product owners and stakeholders to come up with a state of 
                        the art banking portal with the best tech available in the market at that time.
                      </p>

                  </div>
                  <div className={classes.col_sm_3+' '+classes.offset_sm_1+' '+classes.top_margin}>
                      <img src={require('./static/images/Rishabh_Khurana.png')}
                           title="Rishabh Khurana" alt="Rishabh Khurana"
                           style={{marginTop: '40px', borderRadius: '50%', border: '5px solid #eee', boxShadow: '0 3px 2px rgba(0, 0, 0, 0.3)'}}
                      />
                  </div>
              </div>

              <div className={classes.row1+' '+classes.big_top_spacer}>
                  <div className={classes.col_sm_6+' '+classes.offset_sm_1}>
                      <h4>Malay Raghuwanshi</h4> <h6>Student, UNSW</h6>

                      <p>
                      I am currently pursuing Masters in Information Technology (Data Science) and 
                      worked as a professional web and software developer. I have also worked for a 
                      government project to improve the current systems and help society. Currently, I am looking for 
                      an opportunity to work in an IT firm and learn new technologies.
                      </p>

                      <p>
                      I am a creative and people-oriented Computer Science Engineer with extensive 
                      project management experience. I also possess advanced knowledge of Cyber Security and Cloud Security.
                      </p>

                  </div>
                  <div className={classes.col_sm_3+' '+classes.offset_sm_1+' '+classes.top_margin}>
                      <img src={require('./static/images/Malay_Raghuwanshi.png')}
                           title="Malay Raghuwanshi" alt="Malay Raghuwanshi"
                           style={{marginTop: '40px', borderRadius: '50%', border: '5px solid #eee', boxShadow: '0 3px 2px rgba(0, 0, 0, 0.3)'}}
                      />
                  </div>
              </div>

              <br/>


              <hr/>
              <br/>

              <div className={classes.row1+' '+classes.top_margin}>
                  <div className={classes.col_sm_10+' '+classes.offset_sm_1}>
                      <h2>Attributions & Acknowledgements</h2>
                  </div>
              </div>

              <div className={classes.row1+' '+classes.top_spacer}>
                  <div className={classes.col_sm_10+' '+classes.offset_sm_1}>
                  <p>The Free License. We use the license called Creative
                          Commons Attribution-NoDerivs 3.0 Unported http://creativecommons.org/licenses/by-nd/3.0/ . Thanks
                          for letting us use your icons!
                      </p>
                      <p>
                          Other icons made by Freepik, Anas Ramadan, SimpleIcon from flaticon.com.
                      </p>
                      <p>Last but not least, big thanks to our mentor Maryam Khazaali for helping us take the product's
                          efficiency to the next level.
                      </p>
                  </div>
              </div>

              <br/><br/>

            </div>
          </main>
        </div>
      );
    }
}

export default withStyles(useStyles)(AboutPage);
