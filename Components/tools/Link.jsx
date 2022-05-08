import React from 'react';

import NextLink from 'next/link';
import MUILink from '@mui/material/Link';

// eslint-disable-next-line react/prop-types
export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <MUILink {...props} underline='hover'>
        {' '}
        {children}{' '}
      </MUILink>
    </NextLink>
  );
}
