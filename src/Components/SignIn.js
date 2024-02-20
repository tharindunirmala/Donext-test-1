import React from 'react';

function SignIn({ toggleForm }) {
  return (
    <div className="form-container sign-in">
      <form action="#">
        <h2>login</h2>
        <div className="form-group">
          <input type="text" required />
          <i className="fas fa-user"></i>
          <label htmlFor="">username</label>
        </div>
        <div className="form-group">
          <input type="password" required />
          <i className="fas fa-lock"></i>
          <label htmlFor="">password</label>
        </div>
        <div className="forgot-pass">
          <a href="#">forgot password?</a>
        </div>
        <button type="submit" className="btn">login</button>
        <div className="link">
          <p>Don't have an account?<a href="#" className="signup-link" onClick={toggleForm}> sign up</a></p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
