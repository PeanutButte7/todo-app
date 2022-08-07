import { Text, Paper, Tooltip } from '@mantine/core';
import {Task} from '../Task';
import {useAppDispatch} from '../../../store/hooks';
import {complete, restore} from '../../../store/tasksSlice';

export default function TaskCard({id, name, completed}: Task) {
    const dispatch = useAppDispatch();

    function completeTask() {
        dispatch(complete(id))
    }

    function restoreTask() {
        dispatch(restore(id))
    }

    return (
        <Tooltip radius='md' label="Click on the task to change its status" color='gray' position='top-start'>
            {!completed
                ? <Paper shadow="xs" radius="lg" p="md" onClick={completeTask}>
                    <Text>{name}</Text>
                </Paper>
                : <Paper onClick={restoreTask}>
                    <Text color='dimmed' sx={{ textDecorationLine: 'line-through' }}>{name}</Text>
                </Paper>
            }
        </Tooltip>
    );
}