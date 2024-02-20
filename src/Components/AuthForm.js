import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const SignupForm = ({ switchToLogin }) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    jobTitle: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <div >
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px',padding:'30px', textAlign: 'center' }}>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          gender: '',
          jobTitle: '',
          email: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert("Welcome Home!");
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
            <div style={{ maxWidth: '400px', margin: '0 auto', marginTop: '15px', padding: '20px', border: '2px solid #ccc', borderRadius: '10px', background: 'linear-gradient(to bottom right, #ffffff 50%, #000000 50%)', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', opacity: '0.9' }}>
          <Form>
            <div style={{ marginBottom: '20px' }}>
              <Field style={{ width: '80%', padding: '10px', fontSize: '1rem', border: '2px solid #ccc', borderRadius: '20px', backgroundColor: '#f5f5f5' }} type="text" name="firstName" placeholder="First Name" />
              <ErrorMessage name="firstName" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Field style={{ width: '80%', padding: '10px', fontSize: '1rem', border: '2px solid #ccc', borderRadius: '20px', backgroundColor: '#f5f5f5' }} type="text" name="lastName" placeholder="Last Name" />
              <ErrorMessage name="lastName" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Field as="select" style={{ width: '85%', padding: '10px', fontSize: '1rem', border: '2px solid #ccc', borderRadius: '20px', backgroundColor: '#f5f5f5' }} name="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="gender" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Field style={{ width: '80%', padding: '10px', fontSize: '1rem', border: '2px solid #ccc', borderRadius: '20px', backgroundColor: '#f5f5f5' }} type="text" name="jobTitle" placeholder="Job Title" />
              <ErrorMessage name="jobTitle" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Field style={{ width: '80%', padding: '10px', fontSize: '1rem', border: '2px solid #ccc', borderRadius: '20px', backgroundColor: '#f5f5f5' }} type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Field style={{ width: '80%', padding: '10px', fontSize: '1rem', border: '2px solid #ccc', borderRadius: '20px', backgroundColor: '#f5f5f5' }} type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button style={{ width: '100%', padding: '10px', fontSize: '1rem', borderRadius: '20px', backgroundColor: '#000000', color: 'white', cursor: 'pointer' }} type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', textAlign: 'center', marginTop: '20px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.9rem', color: 'white', textDecoration: 'underline' }} onClick={switchToLogin}>Already have an account</p>
            </div>
          </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

const LoginForm = ({ switchToSignup }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <div >
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px',padding: '30px', textAlign: 'center' }}>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert("Welcome back!");
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
            <div style={{ maxWidth: '400px', margin: '0 auto', marginTop: '15px', padding: '20px', border: '2px solid #ccc', borderRadius: '10px', background: 'linear-gradient(to bottom right, #ffffff 50%, #000000 50%)', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', opacity: '0.9' }}>
          <Form>
            <div style={{ marginBottom: '20px' }}>
              <Field style={{ width: '80%', padding: '10px', fontSize: '1rem', border: '2px solid #ccc', borderRadius: '20px', backgroundColor: '#f5f5f5' }} type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Field style={{ width: '80%', padding: '10px', fontSize: '1rem', border: '2px solid #ccc', borderRadius: '20px', backgroundColor: '#f5f5f5' }} type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button style={{ width: '100%', padding: '10px', fontSize: '1rem', borderRadius: '20px', backgroundColor: '#000000', color: 'white', cursor: 'pointer' }} type="submit" disabled={isSubmitting}>
                Login
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.9rem', color: 'white', textDecoration: 'underline' }} onClick={switchToSignup}>Sign Up</p>
            </div>
          </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

const AuthForm = () => {
  const [showLogin, setShowLogin] = useState(true);

  const switchToSignup = () => {
    setShowLogin(false);
  }

  const switchToLogin = () => {
    setShowLogin(true);
  }

  return (
    <>
      {showLogin ? <LoginForm switchToSignup={switchToSignup} /> : <SignupForm switchToLogin={switchToLogin} />}
    </>
  );
}

export default AuthForm;
