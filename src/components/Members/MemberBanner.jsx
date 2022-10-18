/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types';
import {
  CardMedia, Grid, Typography,
} from '@mui/material'

const MemberBanner = ({ data }) => (
  <>
    {data && (
      <Grid container xs={12} width="100%" display="flex" flexDirection="row" justifyContent="center" spacing={2}>
        <Grid item container xs={12} md={5} display="flex" flexDirection="column" justifyContent="center">
          <Typography style={{
            fontWeight: 700,
            color: 'black',
            fontSize: 24,
            textAlign: 'center',
            width: '100%',
            marginBottom: 20,
          }}
          >
            {data.name}
          </Typography>

          <Typography style={{
            marginBottom: 20,
            color: 'black',
            fontSize: 18,
            textAlign: 'center',
            width: '100%',
          }}
          >
            {data.role}

          </Typography>

          <Typography style={{

            color: 'black',
            fontSize: 16,
            textAlign: 'justify',
            width: '100%',
          }}
          >
            Lorem ipsum dolor sit amet, consectetur adip  odio, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  et  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

          </Typography>

        </Grid>
        <Grid item xs={12} md={5} display="flex" minHeight="400px" justifyContent="center">
          <CardMedia
            sx={{
              maxWidth: 350, maxHeight: 400, borderRadius: '20px', position: 'relative',
            }}
            component="img"
            image={data.image}
            alt={data.name}
          />
        </Grid>
      </Grid>
    )}

  </>
)
MemberBanner.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
  }),
}
MemberBanner.defaultProps = {
  data: null,
}
export default MemberBanner
