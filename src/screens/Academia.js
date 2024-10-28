import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AcademiaScreen = () => {
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
      <Image source={require('../../assets/academia.png')} style={styles.image} />
      
      <Text style={styles.title}>Academia</Text>
      
      <Text style={styles.description}>
        A academia é o espaço onde você pode treinar diversos grupos musculares e 
        melhorar sua força, resistência e forma física. Há uma grande variedade de 
        aparelhos e pesos livres que possibilitam treinos intensos e completos.
      </Text>

      <Text style={styles.subtitle}>Benefícios</Text>
      <Text style={styles.benefits}>
        • Melhora da saúde cardiovascular{'\n'}
        • Aumento da massa muscular{'\n'}
        • Redução de gordura corporal{'\n'}
        • Melhoria no humor e redução de estresse{'\n'}
        • Aumento da força e resistência
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}  // Adiciona navegação para retornar à Home ou outra tela
      >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  benefits: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#A7FF14',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default AcademiaScreen;
