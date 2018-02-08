import React from 'react';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { Button, Typography, Avatar, IconButton } from 'material-ui';
import ReplyIcon from 'material-ui-icons/Reply';
import { Link } from 'react-router-dom'

const JobDetailForm = ({ job }) => (
  <Card
    style={{
      margin: 20
    }}
  >
    <CardHeader
      avatar={
        <Avatar>
          <img src={job.company_logo} />
        </Avatar>
      }
      title={job.title}
      subheader={job.company}
    />
    <CardContent>
      <Typography component="p">{job.description}</Typography>
    </CardContent>
    <CardActions>
      <Link to='/'>
        <IconButton aria-label="More">
          <ReplyIcon />
        </IconButton>
      </Link>
    </CardActions>
  </Card>
);

export default JobDetailForm;