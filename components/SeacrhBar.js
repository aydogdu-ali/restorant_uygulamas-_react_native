import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function SeacrhBar({term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign
        style={styles.iconStyle}
        name="search1"
        size={30}
        color="red"
      />
      <TextInput
        style={styles.inputstyle}
        placeholder="Ara"
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor:"lightgrey",
    flexDirection:"row",
    margin:10,
    height:50,
    alignItems:"center",
    // etrafına oval yapıyoruz.
    borderRadius:20,

  },
  iconStyle: {
    //iconu sağdan ve soldan açmak için
    marginHorizontal: 15,
  },
  inputstyle:{
    // input kısmı tüm boşluğu doldurması için
    // bu sayede inputun her yerine tıklanabilir.
    flex:1,
    fontSize:18,
  }
});
 