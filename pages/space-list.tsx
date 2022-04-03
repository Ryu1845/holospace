import { ActionIcon, Group, Header, useMantineColorScheme, Text } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';
import { SpaceGrid } from '../components/SpaceGrid/SpaceGrid'

export default function HomePage() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <>
            <Header height={60}>
                <Group sx={{ height: '100%' }} px={20} position="apart">
                    <Text variant="gradient" size="lg">HoloSpace</Text>
                    <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                        {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
                    </ActionIcon>
                </Group>
            </Header>
            <SpaceGrid />
        </>
    );
}