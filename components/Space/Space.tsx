import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

export function Space() {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    return (
        <div style={{ width: 340, margin: 'auto' }} >
            <Card shadow="sm" p="lg" mt={10}>
                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Text weight={500}>Space</Text>
                    <Badge color="pink" variant="light">
                        Live
                    </Badge>
                </Group>

                <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima perferendis facilis tempora, sed sint soluta ducimus porro vitae
                    vel reprehenderit earum eveniet velit assumenda molestiae tenetur.
                    Consectetur odio temporibus voluptates!
                </Text>

                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                    Listen now!
                </Button>
            </Card>
        </div>
    );
}