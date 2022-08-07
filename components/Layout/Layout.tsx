import {ReactNode} from "react";
import {Container, Spoiler} from '@mantine/core';
import { PageHeader } from './Layout.styles';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps ) {
    return (
        <Container size="xs">
            <PageHeader>Add your tasks below</PageHeader>
            <main>{children}</main>
            <Spoiler sx={{textAlign: 'center'}} maxHeight={0} showLabel="Learn more about this demo" hideLabel="Hide">
                This is a quick To-do app demo created over the weekend to demonstrate the use of Next.js and Redux for data management and Mantine for UI, styling and accessibility.
            </Spoiler>
        </Container>
    )
}