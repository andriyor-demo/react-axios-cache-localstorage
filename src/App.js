import React, {useEffect, useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {configure} from "./axiosCache";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});


function App() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    configure().then(async (api) => {
      const {data} = await api.get('/posts')
      console.log(data);
      setPosts(data);
    })
  }, [])


  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      {posts.map(post => <div style={{marginBottom: '15px'}}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography variant="body2" component="p">
              {post.body}
            </Typography>
          </CardContent>
        </Card>
      </div>)}
    </div>
  );
}

export default App;
