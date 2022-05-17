import { StyleSheet, Text, View, Pressable, Animated, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import constants from '../constants/constants';

let ScreenHeight = Dimensions.get("window").height;

const OptionScreen = ({ navigation, showOptions, setShowOptions, optionAnim }) => {

    

    
  return (
    <SafeAreaView style={styles.global}>
      <Animated.View style={{backgroundColor:"red", flex: optionAnim}}>
          {/* Upper view */}
          <View style={styles.upperView}>
              <View style={styles.round}>
                  <Text style={styles.roundText}>BC</Text>
              </View>
              <Text style={styles.textTop}>Bastien Clementi</Text>
              <Text style={styles.textTop}>@bastienclementi</Text>
              <Text style={styles.textTop}>bastien.clementi@gmail.com</Text>
          </View>
      </Animated.View>
    
       
        <View  style={styles.right}>
            <Pressable 
                style={{width:"100%", height: "100%"}}
            onPress={() => {
            setShowOptions(false)}}>
            </Pressable>
        </View>
        
      
    </SafeAreaView>
  )
}

export default OptionScreen

const styles = StyleSheet.create({
    global: {
        flexDirection: "row",
        position: "absolute",
        width: "100%",
        height: ScreenHeight
    },

    left: {
        backgroundColor: "red",
        flex: 1
    },

    right: {
        flex: 1,
        backgroundColor: "black",
        opacity: 0.7
    },

    upperView: {
        backgroundColor: constants.blue,
        paddingBottom: 20
    },

    round: {
        backgroundColor: "darkblue",
        justifyContent: "center",
        alignItems: "center", 
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 15

    },

    roundText: {
        fontSize: 45,
        color: "white"
    },

    textTop: {
        color: "white",
        fontSize: 17,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
    }
})