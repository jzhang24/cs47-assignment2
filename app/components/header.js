/* Header with menu icon, ensom, sun */
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import Icons from "../../assets/Icons/index.js";

export function NavBar() {
    return (    
        <View style = {styles.container}>
            <Image style={styles.image} source={Icons.menu.light}/>
            <Text style={styles.paragraph}>ensom</Text>
            <Image style={styles.image} source={Icons.sun}/>       
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '10%',
        width: '95%',
        marginTop: '5%',
        marginBottom: '5%',
    },
    paragraph: {
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'Optima',
    },
    image: {
        resizeMode: 'contain',
        width: '25%',
        height: '70%'
    }
})