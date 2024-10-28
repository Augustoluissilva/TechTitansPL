import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './src/routes/Routes';


export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
    
  );
}

