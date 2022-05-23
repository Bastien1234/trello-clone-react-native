import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Animated, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import constants from '../constants/constants';
import HeaderScreen from './HeaderScreen';
import OptionScreen from './OptionScreen';

import DB from './../fakeDB/db';

const WorkspaceScreen = ({ navigation }) => {

    const [database, setDatabase] = useState({});
    const [writingText, setWritingText] = useState(false);

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
            <View style={{
                    height: 65,
                    backgroundColor: "lightgrey",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                <Pressable>
                    <Image source={require('./../assets/svg/cancel.png')} style={styles.png} />
                </Pressable>
                <Text style={styles.title}>Scraping</Text>
            </View>

            <Text style={styles.subtitle}>Foot dans la liste choses à faire</Text>

            <View style={styles.textAreaContainer}>
                {
                    writingText === false ?
                    <Text style={styles.textArea}>sdfjkhsdkfjhdsk jdfkjh kfdjhkdj hfdkfjhdfkjdhfkjh fdkjhfdkjhfdkjhf</Text>
                    : null
                }
            </View>


            
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
        marginLeft: 15,
        marginRight: 10,
        alignSelf: "flex-start"
    },

    title: {
        fontSize: 25,
        marginLeft: 20
    },

    subtitle: {
        fontSize: 18,
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 15
    },

    textAreaContainer: {
        alignItems: "center",
    },

    textArea: {
        width: 350,
    }
})
