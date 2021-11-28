import { StyleSheet, Dimensions } from 'react-native';
import { themeSetting } from '../settings/theme.setting';
const dimention = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex"
    },
    boxLogo: {
        flex: 3,
        width: '100%',
        padding: "30px 27px",
        display: "flex",
        alignItems: "center"
    },
    logo: {
        flex: 1,
        width: '80%',
        height: undefined,
        resizeMode: 'contain',
        
    },
    boxText: {
       display: "flex",
       alignItems: "center",
       paddingBottom: 30,
       color: themeSetting.color,
    },
    gradient: {
        height: 170,
        width: dimention.width,
        alignItems: "center",
        justifyContent: "center"
    },
    ellipse: {
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        position: "absolute",
    },
    button: {
        fontWeight: "bold",
        fontSize: 20,
        position: "relative"
    },
    color: {
        color: themeSetting.color,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    description: {
        fontSize: 15
    }
});

  export default styles;
  