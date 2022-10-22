/* Body with profile card + details, hottest take */
import { Text, View, Image, ImageBackground, StyleSheet} from 'react-native';
import Profiles from "../../assets/Profiles/index.js";
import Icons from "../../assets/Icons/index.js";
import Themes from "../../assets/Themes/themes.js"

export function ProfileCard() {
    return (    
        <View style = {styles.container}>
            <ImageBackground imageStyle={{ borderRadius: 10}} source={Profiles.mtl.image} resizeMode="cover" style={styles.profileCard}>    
                <View style = {styles.nameContainer}>
                    <Text style={styles.profileDetails}>{Profiles.mtl.name}</Text>
                </View>
                <View style = {styles.captionContainer}>
                    <Text style={styles.caption}>{Profiles.mtl.caption}</Text>  
                </View> 
            </ImageBackground>   
            
        </View>
    )
}

export function CurrentSong() {
    return (
        <View style = {styles.container2}>
            <Text style={styles.songDetails}>My hottest take</Text>
            <View style= {styles.imagesContainer}>
                <Image style={styles.playerImage} source={Icons.player.light}/>
                <Image style={styles.audioWaveImage} source={Icons.audioWave.light}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        height: '50%',
        width: '85%',
        marginBottom: '5%',
    },
    profileCard: {
        flex: 1,
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset
    },
    nameContainer: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    profileDetails: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Optima',
        padding: '3%',
        color: Themes.light.textSecondary
    },
    caption: {
        fontSize: 18,
        fontFamily: 'Optima',
        justifyContent: 'flex-end', 
        padding: '3%',
        color: Themes.light.textSecondary
    },

    // Hottest take
    container2: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '20%',
        width: '85%',
        backgroundColor: Themes.light.bgSecondary,
        borderRadius: 30,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset
    },
    songDetails: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Optima',
        padding: '5%'
    },
    imagesContainer: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        paddingBottom: '10%'
    },
    playerImage: {
        resizeMode: 'contain',
        width: '16%',
        margin: '1%',
        marginLeft: '3%'
    },
    audioWaveImage: {
        resizeMode: 'contain',
        width: '76%',
        margin: '1%',
        marginRight: '3%'
    }
})