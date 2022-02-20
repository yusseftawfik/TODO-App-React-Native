import React from 'react';
import { Appbar } from 'react-native-paper';

function AppBar() {
    return (
        <>
            <Appbar.Header>
                <Appbar.Content titleStyle={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }} title="TODOApp" />
            </Appbar.Header>
        </>
    )
}

export default AppBar;