import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React,{ useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const blue = "rgb(70, 130, 180)";
const iconsSize = 25;

const HeaderScreen = ({ navigation, title, showOptions, setShowOptions, optionKickingIn }) => {

    // const [showOptions, setShowOptions] = useState(false);

  return (
    <SafeAreaView style={styles.header}>
        <Pressable onPress={() => {
            setShowOptions(true);
            optionKickingIn();
        }}>
            <Image source={require('./../assets/svg/options.png')} style={styles.png}/>
        </Pressable>
        
        <Text style={styles.title}>{title}</Text>

        <Pressable>
            <Image source={require('./../assets/svg/mag-glass.png')} style={styles.png}/>
        </Pressable>

        <Pressable>
            <Image source={require('./../assets/svg/bell.png')} style={styles.png}/>
        </Pressable>
    </SafeAreaView>
  )
}

export default HeaderScreen

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: blue,
        height: 60,
        alignItems: 'center'
    },

    png: {
        height: iconsSize,
        width: iconsSize,
        tintColor: "white",
        marginLeft: 10,
        marginRight: 10
    },

    title: {
        color: "white",
        flex: 1,
        fontSize: 25,
        marginLeft: 20
    },
})