import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/base/Home';
import CourseDetail from './screens/base/CourseDetail';
import GlobalStyle from './style/GlobalStyle';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={GlobalStyle.droidSafeArea}>
      <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='CourseDetail' component={CourseDetail} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </SafeAreaView>
  )
}