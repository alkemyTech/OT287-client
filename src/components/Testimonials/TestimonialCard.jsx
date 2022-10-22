import * as React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Avatar, Button, Grid } from '@mui/material';
import { useState } from 'react';

export default function TestimonialCard({ testimonial }) {
  const { name, image, content } = testimonial
  const [readMore, setReadMore] = useState(false)

  return (
    <Grid
      container
      sx={{
        width: { xs: 360, sm: 212 }, minHeight: { xs: 154, sm: 254 }, backgroundColor: 'rgba(253, 255, 164, 1)', borderRadius: '20px', boxShadow: 'none',
      }}
      padding={2}
      flexWrap="wrap"
    >
      <Grid item container flexDirection={{ xs: 'row', sm: 'column' }} flexWrap="nowrap" alignItems={{ xs: 'center', sm: 'start' }}>
        <Avatar src={image} sx={{ width: 65, height: 65 }} alt="" />
        <Grid item container ml={{ xs: '1rem', sm: '0' }} mt={{ xs: '0', sm: '1rem' }}>
          <Grid item container>
            <Typography variant="subtitle1" fontWeight="semibold">
              {name}
            </Typography>
          </Grid>
          <Grid item container>
            <Typography
              fontSize="12px"
              fontWeight="light"
              dangerouslySetInnerHTML={{ __html: readMore ? content : content.substr(0, 100) }}
            />
            {content.length > 120 && (
            <Button
              size="small"
              sx={{
                textTransform: 'lowercase', fontWeight: '400', fontSize: '12px',
              }}
              onClick={() => setReadMore((prev) => !prev)}
            >
              {readMore ? '...ver menos' : '...ver más'}
            </Button>
            )}
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
}

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
}
