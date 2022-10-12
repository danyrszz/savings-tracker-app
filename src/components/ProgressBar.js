import { Text, View, StyleSheet } from "react-native";
import { colors } from "../utils/reusableStyles";

function ProgressBar({value}){

  const width = (percent)=>{
    return{
      width: percent + "%"
    }
  }

  return(
    <View style={styles.container}>
      <View style={[styles.bar, width(value)]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    width : "100%",
    height : 10,
    backgroundColor : colors.lightPurple,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius:25,
    borderTopRightRadius:25,
    borderBottomRightRadius:25,
  },
  bar : {
    backgroundColor: colors.vampire,
    height:10,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius:25,
    borderTopRightRadius:25,
    borderBottomRightRadius:25,
  }
});
export default ProgressBar