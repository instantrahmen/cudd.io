import NextLink from 'next/link';

// gatsby-style links in next
export const Link = ({ to, ...props }) => (
  <NextLink href={to} prefetch>
    <a {...props}></a>
  </NextLink>
);
