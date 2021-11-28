import * as React from 'react';
import { View, Text, Image, TouchableHighlight   } from "react-native";
import styles from "../styles/welcome.style";
 

export default function({ navigation }: any){

    return(
        <View style={styles.container}>
            <View style={styles.boxLogo}>
                <Image 
                    style={styles.logo}
                    source={{
                        uri: require('../assets/images/welcome/logo.png')
                    }}
                />
            </View>

            <View style={styles.boxText}>
                <Text style={[styles.color, styles.title]}>Hello, Lets Chat</Text>
                <Text style={[styles.color, styles.description]}>What are you doing today?</Text>
                <Text style={[styles.color, styles.description]}>Everything is ok?</Text>
            </View>

            <View style={styles.gradient}>
                <Image 
                    style={styles.ellipse}
                    source={{
                        uri: require('../assets/images/welcome/ellipse.png')
                    }}
                />

                <TouchableHighlight  onPress={() => navigation.navigate('Modal')} underlayColor='rgb(107 86 171 / 34%)'>
                    <Text style={[styles.color, styles.button]}>
                        Sign In
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}