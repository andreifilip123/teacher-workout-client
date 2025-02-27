import React from 'react'
import { makeStyles, Box, Grid } from '@material-ui/core'

import { About } from 'layout/footer/nav-buttons/about'
import { Donate } from 'layout/footer/nav-buttons/donate'
import { PrivacyPolicy } from 'layout/footer/nav-buttons/privacy-policy'
import { Terms } from 'layout/footer/nav-buttons/terms'

const useStyles = makeStyles(theme => ({
  navButtons: {
    order: 2,
    flexBasis: '50%',
    [theme.breakpoints.down('sm')]: { order: 2, flexBasis: '100%' },
  },
}))

export const NavButtons = () => <Grid item className={useStyles().navButtons}>
  <Box mb={4}>
    <Grid item container justify={'center'} alignItems={'center'}>
      <Terms />
      <PrivacyPolicy />
      <About />
      <Donate />
    </Grid>
  </Box>
</Grid>
