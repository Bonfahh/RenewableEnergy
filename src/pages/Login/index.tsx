import React from 'react';

import Input from '@components/Input';
import Title from '@components/Title';
import Button from '@components/Button';
import {Container, SignUpText} from './styles';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from 'src/components/Header';
import {Controller, useForm} from 'react-hook-form';
import {AuthNavigatorRoutesProps} from 'src/routes';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from 'src/@types/store';
import {Alert} from 'react-native';
import {loginSuccess} from 'src/store/modules/global/actions';

type FormDataProps = {
  email: string;
  password: string;
};

const Login = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const dispatch = useDispatch();

  const accounts = useSelector((state: IRootState) => state.global.accounts);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataProps>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = ({email, password}: FormDataProps) => {
    const user = accounts?.find(a => a.email === email);

    if (!user || user.password !== password) {
      Alert.alert('Error', 'Email or password invalid!');
    } else {
      dispatch(loginSuccess());
    }
  };

  return (
    <Container>
      <Header showBackButton={false} />
      <Title text="Login" />

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Please type your e-mail',

          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid e-mail',
          },
        }}
        render={({field: {onChange, value}}) => (
          <Input
            label="E-mail"
            placeholder="Type your e-mail"
            value={value}
            errorMessage={errors.email?.message}
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          minLength: {value: 8, message: 'Minimum 8 characters'},
          required: 'Please type your password',
        }}
        render={({field: {onChange, value}}) => (
          <Input
            label="Password"
            placeholder="Minimum 8 characters"
            value={value}
            errorMessage={errors.password?.message}
            onChangeText={onChange}
            secureTextEntry
            onSubmitEditing={handleSubmit(handleLogin)}
            returnKeyType="send"
          />
        )}
      />

      <Button text="Login" onPress={handleSubmit(handleLogin)} />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <SignUpText>Don't have an account? Sign up here</SignUpText>
      </TouchableOpacity>
    </Container>
  );
};

export default Login;
