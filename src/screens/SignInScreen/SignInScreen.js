import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Logo from '../../../assets/images/pngaaa 1.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLoginPressed = () =>{
    console.warn('Home');
  }
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://www.telkom.co.id/data/image_upload/page/1594108255409_compress_logo%20telkom%20indonesia.png',
        }}
        // source={require("../../assets/img/image1.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>E-Wallet</Text>
      <Input placeholder="Email" value={email} setValue={setEmail} />
      <Input
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <Button text="LOGIN" onPress={onLoginPressed}/>
      <Button text="Register" onPress={onLoginPressed} type="SECONDARY"/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    height: '100%',
    maxHeight: 200,
  },
  text:{
    fontSize: 28,
    marginBottom: 10,
    color: '#4982C1',
  }
});

export default SignInScreen;
