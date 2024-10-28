import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const yogaExercises = [
  { id: '1', title: 'Postura da Montanha', description: 'Ajuda a melhorar a postura e o equilíbrio, proporcionando estabilidade.', level: 'Iniciante' },
  { id: '2', title: 'Cachorro Olhando para Baixo', description: 'Fortalece os braços e pernas enquanto alonga a coluna.', level: 'Intermediário' },
  { id: '3', title: 'Postura do Guerreiro', description: 'Melhora a resistência e fortalece as pernas e braços.', level: 'Intermediário' },
  { id: '4', title: 'Postura da Criança', description: 'Excelente para relaxar e alongar a coluna.', level: 'Iniciante' },
];

const YogaScreen = ({ navigation }) => {
  const renderExerciseItem = ({ item }) => (
    <View style={styles.exerciseContainer}>
      <Image source={require('../../assets/yoga.jpg')} style={styles.exerciseImage} />
      <View style={styles.exerciseContent}>
        <Text style={styles.exerciseTitle}>{item.title}</Text>
        <Text style={styles.exerciseDescription}>{item.description}</Text>
        <View style={styles.levelContainer}>
          <Ionicons name="leaf-outline" size={16} color="#fff" />
          <Text style={styles.exerciseLevel}>{item.level}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Yoga</Text>
      </View>

      <Image source={require('../../assets/yoga.jpg')} style={styles.bannerImage} />

      <View style={styles.infoContainer}>
        <Text style={styles.workoutTitle}>Yoga</Text>
        <View style={styles.infoRow}>
          <Ionicons name="time-outline" size={16} color="#fff" />
          <Text style={styles.infoText}>45 minutos</Text>
          <Ionicons name="leaf-outline" size={16} color="#fff" />
          <Text style={styles.infoText}>Todos os níveis</Text>
          <Ionicons name="flame-outline" size={16} color="#fff" />
          <Text style={styles.infoText}>Relaxamento</Text>
        </View>
      </View>

      <FlatList
        data={yogaExercises}
        renderItem={renderExerciseItem}
        keyExtractor={(item) => item.id}
        style={styles.exercisesList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  infoContainer: {
    padding: 16,
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    margin: 16,
  },
  workoutTitle: {
    color: '#d7ff43',
    fontSize: 22,
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  infoText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 6,
    marginRight: 16,
  },
  exercisesList: {
    paddingHorizontal: 16,
  },
  exerciseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  exerciseImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  exerciseContent: {
    flex: 1,
    marginLeft: 10,
  },
  exerciseTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  exerciseDescription: {
    color: '#aaa',
    fontSize: 14,
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  exerciseLevel: {
    color: '#fff',
    marginLeft: 6,
  },
  addButton: {
    backgroundColor: '#d7ff43',
    borderRadius: 5,
    padding: 5,
  },
});

export default YogaScreen;
