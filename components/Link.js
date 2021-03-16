import NextLink from 'next/link';
import classNames from 'clsx';
import { useRouter } from 'next/router';

export const Link = ({ href, className, ...props }) => {
  const router = useRouter();

  const classes = classNames(className, { active: href === router.pathname });
  return (
    <NextLink href={href}>
      <a className={classes} {...props}></a>
    </NextLink>
  );
};
