// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VisualTarefas from './components/VisualTarefas';
import CadastroTarefas from './components/CadastroTarefas';
import Inicio from './components/Inicio';

let Stack = createStackNavigator();

let App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'purple', // Cor do cabeçalho
          },
          headerTintColor: '#fff', // Cor do texto do cabeçalho
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Tela1"
          component={VisualTarefas}
          options={{
            title: 'IF TASK'
          }}
        />

        <Stack.Screen
          name="Tela2"
          component={CadastroTarefas}
          options={{
            title: 'Adicionar Lembrete'
          }}
        />

        <Stack.Screen //Tela Inicial
          name="Inicio"
          component={Inicio}
          options={{
            title: 'IF TASK', 
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
