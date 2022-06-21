import React from "react";

import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput} from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.task}>
            <View style={styles.taskleft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.tasktext}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>

    )
}

const styles = StyleSheet.create({
    task: {
        backgroundColor: '#E9967A',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    taskleft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#FF0000',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    tasktext: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;
