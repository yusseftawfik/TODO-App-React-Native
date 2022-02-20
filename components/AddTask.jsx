import React, { useState } from 'react'
import { View } from 'react-native-web';
import { TextInput, Button } from 'react-native-paper';
import { styles } from '../styles';

function AddTask({ AddTask }) {
    const [taskTitle, setTaskTitle] = useState('');

    const changeText = (text) => {
        setTaskTitle(text)
    }

    const addTaskHandler = () => {
        let task = {
            title: taskTitle,
            state: false
        }
        AddTask(task),
            setTaskTitle('')
    }

    return (
        <>
            <View style={styles.addContainer}>
                <View>
                    <TextInput
                        label="Add Task!"
                        mode="outlined"
                        value={taskTitle}
                        onChangeText={changeText}
                    />
                </View>
                <View style={styles.addContainerBtn}>
                    <Button icon="plus" mode="contained" onPress={addTaskHandler}>
                        Add
                    </Button>
                </View>
            </View>
            <View>
            </View>
        </>
    )
}

export default AddTask;