import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Animated, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import constants from '../constants/constants';
import HeaderScreen from './HeaderScreen';
import OptionScreen from './OptionScreen';

import DB from './../fakeDB/db';

const WorkspaceScreen = ({ navigation }) => {

    const [database, setDatabase] = useState({});
    const [addingCard, setAddingCard] = useState(false);
    const [addingList, setAddingList] = useState(false);

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


    const [showOptions, setShowOptions] = useState(false);

    const optionAnim = useRef(new Animated.Value(0)).current;
    const addCardAnim = useRef(new Animated.Value(0)).current;

    const optionKickingIn = () => {
        Animated.timing(optionAnim, {
            toValue : 4,
            duration: 555,
            useNativeDriver: false
        }).start();
    }

    const newCardAnimation = () => {
        Animated.timing(addCardAnim, {
            toValue: 1,
            duration: 333,
            useNativeDriver: false
        }).start();
    }

    return (
        <SafeAreaView style={styles.global}>
            {
                addingCard === false ? 
                <HeaderScreen 
                title={SELECTED} 
                showOptions={showOptions} 
                setShowOptions={setShowOptions}
                optionKickingIn={optionKickingIn}/> :

                // Adding card header
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: constants.blue,
                    height: 60,
                    alignItems: 'center',
                }}>
                    <Pressable>
                        <Image source={require('./../assets/svg/cancel.png')} style={styles.png}/>
                    </Pressable>

                    <Text style={{
                        color: "white",
                        flex: 1,
                        fontSize: 25,
                        marginLeft: 20,
                        alignSelf: "center"
                    }}>Ajouter une carte...</Text>

                    <Pressable>
                    <Image source={require('./../assets/svg/check.png')} style={styles.png}/>
                    </Pressable>
                </View>
            }
            <View style={styles.ScrollViewContainer}>
            <ScrollView style={styles.mainBody} horizontal={true}>
                {
                    database["containers"] ? 
                    
                    database.containers.map((cont, idx) => {
                        return(
                            <View style={styles.card} key={idx}>
                                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                    <Text
                                        style={{
                                            marginLeft: 10,
                                            fontSize: 17,
                                            marginTop: 10,
                                            marginBottom: 20
                                        }}
                                    >{cont.title}</Text>
                                    <Image source={require('./../assets/svg/cancel.png')} style={{height: 20, width: 20, marginRight: 15}}/>
                                </View>
                                
                                <View>
                                    {
                                        cont.cards.map((card, cardIdx) => {
                                            let totalCheckBoxes = 0;
                                            let actualCheckedBoxes = 0;

                                            for (let el of card.checklist) {
                                                if (el.done === true) {
                                                    totalCheckBoxes ++;
                                                    actualCheckedBoxes ++;
                                                } else {
                                                    totalCheckBoxes ++;
                                                }
                                            }
                                            return(
                                                <View 
                                                    key={cardIdx}
                                                    style={{
                                                        backgroundColor: "white",
                                                        width: "95%",
                                                        alignSelf: "center",
                                                        borderRadius: 5,
                                                        marginBottom: 5
                                                    }}>
                                                    <Text style={{marginLeft: 10, marginTop: 8}}>{card.cardTitle}</Text>
                                                    <View style={{
                                                        flexDirection: "row"
                                                    }}>
                                                        <Image 
                                                            source={require('./../assets/svg/check-box.png')}
                                                            style={{
                                                                height: 15, width: 15, marginLeft: 30
                                                            }}/>
                                                        <Text style={{fontSize: 15, marginLeft: 15, marginBottom: 8}}>{actualCheckedBoxes}/{totalCheckBoxes}</Text>
                                                    </View>
                                                    
                                                </View>
                                                )
                                        })
                                    }
                                </View>
                                <Pressable 
                                    style={{
                                        marginTop: 25,
                                        marginBottom: 15
                                    }}
                                    onPress={() => {
                                        setAddingCard(!addingCard)
                                        newCardAnimation();
                                    }}>
                                    <Text style={{
                                        marginLeft: 10,
                                        color: "green"
                                    }}>+ Ajouter une carte</Text>
                                </Pressable>

                            </View>
                            )
                    })

                    : null
                }

                <Pressable 
                    style={styles.addList}
                    >
                    <Text style={{color: "green", fontSize: 25}}>Ajouter une liste</Text>
                </Pressable>
            </ScrollView>
            </View>

            {addingCard === true ?

            <View style={{
                flex: 1,
                backgroundColor: "white",
            }}>
                <Animated.View style={{
                    opacity: addCardAnim,
                }}>
                    <View style={{
                        flexDirection: "row", 
                        justifyContent: "center", 
                        alignItems: "center",
                        paddingTop: 15,
                        height: 60,
                        fontSize: 25,
                        }}>
                        <TextInput 
                            placeholder="Ajouter nouvelle carte..."
                            style={{
                                color: "green",
                                backgroundColor: "lightgrey",
                                borderRadius: 5,
                                height: 45,
                                paddingLeft: 10,
                                width: 200,
                                marginRight: 5,
                            }}
                        />
                        <Pressable>
                            <Image 
                                source={require('./../assets/svg/cancel.png')} 
                                style={{height: 20, width: 20}}/>
                        </Pressable>
                    </View>
                    
                    <Pressable style={{
                        alignSelf: "center",
                        marginTop: 10,
                        backgroundColor: "lightgreen",
                        width: 100,
                        height: 35,
                        borderRadius: 5,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Text>Ajouter</Text>
                    </Pressable>
                </Animated.View>
            </View>
            
            

            : 
            
            <View style={{backgroundColor: "white", flex:1}}></View>}



            { showOptions === true ? 
                <OptionScreen 
                    showOptions={showOptions} 
                    setShowOptions={setShowOptions}
                    optionAnim={optionAnim}
                    /> : null }
            
        </SafeAreaView>
    )
}

export default WorkspaceScreen;

const styles = StyleSheet.create({
    global: {
        backgroundColor: constants.blue,
        flex: 1,
        marginBottom: 50
    },

    mainBody: {

        backgroundColor: "white",
        height: 150
    },

    card: {
        backgroundColor: "lightgrey",
        width: 300,
        marginLeft: 20,
        marginRight: 5,
        marginTop: 15,
        borderRadius: 5,
        height: 225
    },

    addList: {
        backgroundColor: "white", 
        alignItems: "center", 
        justifyContent: "center", 
        height: 50, 
        marginTop: 15, 
        width: 200,
        marginRight: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "lightgrey",
        fontSize: 20},

        ScrollViewContainer: {
            height: 275
    },

    png: {
        height: constants.iconsSize,
        width: constants.iconsSize,
        tintColor: "white",
        marginLeft: 10,
        marginRight: 10,
        alignSelf: "center"
    },
})
