import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const exercises = [
  { id: '1', title: 'Agachamento', description: 'Um dos exercícios mais eficazes para fortalecer as pernas e glúteos.', level: 'Intermediário' },
  { id: '2', title: 'Flexão de braço', description: 'Ótimo para trabalhar peito, ombros e tríceps de maneira integrada.', level: 'Iniciante' },
  { id: '3', title: 'Burpees', description: 'Um exercício intenso para o corpo todo, ideal para aumentar a resistência.', level: 'Avançado' },
  { id: '4', title: 'Prancha', description: 'Trabalha a região do core e ajuda na estabilização do corpo.', level: 'Intermediário' },
];

const FitnessScreen = ({ navigation }) => {
  const renderExerciseItem = ({ item }) => (
    <View style={styles.exerciseContainer}>
      <Image source={require('../../assets/fitness.jpg')} style={styles.exerciseImage} />
      <View style={styles.exerciseContent}>
        <Text style={styles.exerciseTitle}>{item.title}</Text>
        <Text style={styles.exerciseDescription}>{item.description}</Text>
        <View style={styles.levelContainer}>
          <Ionicons name="barbell-outline" size={16} color="#fff" />
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
        <Text style={styles.headerTitle}>Exercícios Fitness</Text>
      </View>

      <Image source={require('../../assets/fitness.jpg')} style={styles.bannerImage} />

      <View style={styles.infoContainer}>
        <Text style={styles.workoutTitle}>Exercícios Fitness</Text>
        <View style={styles.infoRow}>
          <Ionicons name="time-outline" size={16} color="#fff" />
          <Text style={styles.infoText}>45 minutos</Text>
          <Ionicons name="barbell-outline" size={16} color="#fff" />
          <Text style={styles.infoText}>Intermediário</Text>
          <Ionicons name="flame-outline" size={16} color="#fff" />
          <Text style={styles.infoText}>Intenso</Text>
        </View>
      </View>

      <FlatList
        data={exercises}
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

export default FitnessScreen;
