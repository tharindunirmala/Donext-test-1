import React from 'react';

function SignUp({ toggleForm }) {
  return (
    <div className="form-container sign-up">
      <form action="#">
        <h2>sign up</h2>
        <div className="form-group">
          <input type="text" required />
          <i className="fas fa-user"></i>
          <label htmlFor="">username</label>
        </div>
        <div className="form-group">
          <input type="email" required />
          <i className="fas fa-at"></i>
          <label htmlFor="">email</label>
        </div>
        <div className="form-group">
          <input type="password" required />
          <i className="fas fa-lock"></i>
          <label htmlFor="">password</label>
        </div>
        <div className="form-group">
          <input type="password" required />
          <i className="fas fa-lock"></i>
          <label htmlFor="">confirm password</label>
        </div>
        <button type="submit" className="btn">sign up</button>
        <div className="link">
          <p>You already have an account?<a href="#" className="signin-link" onClick={toggleForm}> sign in</a></p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
