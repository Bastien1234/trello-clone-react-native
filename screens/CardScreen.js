import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Animated, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import constants from '../constants/constants';

import HeaderScreen from './HeaderScreen';
import OptionScreen from './OptionScreen';

import DB from './../fakeDB/db';
const card = {
        cardTitle: "truc cool",
        text: "sdkjfhskdfjhsdkfjhsdkfjhsdfjdsfh",
        members: [],
        startDate: "",
        endDate: "",
        checklist: [
            {
                title: "truc à faire 1",
                done: false
            },
            {
                title: "truc à faire 2",
                done: true
            }
        ]
    }

const WorkspaceScreen = ({ navigation }) => {

    const [database, setDatabase] = useState(card);
    const [writingText, setWritingText] = useState(false);
    const [addingChecklist, setAddingChecklist] = useState(false);
    const [newChecklistElementValue, setNewChecklistElementValue] = useState("");

    let [textDB, setTextDB] = useState("sdfjkhsdkfjhdsk jdfkjh kfdjhkdj hfdkfjhdfkjdhfkjh fdkjhfdkjhfdkjhf");
    const [currentWritingText, setCurrentWritingText] = useState("");
    let SELECTED = "Espace 1" // to change that shit please !!!

    let checkBoxesNumber = database.checklist.length;
    let checkListStatePopulate = [];
    database.checklist.forEach(el => {
        checkListStatePopulate.push([el.title, el.done])
    })

    console.log(checkListStatePopulate);

    // useEffect(() => {
    //     const DBcopy = DB[0];
    //     DBcopy.spaces.forEach(el => {
    //         if (el.name === SELECTED) {
    //             setDatabase(el);
    //         }
    //     })

    //     console.log("--------");
    //     (database!=={}) ? 
    //     console.log(database.containers[0].cards[0].checklist) : null // OMG change that shit !!!
    //     // console.log(database); // OMG change that shit !!!

        
    // }, [])

    



    return (
        <SafeAreaView style={styles.global}>
            {
                writingText === false ?

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

                :

                <View style={{
                    height: 65,
                    backgroundColor: "white",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                <Pressable
                    onPress={() => {
                        setCurrentWritingText("");
                        setWritingText(false);
                    }}>
                    <Image source={require('./../assets/svg/cancel.png')} style={styles.png} />
                </Pressable>
                <Text style={styles.title}>Modifier la description</Text>
                <Pressable
                    onPress={() => {
                        setTextDB(currentWritingText);
                        setWritingText(false);
                    }}>
                    <Image source={require('./../assets/svg/check.png')} style={{...styles.png, tintColor: "green"}} />
                </Pressable>
            </View>



            }
            

            <Text style={styles.subtitle}>Foot dans la liste choses à faire</Text>

            <View style={styles.textAreaContainer}>
                {
                    writingText === false ?
                    <Pressable
                        onPress={() => {
                            setWritingText(true);
                        }}>
                        <Text style={styles.textArea}>{textDB}</Text>
                    </Pressable>
                    
                    : 

                    <TextInput 
                        style={{width: "100%"}}
                        placeholder="placeholder"
                        defaultValue={textDB}
                        onChangeText={t => {
                            setCurrentWritingText(t);
                        }}
                    />
                }
            </View>

            <View style={styles.checklistHeader}>
                <Image source={require('./../assets/svg/check-box.png')} style={styles.png}/>
                <Text style={{fontSize: 17, marginLeft: 5}}>CHECKLISTS</Text>
            </View>

            <View>
                {
                    // Holding all the checklist elements here
                    (database!=={}) ?

                    database.checklist.map((el, idx) => {
                        return(
                            <View
                                key={idx}
                                style={styles.checklistElement}>
                                    <BouncyCheckbox
                                        style={{ marginTop: 16, alignSelf: "center" }}
                                        isChecked={el.done}
                                        disableBuiltInState
                                    />
                                    <Text>{el.title}</Text>

                            </View>
                        )
                    })

                    : null

                }

                {
                    addingChecklist === false ?

                    <Pressable
                        style={{...styles.bottomButton, width: "85%", alignSelf: "center", alignItems: "center"}}
                        onPress={() => setAddingChecklist(true)}>
                        <Text>Ajouter element à la checklist</Text>
                    </Pressable>

                    :

                    <View>
                        <TextInput 
                        style={{
                            height: 60,
                            width: "100%",
                            borderWidth: 1,
                            borderColor: "lightgrey",
                            paddingLeft: 15
                        }}
                        placeholder="Nouvel élément"
                        value={newChecklistElementValue}
                        onChangeText={t => setNewChecklistElementValue(t)}/>

                        <View style={{
                            flexDirection: "row",
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Pressable 
                                style={styles.bottomButton}
                                onPress={() => {
                                    setAddingChecklist(false)
                                }}>
                                <Text>Annuler</Text>
                            </Pressable>

                            <Pressable style={styles.bottomButton}>
                                <Text>Ajouter</Text>
                            </Pressable>
                        </View>
                    </View>
                    
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
        // alignSelf: "flex-start"
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
        borderWidth: 1,
        borderColor: "lightgrey",
        paddingTop: 10,
        paddingBottom: 10
    },

    textArea: {
        width: 350,
    },

    checklistHeader: {
        flexDirection: "row",
        alignItems: "center",
        height: 65,
        backgroundColor: "lightgrey"
    },

    checklistElement: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        height: 50,
        alignItems: "center",

    },

    bottomButton: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: "lightgrey",
        padding: 10
    }
})
