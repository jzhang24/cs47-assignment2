import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { NavBar } from './app/components/header.js';
import { ProfileCard, CurrentSong } from './app/components/body.js';
import { ActionItems } from './app/components/footer.js'
import Themes from "./assets/Themes/themes.js"

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/


  return (
    <View style={styles.container}>
      <View style={styles.mainPage}>
        <NavBar />
        <ProfileCard />
        <CurrentSong />
      </View>
      <View style={styles.bottomNav}>
        <ActionItems />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '10%'
  },
  mainPage: {
    flex: 8,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  bottomNav: {
    flex: 1,
    justifyContent: 'center'
  }
});
