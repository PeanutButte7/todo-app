import type { NextPage } from 'next'
import TaskDashboard from '../components/Tasks/TaskDashboard/TaskDashboard';
import theme from '../styles/theme'
import { store } from '../store/store';
import { Provider } from 'react-redux'
import {MantineProvider} from '@mantine/core';

const Home: NextPage = () => {
    return (
        <MantineProvider theme={theme}>
            <Provider store={store}>
                <TaskDashboard/>
            </Provider>
        </MantineProvider>
    )
}

export default Home
