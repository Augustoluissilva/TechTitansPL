import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Favoritos = () => {
  const navigation = useNavigation(); // Hook para a navegação

  const favoritos = [
    {
      id: '1',
      title: 'Treinamento Tronco',
      duration: '60 Minutos',
      calories: '1320 Kcal',
      exercises: '5 Exercícios',
      image: require('../../assets/Tronco.jpg'),
    },
    {
      id: '2',
      title: 'Pull Out',
      duration: '30 Minutos',
      calories: '1120 Kcal',
      exercises: '10 Exercícios',
      image: require('../../assets/Pull-out.jpg'),
    },
    {
      id: '3',
      title: 'Agachamento',
      duration: '45 Minutos',
      calories: '785 Kcal',
      exercises: '5 Exercícios',
      image: require('../../assets/Agachamento2.jpg'),
    },
    {
      id: '4',
      title: 'Step Up',
      duration: '12 Minutos',
      calories: '1385 Kcal',
      exercises: '3 Exercícios',
      image: require('../../assets/StepUp.jpg'),
    },
    {
      id: '5',
      title: 'Treinamento De Força',
      duration: '12 Minutos',
      calories: '1250 Kcal',
      exercises: '5 Exercícios',
      image: require('../../assets/Treinamento-Força.jpg'),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.itemDetails}>
          <Text style={styles.itemText}>
            <Ionicons name="time-outline" size={14} color="#b0b0b0" /> {item.duration}
          </Text>
          <Text style={styles.itemText}>
            <Ionicons name="flame-outline" size={14} color="#b0b0b0" /> {item.calories}
          </Text>
          <Text style={styles.itemText}>
            <Ionicons name="barbell-outline" size={14} color="#b0b0b0" /> {item.exercises}
          </Text>
        </View>
        <TouchableOpacity style={styles.playButton}>
          <Ionicons name="play-circle-outline" size={32} color="#F5DEB3" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1c1c1e" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#F5DEB3" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Favoritos</Text>
      </View>
      <FlatList
        data={favoritos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fundo escuro conforme a imagem
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1C1C1E',
  },
  headerText: {
    color: '#F5DEB3', // Cor dourada/bege para combinar com a imagem
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  itemContainer: {
    backgroundColor: '#333', // Container mais escuro, quase metálico
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  itemImage: {
    width: 100,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    color: '#F5DEB3', // Ajustando a cor dos títulos
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDetails: {
    marginTop: 8,
  },
  itemText: {
    color: '#b0b0b0', // Tons de cinza para detalhes
    fontSize: 12,
    marginVertical: 2,
  },
  playButton: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
});

export default Favoritos;
