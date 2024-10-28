import React from 'react';
import { View, Text, Image, TextInput, FlatList, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const exercicios = [
    { id: '1', title: 'Supinos', image: require('../../assets/Supino.jpg') },
    { id: '2', title: 'Agachamento', image: require('../../assets/Agachamento.jpg') },
  ];

  const categorias = [
    { id: '1', title: 'Academia', image: require('../../assets/academia.png') },
    { id: '2', title: 'Yoga', image: require('../../assets/yoga.jpg') },
    { id: '3', title: 'Fitness', image: require('../../assets/fitness.jpg') },
    { id: '4', title: 'Alongamento', image: require('../../assets/alongamento.jpg') },
  ];

  const trending = [
    { id: '1', title: 'Conjuntos de treinamento cardiovascular', image: require('../../assets/Cardio.jpg'), tag: 'Alta' },
    { id: '2', title: 'Treino Pesado', image: require('../../assets/Treino-pesado.jpg'), tag: 'Menos' },
  ];

  const renderExerciseItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.exerciseItem} 
      onPress={() => {
        if (item.title === 'Supinos') {
          navigation.navigate('Supinos');
        } else if (item.title === 'Agachamento') {
          navigation.navigate('Agachamentos');
        }
      }}
    >
      <Image source={item.image} style={styles.styledImage} />
      <Text style={styles.exerciseTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.categoryItem} 
      onPress={() => {
        if (item.title === 'Academia') {
          navigation.navigate('Academia');
        } else if (item.title === 'Yoga') {
          navigation.navigate('Yoga');
        } else if (item.title === 'Fitness') {
          navigation.navigate('Fitness'); // Navega para a tela Fitness
        } else if (item.title === 'Alongamento') {
          navigation.navigate('Alongamento');
        }
      }}
    >
      <Image source={item.image} style={styles.styledImage} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderTrendingItem = ({ item }) => (
    <TouchableOpacity style={styles.trendingItem} onPress={() => {}}>
      <Image source={item.image} style={styles.styledImage} />
      <View style={styles.trendingOverlay}>
        <Text style={styles.trendingTag}>{item.tag}</Text>
      </View>
      <Text style={styles.trendingTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Bem-vindo(a)</Text>
          <Text style={styles.userName}>Marcus A.</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
            <Ionicons name="heart-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="add-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar Exercícios e etc..."
        placeholderTextColor="#aaa"
      />

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle} numberOfLines={1} ellipsizeMode="tail">
            Exercícios
          </Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>Ver tudo</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={exercicios}
          renderItem={renderExerciseItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categorias</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>Ver tudo</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={categorias}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trending</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>Ver tudo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.trendingContainer}>
          {trending.map(item => (
            <View key={item.id} style={styles.trendingItem}>
              <Image source={item.image} style={styles.trendingImage} />
              <View style={styles.trendingOverlay}>
                <Text style={styles.trendingTag}>{item.tag}</Text>
              </View>
              <Text style={styles.trendingTitle}>{item.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
  },
  header: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 60,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  userName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#333',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#fff',
    marginVertical: 10,
  },
  section: {
    marginVertical: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    maxWidth: '80%',
  },
  viewAll: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'right',
    marginTop: 5,
  },
  exerciseItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  styledImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
  },
  exerciseTitle: {
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
    fontSize: 14,
  },
  categoryItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  categoryTitle: {
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
    fontSize: 14,
  },
  trendingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  trendingItem: {
    width: '48%',
    marginBottom: 10,
  },
  trendingImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  trendingOverlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  trendingTag: {
    color: '#fff',
    fontSize: 12,
  },
  trendingTitle: {
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default Home;
