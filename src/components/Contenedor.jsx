import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 300,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
      },
      media: {
        paddingTop: "56.25%"
      },
      content: {
        textAlign: "left",
        padding: theme.spacing.unit * 3
      },
      divider: {
        margin: `${theme.spacing.unit * 3}px 0`
      },
      heading: {
        fontWeight: "bold"
      },
      subheading: {
        lineHeight: 1.8
      }
  }));

const Contenedor = (props) => {
    const classes = useStyles();

  return (
      <div className="margin">
        <Card className={classes.card}>
            <CardMedia
            className={classes.media}
            image={
                props.src
            }
            />
            <CardContent className={classes.content}>
            <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
            >
                {props.title}
            </Typography>
            <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
            >
                {props.description}
            </Typography>
            <Divider className={classes.divider} light />
            </CardContent>
        </Card>
    </div>
  );
};

export default Contenedor;