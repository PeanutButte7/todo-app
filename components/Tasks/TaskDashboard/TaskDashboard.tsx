import TaskInput from '../TaskInput/TaskInput';
import {useAppSelector} from '../../../store/hooks';
import TaskCard from '../TaskCard/TaskCard';
import {Text, Stack} from '@mantine/core';
import { TaskDashboardStyled, TaskGroupStyled } from './TaskDashboard.styles';

export default function TaskDashboard() {
    const tasks = useAppSelector(state => state.tasks).tasks;

    // split tasks into completed and uncompleted
    const completedTasks = tasks.filter(task => task.completed);
    const uncompletedTasks = tasks.filter(task => !task.completed);

    return (
        <TaskDashboardStyled>
            <TaskInput/>
            <TaskGroupStyled>
                { uncompletedTasks.length > 0 && <Text weight='700'>Pending tasks</Text> }
                <Stack justify="flex-start" spacing="sm">
                    {uncompletedTasks.map((task, index) =>
                        <TaskCard key={index} id={task.id} name={task.name} completed={task.completed}/>
                    )}
                </Stack>
                { completedTasks.length > 0 && <Text weight='700'>Completed tasks</Text> }
                <Stack justify="flex-start" spacing="sm">
                    {completedTasks.map((task, index) =>
                        <TaskCard key={index} id={task.id} name={task.name} completed={task.completed}/>
                    )}
                </Stack>
            </TaskGroupStyled>
        </TaskDashboardStyled>
    )
}