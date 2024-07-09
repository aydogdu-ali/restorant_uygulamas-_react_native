import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SeacrhBar from "../components/SeacrhBar";
import useResult from "../hooks/useResult";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchApi, results, errorMesage] = useResult();
  console.log(results);

  const [term, setTerm] = useState("");

  // filtreleme işlemi için yazılan fonksiyon
  // props olarak alt componenete geçiliyor.
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SeacrhBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMesage ? <Text>{errorMesage}</Text> : null}

      {results.length == 0 ? (
        <>
          <Text style ={styles.hata}> Aradığınız ürün bulunamadı</Text>
        </>
      ) : (
        <>
          <ResultsList
            title="ekonomik restoranlar"
            results={filterResultsByPrice("₺")}
          />
          <ResultsList
            title="uygun restoranlar"
            results={filterResultsByPrice("₺₺")}
          />
          <ResultsList
            title="lüks restoranlar"
            results={filterResultsByPrice("₺₺₺")}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    hata : {
        alignSelf :"center",
        fontSize: 25,
    }
});
