import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'

// yönlendirme işlemi için useNavigation impor edilir.

import { useNavigation } from '@react-navigation/native';

export default function ResultsList({title,results}) {
  
    // yönlendirme yapmak için kullandık.
    const navigation = useNavigation()

    return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        // gelen data vereyi yanyana alma
        horizontal
        // scroll özelliğini kaybetmek için
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          return (
            // gelen fotografa tıklayarak diğer sayfaya yönlendirme
            // parametre olarak id değerini gönderdik.
            // yeni sayfa açıyoruz bunun için ResultShowScreen sayfası yapıyoruz.
            <TouchableOpacity
            // yönlenecek sayfası tanımlıyoruz. id değeri ile
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title:{
    fontSize:18,
    fontWeight: 'bold',
    marginLeft:15,
    marginBottom:5

  }
});