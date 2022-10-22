/* Footer with action items */
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import Icons from "../../assets/Icons/index.js";
import Themes from "../../assets/Themes/themes.js"

export function ActionItems() {
    return (    
        <View style = {styles.container}>
            <View style = {styles.box}>
                <Image style = {styles.images} source={Icons.discover.light} />
                <Text style={styles.paragraph}>Discover</Text>
            </View>
            <View style = {styles.box}>
                <Image style = {styles.images} source={Icons.heart.light} />
                <Text style={styles.paragraph}>Matches</Text>
            </View>
            <View style = {styles.box}>
                <Image style = {styles.images} source={Icons.messages.light} />
                <Text style={styles.paragraph}>DMs</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '100%',
        width: '100%',
        backgroundColor: Themes.light.navigation
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    images: {
        resizeMode: 'contain',
        width: '80%',
        height: '40%'
    },
    paragraph: {
        fontSize: 16,
        fontFamily: 'Optima',
        justifyContent: 'flex-end', 
        alignItems: 'center',
        color: Themes.light.textSecondary
    }
})