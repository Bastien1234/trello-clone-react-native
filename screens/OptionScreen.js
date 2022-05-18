import { StyleSheet, Text, View, Pressable, Image, Animated, Dimensions, TouchableHighlight } from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import constants from '../constants/constants';

let ScreenHeight = Dimensions.get("window").height;

const OptionScreen = ({ navigation, showOptions, setShowOptions, optionAnim }) => {

    const [isPress, setIsPress] = React.useState(false);

    const menuArray = [
        ["Tableaux", "./../assets/svg/tableaux.png"],
        // ["Accueil", "acceuil.png"],
        // ["Espace de travail trello", "people.png"],
        // ["Mes cartes", "card.png"],
        // ["Paramètres", "settings.png"],
        // ["Au secours !", "help.png"]
    ]

    const touchProps = {
        activeOpacity: 1,
        underlayColor: 'grey',
        style: styles.btnNormal,
        // onHideUnderlay: () => setIsPress(false),
        // onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('hello'),
      };
    

    
  return (
    <SafeAreaView style={styles.global}>
      <Animated.View style={{flex: optionAnim, ...styles.left}}>

          {/* Upper view */}
          <View style={styles.upperView}>
              <View style={styles.round}>
                  <Text style={styles.roundText}>BC</Text>
              </View>
              <Text style={styles.textTop}>Bastien Clementi</Text>
              <Text style={styles.textTop}>@bastienclementi</Text>
              <Text style={styles.textTop}>bastien.clementi@gmail.com</Text>
          </View>

          {/* Bottom view */}
          <View style={styles.bottomView}>
                <TouchableHighlight {...touchProps}>
                    <View style={{flexDirection: "row"}}>
                        <Image  
                            style={styles.bottomViewImage}
                            source={require("./../assets/svg/tableaux.png")}/>
                        <Text style={styles.bottomViewText}>Tableaux</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight {...touchProps}>
                    <View style={{flexDirection: "row"}}>
                        <Image  
                            style={styles.bottomViewImage}
                            source={require("./../assets/svg/accueil.png")}/>
                        <Text style={styles.bottomViewText}>Accueil</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight {...touchProps}>
                    <View style={{flexDirection: "row"}}>
                        <Image  
                            style={styles.bottomViewImage}
                            source={require("./../assets/svg/people.png")}/>
                        <Text style={styles.bottomViewText}>Espace de travail Trello</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight {...touchProps}>
                    <View style={{flexDirection: "row"}}>
                        <Image  
                            style={styles.bottomViewImage}
                            source={require("./../assets/svg/card.png")}/>
                        <Text style={styles.bottomViewText}>Mes cartes</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight {...touchProps}>
                    <View style={{flexDirection: "row"}}>
                        <Image  
                            style={styles.bottomViewImage}
                            source={require("./../assets/svg/settings.png")}/>
                        <Text style={styles.bottomViewText}>Paramètres</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight {...touchProps}>
                    <View style={{flexDirection: "row"}}>
                        <Image  
                            style={styles.bottomViewImage}
                            source={require("./../assets/svg/help.png")}/>
                        <Text style={styles.bottomViewText}>Au secours !</Text>
                    </View>
                </TouchableHighlight>
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
        backgroundColor: "white",
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
        marginLeft: 15,
        borderWidth: 1,
        borderColor: "black"

    },

    roundText: {
        fontSize: 45,
        color: "white"
    },

    textTop: {
        color: "white",
        fontSize: 17,
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 15,
    },

    bottomView: {

    },

    btnNormal: {
        flexDirection: "row",
        alignItems: "center",
        height: 55,
        // marginTop: 15,
        // marginBottom: 7,
        // borderBottomColor : "grey",
        // borderBottomWidth: 1,
        backgroundColor: "white"

    },

    btnPress: {
        flexDirection: "row",
        height: 30,
        marginTop: 15,
        // marginBottom: 7,
        // borderBottomColor : "grey",
        // borderBottomWidth: 1,
        backgroundColor: "white"
    },

    bottomViewImage: {
        height: 20,
        width: 20,
        tintColor: "black",
        marginLeft: 15,
        alignSelf: "center"
    },

    bottomViewText: {
        color: "black",
        marginLeft: 30,
        alignSelf: "center",
        fontSize: 15,
    }
})