/* eslint-disable object-curly-newline */
import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import { Link } from 'header/link'

const useStyles = makeStyles(theme => ({
  link: {
    marginLeft: 25,
    marginRight: 25,
    [theme.breakpoints.down('sm')]: { textAlign: 'center', flex: '1 100%', padding: 8 },
  },
}))

export const PrivacyPolicy = () => <Box className={useStyles().link}>
  <Link>Politica de confidențialitate</Link>
</Box>
