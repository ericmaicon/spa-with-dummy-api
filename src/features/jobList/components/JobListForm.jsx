import React from 'react';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { Button, Typography, Avatar, IconButton } from 'material-ui';
import BorderColorIcon from 'material-ui-icons/BorderColor';
import { Link } from 'react-router-dom'

const JobListForm = ({ jobs }) => (
  <div>
    {jobs.map(job => (
      <Card
        key={job.id}
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
        <CardActions disableActionSpacing>
          <Link to={`/detail/${job.id}`}>
            <IconButton aria-label="More">
              <BorderColorIcon />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    ))}
  </div>
);

export default JobListForm;