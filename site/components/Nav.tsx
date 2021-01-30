import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Badge, Icon, Flex } from '@axiomatic/react-components';

const NavLink = ({ active, children, ...props }) => (
  <Box
    as="a"
    {...props}
    ax={{
      color: 'navLink',
      marginLeft: 4,
      textDecoration: 'none',
      position: 'relative',
      transition: 'color 0.2s ease-in-out',
      '&::after': active
        ? {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: '-2px',
            right: '-2px',
            height: '3px',
            backgroundColor: 'primary',
            borderRadius: '3px',
          }
        : {},
      '&:hover': {
        color: 'primary',
      },
    }}
  >
    {children}
  </Box>
);

function Nav({ starCount }) {
  const router = useRouter();

  return (
    <Flex
      as="nav"
      ax={{ alignItems: 'center', marginLeft: 'auto', flexWrap: 'nowrap' }}
    >
      <Link href="/design-systems" passHref>
        <NavLink href="#" active={router.asPath.includes('/design-systems')}>
          Learn
        </NavLink>
      </Link>
      <Link href="/articles" passHref>
        <NavLink active={router.asPath.includes('/articles')}>Articles</NavLink>
      </Link>
      <Link href="/open-source" passHref>
        <NavLink active={router.asPath.includes('/open-source')}>
          Open Source
        </NavLink>
      </Link>
      <Badge
        pill
        backgroundColor="navPill"
        color="navPillText"
        ax={{ marginLeft: 2 }}
      >
        <Icon name="star" size="12px" ax={{ marginRight: 1 }} />
        {starCount}
      </Badge>
      <Link href="/consulting" passHref>
        <NavLink active={router.asPath.includes('/consulting')}>
          Consulting
        </NavLink>
      </Link>
      <Link href="/newsletter" passHref>
        <NavLink active={router.asPath.includes('/newsletter')}>
          Newsletter
        </NavLink>
      </Link>
    </Flex>
  );
}

export { Nav };
