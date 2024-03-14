import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from './../../Utils/Colors'

export default function LoginScreen() {
  return (
    <View style={{
        displays: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:80
    }}>
        <Image source={require('./../../../assets/images/logo1.png')} 
            style={styles.LogoImage}
        />
        <Image source={require('./../../../assets/images/ev-charging1.jpg')}
            style={styles.bgImage}
        />
        <View style={{padding:20}}>
            <Text style={styles.heading}>Your UltimatevEV Chargin Station Finder App</Text>
            <Text style={styles.desc}>Find EV charging station near you, plan trip and so much more in just one click </Text>
            <TouchableOpacity style={styles.button}
            onPress={() =>console.log('Button Clicked')}
            >
                <Text style={{
                    color:Colors.WHITE,
                    textAlign:'center',
                    fontFamily:'outfit',
                    fontSize:17
                }}>Login with Google</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    LogoImage:{
        width:200,
        height:40,
        objectFit: 'contain',
    },
     bgImage:{
        width:'100%',
        height:240,
        marginTop:20,
        objectFit:'cover' 
     },
     heading:{
        fontSize:25,
        fontWeight: 'outfit-bold',
        textAlign: 'center',
        marginTop: 20
     },
     desc:{
        fontSize:17,
        fontWeight: 'outfit',
        marginTop: 25,
        textAlign: 'center',
        color:Colors.GRAY
     },
     button:{
        backgroundColor:Colors.PRIMARY,
        padding:16,
        display:'flex',
        borderRadius:99,
        marginTop:70
     }
})