import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ResultsShowScreen({ route }) {
  // route içinde bizim yolladığımız parametre tutuluyor.
  // bunu almak için bir değişkene atayoruz.
  const id = route.params.id;
  // api den gelen veriyi tutacak state

  const [result, setResult] = useState(null);

  // api den veri çekme fonksiyonu
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  console.log(result);

  useEffect(() => {
    getResult(id);
  }, []);

  //data gelene kadar bir şey yapma koşulunu yazıyoruz.

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>

      <View style={styles.icon}>
        {result.is_closed ? (
          <AntDesign name="closecircleo" size={30} color="black" />
        ) : (
          <MaterialIcons name="delivery-dining" size={30} color="black" />
        )}
      </View>

      <Image style={styles.image} source={{ uri: result.image_url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: { height: 180, margin: 10, borderRadius: 20 },

  title: {
    alignSelf: "center",
    fontSize: 25,
    //yukarıdan ve aşağıdan açıyoruz
    marginVertical: 10,
  },
  phone: {
    alignSelf: "center",
    fontSize: 25,
  },
  icon: {
    alignSelf: "center",
    marginVertical:15,
  },
});
