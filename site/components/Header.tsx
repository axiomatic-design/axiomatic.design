import Link from 'next/link';
import { Flex, Logo, Link as AxLink } from '@axiomatic/react-components';
import { Nav } from './Nav';

function Header({ starCount }) {
  return (
    <Flex
      as="header"
      ax={{
        padding: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Link href="/">
        <AxLink href="/" ax={{ textDecoration: 'none' }}>
          <Logo />
        </AxLink>
      </Link>
      <Nav starCount={starCount} />
    </Flex>
  );
}

export { Header };
