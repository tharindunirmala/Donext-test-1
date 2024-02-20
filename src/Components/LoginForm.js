import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', marginTop: '100px', padding: '20px', border: '2px solid #ccc', borderRadius: '10px', background: 'linear-gradient(to bottom right,#ffffff 50%, #2471A3 50%)', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', opacity: '0.9' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert('Login Successfully');
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', textAlign: 'center', marginBottom: '20px' }}>
              <Field style={{ width: '80%', padding: '10px', fontSize: '1rem', border: '2px solid #ccc', borderRadius: '20px', backgroundColor: '#f5f5f5' }} type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red', textAlign: 'center' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', textAlign: 'center', marginBottom: '20px' }}>
              <Field style={{ width: '80%', padding: '10px', fontSize: '1rem', border: '2px solid #ccc', borderRadius: '20px', backgroundColor: '#f5f5f5' }} type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button style={{ width: '80%', padding: '10px', fontSize: '1rem', borderRadius: '20px', backgroundColor: '#2471A3', color: 'white', cursor: 'pointer' }} type="submit" disabled={isSubmitting}>
                Login
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.9rem', color: '#007bff', textDecoration: 'underline', color: 'white' }}>Sign Up</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
