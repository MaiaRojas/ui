import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  body1: theme.typography.display6,
});

const TypographyDisplay6 = ({ classes, ...props }) => (
  <Typography
    classes={{
      body1: classes.body1,
    }}
    variant="body1"
    {...props}
  />
);

TypographyDisplay6.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(TypographyDisplay6);
