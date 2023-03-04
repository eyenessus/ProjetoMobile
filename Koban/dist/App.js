"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const native_1 = require("@react-navigation/native");
const bottom_tabs_1 = require("@react-navigation/bottom-tabs");
const MaterialCommunityIcons_1 = __importDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
const react_native_2 = require("react-native");
const image = { uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/1987871-abstrato-preto-listras-diagonal-fundo-gratis-vetor.jpg' };
function HomeScreen() {
    return (<react_native_1.ImageBackground source={image} resizeMode="cover">
    <react_native_1.View style={styles.container}>
      
    
      <react_native_1.Text style={styles.titulo}>Koban</react_native_1.Text>
  
  <react_native_1.View style={[
        styles.container,
        {
            flexDirection: 'row',
        },
    ]}>
  <react_native_1.Image source={require('./src/imagem/s10.jpg')} style={styles.produto}/>
  <react_native_1.Image source={require('./src/imagem/s15.jpg')} style={styles.produto}/>
  <react_native_1.Image source={require('./src/imagem/s16.jpg')} style={styles.produto}/>
  </react_native_1.View>
  <react_native_1.View style={[
        styles.container,
        {
            flexDirection: 'row',
        },
    ]}>
  <react_native_1.Image source={require('./src/imagem/s1.jpg')} style={styles.produto}/>
  <react_native_1.Image source={require('./src/imagem/s5.jpg')} style={styles.produto}/>
  <react_native_1.Image source={require('./src/imagem/s3.jpg')} style={styles.produto}/>
  </react_native_1.View>
  <react_native_1.View style={[
        styles.container,
        {
            flexDirection: 'row',
        },
    ]}>
  <react_native_1.Image source={require('./src/imagem/s9.jpg')} style={styles.produto}/>
  <react_native_1.Image source={require('./src/imagem/s11.jpg')} style={styles.produto}/>
  <react_native_1.Image source={require('./src/imagem/s12.jpg')} style={styles.produto}/>
  </react_native_1.View>


   
    </react_native_1.View>
    </react_native_1.ImageBackground>);
}
function Pagamento() {
    return (<react_native_1.ImageBackground source={image} resizeMode='cover'>
    <react_native_1.View>
      
      <react_native_1.Text style={styles.titulo}>Pagamento</react_native_1.Text>
      <react_native_1.View>
            <react_native_1.Text style={styles.pag}>CREDITO</react_native_1.Text>
            <react_native_1.Text style={styles.pag}>DEBITO</react_native_1.Text>
            <react_native_1.Text style={styles.pag}>PIX</react_native_1.Text>
            <react_native_1.Text style={styles.pag}>MASTERCARD</react_native_1.Text>
            <react_native_1.Text style={styles.pag}>VISA</react_native_1.Text>
            <react_native_1.Text style={styles.pag}>PIX</react_native_1.Text>
      </react_native_1.View>
      
     
     
    </react_native_1.View>
    </react_native_1.ImageBackground>);
}
function Local() {
    return (<react_native_1.ImageBackground source={image} resizeMode='cover'>
    <react_native_1.View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <react_native_1.Text style={styles.pag}>Endereço: Av. São Camilo, 1081 - Vilarejo, Carapicuíba - SP, 06709-150</react_native_1.Text>
      
    </react_native_1.View> 
    </react_native_1.ImageBackground>);
}
const Tab = bottom_tabs_1.createBottomTabNavigator();
function App() {
    return (<native_1.NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen name="Inicio" component={HomeScreen} options={{
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons_1.default name="home" color={color} size={size}/>),
    }}/>

        <Tab.Screen name="Pagamento" component={Pagamento} options={{
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons_1.default name="contactless-payment" color={color} size={size}/>),
    }}/>

        <Tab.Screen name="Local" component={Local} options={{
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons_1.default name="source-commit-local" color={color} size={size}/>),
    }}/>
      </Tab.Navigator>
    </native_1.NavigationContainer>);
}
exports.default = App;
const styles = react_native_2.StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 7,
    },
    titulo: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white',
    },
    produto: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 15,
        backgroundColor: 'white',
    },
    pag: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});