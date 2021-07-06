import React, {useState, useEffect} from 'react';
import envs from '../config/env';

import RegisterComponent from '../components/RegisterComponent';
import axiosInstance from '../helpers/axiosInterceptor';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  console.log('Backend url', envs);
  console.log('__DEV__', __DEV__);

  const {BACKEND_URL} = envs;


  useEffect(() => {
    //   axiosInstance.post('/auth/login').catch(err => {
    //       console.log(err);
    //   });
      axiosInstance.get('/contacts').catch(err => {
        console.log(err.response);
    });
  }, []);

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