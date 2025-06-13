import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform} from 'react-native';

export default function App() {

  const [dolar, setDolar] = useState('');
  const [real, setReal] = useState('');
  const [taxa, setTaxa] = useState(5.54)

  const handleClick = () =>{
    const valueDolar = parseFloat(dolar);
    if (!isNaN(valueDolar)) {
        const valueReal = valueDolar * taxa;
        
        setReal(valueReal);
        setReal(valueReal.toFixed(2));
    }
    
  }



  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={styles.container}>
     
     <View style={{
      
      gap: 20,
      
     }}>
         <Text style={styles.textDol}>Dollar<Text style={{fontWeight:200}}>To</Text>Real</Text>
   

        <View style={styles.containerIn}>
          
          <Text style={styles.textInView}>USD</Text>
          <TextInput
          keyboardType='number-pad'
          style={styles.textInput}
          value={dolar}
          onChangeText={setDolar}
          placeholder="0.00"
        
          
          />
          <Text style={styles.textInView}>BRL</Text>
          <Text style={styles.textBotton}>{real}</Text>
        </View>
        <View style={styles.containerBtn}>
        <Pressable 
        onPress={handleClick}
        style={styles.buttonStyle}>

          <Text style={styles.textbutton}>
            Converter
          </Text>
        </Pressable>
    </View>

        </View>
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: '#DED8E1',
    alignItems: 'center'
  },

  textDol:{
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'center',
    color: '#4A4459',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  
  textInput:{
    backgroundColor: '#E7E0EC',
    width: 291,
    height: 44, 
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    color: '#4A4459'

  },

  containerIn:{
    backgroundColor: '#fff',
    width: 348,
    height: 220,
  
    textAlign: 'center',
    paddingTop: 10,
    alignItems: 'center',
    gap: 8,
    borderRadius: 8,
    borderColor:  '#6750A4',
    borderStyle: 'solid',
    borderWidth: 2,    
  },

  textInView: {
    color: '#4A4459',
    fontSize: 24,
    fontWeight: 'bold',
    

  },

  textBotton: {
    fontSize: 24,
    borderBottomColor: '#6750A4',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    width: 284,
    textAlign: 'center', 
    marginTop: 8,
    paddingBottom: 8,
    fontWeight: 400,
    color: '#4A4459'
    

  },  

  containerBtn: {
    flex: 1,
    backgroundColor: '#DED8E1',
    
  },
  buttonStyle: {
    fontSize: 26,
    backgroundColor:'#4A4459',
    width: 348,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    

  },
  textbutton: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 700,
  }

});
