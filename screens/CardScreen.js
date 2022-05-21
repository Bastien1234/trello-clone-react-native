import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Animated, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import constants from '../constants/constants';
import HeaderScreen from './HeaderScreen';
import OptionScreen from './OptionScreen';

import DB from './../fakeDB/db';

const WorkspaceScreen = ({ navigation }) => {

    const [database, setDatabase] = useState({});

    let SELECTED = "Espace 1" // to change that shit please !!!

    useEffect(() => {
        const DBcopy = DB[0];
        DBcopy.spaces.forEach(el => {
            if (el.name === SELECTED) {
                setDatabase(el);
            }
        })
        console.log(database)
    }, [])



    return (
        <SafeAreaView style={styles.global}>
            <Pressable style={{
                height: 50,
                backgroundColor: "lightgrey",
                justifyContent: "center",
                alignItems: "flex-start"
            }}>
                <Image source={require('./../assets/svg/cancel.png')} style={styles.png} />
            </Pressable>
        </SafeAreaView>
    )
}

export default WorkspaceScreen;

const styles = StyleSheet.create({
    global: {
        backgroundColor: "white",
        flex: 1,
    },

    png: {
        height: constants.iconsSize,
        width: constants.iconsSize,
        tintColor: "black",
        marginLeft: 10,
        marginRight: 10,
        alignSelf: "center"
    },
})
