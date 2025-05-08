import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

// Pegamos a largura da tela para ajustar a altura da imagem proporcionalmente
const screenWidth = Dimensions.get("window").width;

// O componente recebe um personagem (film) como propriedade
export default function CharacterCard({ film }) {
  return (
    <View style={styles.card}>
      {/* Imagem do personagem (pôster vertical) */}
      <Image source={{ uri: film.image }} style={styles.image} />

      {/* Bloco com as informações do personagem */}
      <View style={styles.info}>
        {/*  Nome do personagem */}
        <Text style={styles.name}>{film.name ?? "Título não disponível"}</Text>


        {/* Aniversário */}
        <Text style={styles.birth}>
          {film.dateOfBirth ?? "Aniversário não disponível"}
        </Text>

        {/* Casa de Hogwarts */}
        <Text style={styles[film.house?.toLowerCase()]}>
          {film.house ?? "Nome não disponível"}
        </Text>

        {/*Nome do ator */}
        <Text style={styles.text}>
          🙍 Ator: {film.actor ?? "Ator não disponível"}
        </Text>

        {/* Diretor e produtor */}
        <Text style={styles.text}>
          👁️ Cor dos Olhos: {film.eyeColour ?? "Não informado"}
        </Text>
        <Text style={styles.text}>
          🧙 Ancestralidade: {film.ancestry ?? "Não informado"}
        </Text>
      </View>
    </View>
  );
}

// Estilo visual do card e seus elementos
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#262652", // Fundo escuro do card
    borderRadius: 16, // Cantos arredondados
    overflow: "hidden", // Garante que a imagem respeite o card
    marginBottom: 20, // Espaço entre os cards

    // Sombra para profundidade
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4, // Android
  },
  image: {
    width: "100%",
    height: screenWidth * 0.6, // Altura proporcional à largura da tela
    resizeMode: "cover", // Redimensiona para cobrir a área
  },
  info: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",    
    color: "#ffffff",
  },
  gryffindor: {
    fontSize: 20,
    color: "#ff4040",
    fontWeight: "bold",
    marginTop: 6,
  },
  hufflepuff: {
    fontSize: 20,
    color: "#f0c14b",
    fontWeight: "bold",
    marginTop: 6,
  },
  ravenclaw: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#40b9ff",
    marginTop: 6,
  },
  slytherin: {
    fontSize: 20,
    color: "#00ff00",
    fontWeight: "bold",
    marginTop: 6,
  },
  text: {
    fontSize: 14,
    color: "#e0e0e0",
        fontWeight: "bold",
    marginTop: 6,
    textAlign: "justify",
  },
  birth: {
    fontSize: 14,
    color: "#bbbbbb",
    marginTop: 2,
    fontStyle: "italic",
  },
});
