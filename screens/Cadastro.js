import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';


export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [isSelected, setSelected] = useState(false)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorNome, setErrorNome] = useState(null)
  const [errorCpf, setErrorCpf] = useState(null)
  const [errorTelefone, setErrorTelefone] = useState(null)
  
  const validar = () => {
    let error = false
    setErrorEmail(null)
    setErrorCpf(null)
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente")
      error = true
    }
    if (cpf == null){
      setErrorCpf("Preencha seu CPF")
      error = true
    }
    return !error
  }

  const salvar = () => {
      if (validar()){
        console.log("Salvou")      
      }
  }

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h3>Cadastre-se</Text>
      <Input
        placeholder="E-mail"
        onChangeText={value => {
            setEmail(value)
            setErrorEmail(null)
        }}
        keyboardType="email-address"
        errorMessage={errorEmail}        
        />
    
    <Input
        placeholder="Nome"
        onChangeText={value => setNome(value)}
        errorMessage={errorNome}
        />
    
    <Input
        placeholder="CPF"
        onChangeText={value => {
            setCpf(value)
            setErrorCpf(null)
        }}
        keyboardType="number-pad"
        returnKeyType="done"
        errorMessage={errorCpf}
        />
    
    <Input
        placeholder="Telefone"
        onChangeText={value => setTelefone(value)}
        keyboardType="phone-pad"
        returnKeyType="done"
        errorMessage={errorTelefone}
        />
        
    <CheckBox 
        title="Eu aceito os termos de uso"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="red"
        checked={isSelected}
        onPress={() => setSelected(!isSelected)}
    />
     
      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
          />
        }
        title="Salvar"
        buttonStyle={specificStyle.button}
        onPress={() => salvar()}
      />

    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff"
  },
  button: {
    width: "100%",
    marginTop: 10
  }
})