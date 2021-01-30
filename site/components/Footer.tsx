import { Box, Flex, Text, Logo } from '@axiomatic/react-components';

const FooterText = ({ children }) => (
  <Text ax={{ color: 'footerSubText ' }}>{children}</Text>
);

function Footer() {
  return (
    <Flex
      as="footer"
      ax={{
        backgroundColor: 'footer',
        flexDirection: 'column',
        padding: 4,
      }}
    >
      <Flex
        ax={{
          width: '100%',
        }}
      >
        <Flex ax={{ width: '25%', alignItems: 'flex-start' }}>
          <Logo iconOnly />
          <Box ax={{ paddingLeft: 4 }}>
            <FooterText ax={{ color: 'footerText' }}>Axiomatic</FooterText>
            <FooterText ax={{ color: 'footerSubText' }}>About</FooterText>
            <FooterText ax={{ color: 'footerSubText' }}>Contact</FooterText>
          </Box>
        </Flex>
        <Flex ax={{ width: ['25%'] }}>hello</Flex>
        <Flex ax={{ width: '25%' }}>hello</Flex>
        <Flex ax={{ width: '25%' }}>hello</Flex>
      </Flex>
      <Text
        ax={{
          marginX: 'auto',
          marginTop: 3,
          color: 'footerText',
          fontWeight: 'bold',
          fontSize: 1,
        }}
      >
        Copyright &copy; 2021 Axiomatic
      </Text>
    </Flex>
  );
}

export { Footer };
