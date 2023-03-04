import * as React from 'react';
import { Text, View, Image, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';
const image = {uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/1987871-abstrato-preto-listras-diagonal-fundo-gratis-vetor.jpg'};
function HomeScreen() {
  return (
    <ImageBackground source={image} resizeMode="cover">
    <View style={styles.container}>
      
    
      <Text style={styles.titulo}>Koban</Text>
  
  <View style={[
      styles.container,
      {
        flexDirection: 'row',
      },
    ]}>
  <Image source={require('./src/imagem/s10.jpg')} style={styles.produto}/>
  <Image source={require('./src/imagem/s15.jpg')} style={styles.produto}/>
  <Image source={require('./src/imagem/s16.jpg')} style={styles.produto}/>
  </View>
  <View style={[
      styles.container,
      {
        flexDirection: 'row',
      },
    ]}>
  <Image source={require('./src/imagem/s1.jpg')} style={styles.produto}/>
  <Image source={require('./src/imagem/s5.jpg')} style={styles.produto}/>
  <Image source={require('./src/imagem/s3.jpg')} style={styles.produto}/>
  </View>
  <View style={[
      styles.container,
      {
       
        flexDirection: 'row',
      },
    ]}>
  <Image source={require('./src/imagem/s9.jpg')} style={styles.produto}/>
  <Image source={require('./src/imagem/s11.jpg')} style={styles.produto}/>
  <Image source={require('./src/imagem/s12.jpg')} style={styles.produto}/>
  </View>


   
    </View>
    </ImageBackground>
  );
}

function Pagamento(){
  return (
    <ImageBackground source={image} resizeMode='cover'>
    <View>
      
      <Text style={styles.titulo}>Pagamento</Text>
      <View>
            <Text style={styles.pag}>CREDITO</Text>
            <Text style={styles.pag}>DEBITO</Text>
            <Text style={styles.pag}>PIX</Text>
            <Text style={styles.pag}>MASTERCARD</Text>
            <Text style={styles.pag}>VISA</Text>
            <Text style={styles.pag}>PIX</Text>
      </View>
      
     
     
    </View>
    </ImageBackground>
  );
}

function Local(){
  return (
    <ImageBackground source={image} resizeMode='cover'>
    <View style={{  justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.pag}>Endereço: Av. São Camilo, 1081 - Vilarejo, Carapicuíba - SP, 06709-150</Text>
      
    </View> 
    </ImageBackground>
    
  );
}

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >

        <Tab.Screen
         name="Inicio" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
         />

        <Tab.Screen 
        name="Pagamento" 
        component={Pagamento}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="contactless-payment" color={color} size={size} />
          ),
        }}
         />

        <Tab.Screen
         name="Local" 
         component={Local}
         options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="source-commit-local" color={color} size={size} />
          ),
        }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding:7,
  },
  titulo:{
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
  },
  produto:{
    width: 100,
    height: 100,
    borderRadius: 10,
    margin:15,
    backgroundColor: 'white',
  },
  pag:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  
});