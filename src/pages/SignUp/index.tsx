import React, {useState} from 'react';

import Input from '@components/Input';
import Title from '@components/Title';
import Button from '@components/Button';
import {
  Container,
  LoginText,
  TermsCheckBox,
  TermsContainer,
  TermsText,
} from './styles';
import Header from 'src/components/Header';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigatorRoutesProps} from 'src/routes';
import {Alert} from 'react-native';
import {signUp} from 'src/store/modules/global/actions';

type FormDataProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const dispatch = useDispatch();

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataProps>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const handleSignUp = (data: FormDataProps) => {
    const {firstName, lastName, email, password} = data;
    if (!toggleCheckBox) {
      Alert.alert(
        'Terms not accepted!',
        'To continue you have to accept our Terms of Service and Privacy policy',
      );
    } else {
      dispatch(signUp(firstName, lastName, email, password));
      navigation.navigate('Login');
    }
  };

  return (
    <Container>
      <Header />
      <Title text="Create your account" />
      <Controller
        control={control}
        name="firstName"
        rules={{
          required: 'Please type your first name',
        }}
        render={({field: {onChange, value}}) => (
          <Input
            label="First Name"
            placeholder="Your first name"
            value={value}
            errorMessage={errors.firstName?.message}
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        rules={{
          required: 'Please type your last name',
        }}
        render={({field: {onChange, value}}) => (
          <Input
            label="Last Name"
            placeholder="Your last name"
            value={value}
            errorMessage={errors.lastName?.message}
            onChangeText={onChange}
          />
        )}
      />

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
            onSubmitEditing={handleSubmit(handleSignUp)}
            returnKeyType="send"
          />
        )}
      />

      <TermsContainer>
        <TermsCheckBox
          value={toggleCheckBox}
          onValueChange={setToggleCheckBox}
        />
        <TermsText>
          I am over 18 years of age and I have read and agree to the Terms of
          Service and Privacy policy.
        </TermsText>
      </TermsContainer>
      <Button
        text="Create account"
        disabled={!toggleCheckBox}
        onPress={handleSubmit(handleSignUp)}
      />
      <LoginText>Already have an account? Log in Here</LoginText>
    </Container>
  );
};

export default SignUp;
