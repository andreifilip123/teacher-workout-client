import React from 'react'
import { Box, Grid } from '@material-ui/core'

import { Title } from 'home/features/secondary/about/title'
import { Description } from 'home/features/secondary/about/description'

export const About = () => <Box pt={10}>
  <Grid container>
    <Title />
    <Description />
  </Grid>
</Box>
