import React, { useState } from 'react'
import { View, FlatList, CheckBox } from 'react-native-web';
import { Divider, Headline, Card, Paragraph, Title } from 'react-native-paper';

function Todos({ list, update }) {
    const [compTask, setCompTask] = useState([]);

    let numberOfUnCompletedTasks = [...list].length;
    let numberOfCompletedTasks = [...compTask].length;

    let numberOfTasks = numberOfUnCompletedTasks - numberOfCompletedTasks;

    const uncompletedTasks = () => {
        if (numberOfTasks === 0) {
        } else {
            return (`You have ${numberOfTasks} Uncompleted Tasks of ${numberOfUnCompletedTasks} Tasks`)
        }
    }

    return (
        <>
            <View>
                <Headline style={{ textAlign: 'center', fontWeight: 'bold', margin: 10 }}>
                    Tasks
                </Headline>
                <Divider />
                <Title style={{ textAlign: 'center', fontWeight: 'bold', margin: 5 }}>
                    {uncompletedTasks()}
                </Title>
                <FlatList
                    data={list || []}
                    renderItem={({ item: task, index }) => {
                        return (
                            <>
                                <View style={{ margin: 10 }}>
                                    <Card style={{ padding: 20, display: task.state ? 'none' : 'block' }}>
                                        <Card.Title
                                            title={`Task ${index + 1} `}
                                            titleStyle={{
                                                fontWeight: 'bold',
                                                fontSize: 30,
                                                color: '#0022ff',
                                                textAlign: 'center'
                                            }}
                                        />
                                        <View style={{
                                            flexDirection: 'row',
                                            flex: 1,
                                            justifyContent: 'space-between',
                                        }}>
                                            <Card.Content>
                                                <Paragraph
                                                    style={{ fontSize: 20 }}
                                                >
                                                    {task.title}
                                                </Paragraph>
                                            </Card.Content>
                                            <Card.Actions>
                                                <CheckBox
                                                    key={index}
                                                    color="#0022ff"
                                                    value={task.state}
                                                    onValueChange={
                                                        () => {
                                                            task.state = true;
                                                            setCompTask([...compTask, task])
                                                            update()
                                                        }
                                                    }
                                                />
                                            </Card.Actions>
                                        </View>
                                    </Card>
                                </View>
                            </>
                        )
                    }}
                />
            </View>
        </>
    )
}

export default Todos;
