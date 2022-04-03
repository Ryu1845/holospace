import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Button, Group, Anchor } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Group position='center' mt={50}>
        <Button component='a' href='/space-list'>
          Go to Space List
        </Button>
      </Group>
    </>
  );
}
