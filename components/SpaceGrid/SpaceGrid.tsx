import { SimpleGrid } from '@mantine/core';
import { Space } from '../Space/Space';


export function SpaceGrid() {
    return (
        <SimpleGrid
            cols={4}
            spacing="lg"
            breakpoints={[
                { maxWidth: 980, cols: 3, spacing: 'md' },
                { maxWidth: 755, cols: 2, spacing: 'sm' },
                { maxWidth: 600, cols: 1, spacing: 'sm' },
            ]}
        >
            <Space />
            <Space />
            <Space />
            <Space />
            <Space />
            <Space />
            <Space />
            <Space />
            <Space />
            <Space />
            <Space />
        </SimpleGrid>
    )
}