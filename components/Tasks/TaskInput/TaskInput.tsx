import {TextInput, Box, ActionIcon} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useAppDispatch } from '../../../store/hooks';
import {add} from '../../../store/tasksSlice';
import {IconPlus} from '@tabler/icons';

export default function TaskInput() {
    const dispatch = useAppDispatch();

    const form = useForm({
        initialValues: {
            taskName: '',
        },
        validate: {
            taskName: (value) => (value.length > 0 ? null : 'Task name is required'),
        }
    });

    function onSubmit(values: any) {
        dispatch(add(values.taskName));
        values.taskName = '';
    }

    return (
        <Box sx={{maxWidth: 300}} mx="auto">
            <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
                <TextInput
                    radius="xl"
                    size="md"
                    rightSection={
                        <ActionIcon type="submit" size={32} radius="xl" color="blue" variant="light">
                            <IconPlus size={18} stroke={2.5} />
                        </ActionIcon>
                    }
                    placeholder="Add a task"
                    rightSectionWidth={42}
                    {...form.getInputProps('taskName')}
                />
            </form>
        </Box>
    );
}