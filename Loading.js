import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import 'react-native-gesture-handler';


export default function Loading() {
    return (
    <LinearGradient colors={['#654ea3', '#eaafc8']}  style = {styles.container}>
        <ScrollView  style={styles.MainScrollView} showsVerticalScrollIndicator={false}>
            <StatusBar barStyle='dark-content'/>
                <View style={styles.part_screen}>
                    <Text style = {styles.text_header}>Getting Weather</Text>
                    <Text style = {styles.text}>- -</Text>
                </View>
                <View style={styles.part_screen}>
                    <View style = {styles.Transparent_zone}>
                        <Text style={styles.Transparent_text}>Forecast for 24 hours</Text>
                    </View>
                </View>
                <View style={styles.part_screen}>
                    <View style = {styles.Transparent_zone}>
                        <Text style={styles.Transparent_text}>Forecast for 7 days</Text>
                    </View>
                </View>
                <View style={styles.part_screen}>
                    
                    <View style = {styles.Transparent_zone}>
                        <Text style={styles.Transparent_text}>More information</Text>
                        <Text style={styles.Transparent_text_bottom}></Text>
                    </View>
                </View>
        </ScrollView>
    </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FDF6AA',
    },

    text: {
        color: 'white',
        fontSize: 92,
        
    },

    text_header: {
        color: 'white',
        fontSize: 72,
        marginTop: 150,
    },

    part_screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2%'
    },

    Transparent_zone: {
        flex:1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 20,
        marginBottom: 0,
        marginLeft: 22,
        marginRight: 22,
        width: '90%',
    },
    Transparent_text: {
        marginLeft: 10,
        opacity: 0.6,
        marginTop: 10,
        marginBottom: 100,
        fontSize: 20,
        color: 'white',
    },

    Transparent_text_bottom: {
        marginTop: '100%', 
    },

    MainScrollView: {
        flex:1,
    },
    
    
});