import React, { useState } from 'react';
import { Banner } from 'react-native-paper'
import AddTask from './AddTask';
import Todos from './Todos'

function Home() {
    const [visible, setVisible] = useState(false);
    const [tasks, setTasks] = useState([])

    const updateTaskState = () => {
        setTasks([...tasks])
    }

    const addTask = (task) => {
        setTasks([...tasks, task])
        if (!task.title) {
            setVisible(true)
            setTasks([...tasks])
        }
    }

    return (
        <>
            <Banner
                visible={visible}
                actions={[
                    {
                        label: 'Add Task',
                        onPress: () => setVisible(false),
                    },
                ]}>
                Please enter a task to add it to your TO-DO list!.
            </Banner>
            <AddTask AddTask={addTask} />
            <Todos list={tasks} update={updateTaskState} />
        </>
    )
}

export default Home;