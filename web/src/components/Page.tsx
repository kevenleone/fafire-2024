import { Container, Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
  title: string;
}

function Page(props: PageProps) {
  return (
    <Container maxWidth='6xl' marginTop={20} marginBottom={20}>
      <Box marginBottom={10}>
        <Heading>{props.title}</Heading>
      </Box>

      {props.children}
    </Container>
  );
}

export default Page;
