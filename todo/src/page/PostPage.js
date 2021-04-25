import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStylesGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const useStylesInput = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function PostPage() {
  const classesGrid = useStylesGrid();
  const classesInput = useStylesInput();
  const [title, setTitle] = useState("abc")
  const [body, setBody] = useState("xyz")
  const klikPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          body,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
  }
  const updateFun = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));
  }

  useEffect(()=>{
    updateFun()
  }, [])

  useEffect(()=>{
    klikPost()
  }, [title, body])

  return (
    <div className={classesGrid.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classesGrid.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper className={classesGrid.paper}>
            <form className={classesInput.root} noValidate autoComplete="off">
                <TextField onChange={(e)=>setTitle(e.target.value)} value={title} id="title" label="Title" variant="outlined" />
                <TextField onChange={(e)=>setBody(e.target.value)} value={body} id="body" label="Body" variant="outlined" />
                <Button onClick={()=>klikPost()} variant="contained" color="primary">
                    Primary
                </Button>
            </form>
            </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classesGrid.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
