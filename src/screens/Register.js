import React, {useState} from 'react';
import {
    View,
    Text,
  } from 'react-native';
import RegisterComponent from '../components/RegisterComponent';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange=(({nameEl, value}) => {
      setForm({...form, [nameEl]: value});

      if (value !== '') {
          setErrors((prev) => {
              return {...prev, [nameEl]: null}
          });
      }
  });

  const onSubmit = () => {
    if (!form.userName) {
        setErrors((prev) => {
          return {...prev, userName: 'Please add a username'};
        });
    }
    if (!form.firstName) {
        setErrors((prev) => {
            return {...prev, firstName: 'Please add a first name'};
        });
    }
    if (!form.lastName) {
        setErrors((prev) => {
            return {...prev, lastName: 'Please add a last name'};
        });
    }
    if (!form.email) {
        setErrors((prev) => {
            return {...prev, email: 'Please add a email'};
        });
    }
    if (!form.password) {
        setErrors((prev) => {
            return {...prev, password: 'Please add a password'};
        });
    }
  }

    return (
        <RegisterComponent 
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors} 
        />
    )
}

export default Register;