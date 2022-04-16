import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

function App() {
  
  // JSX code for login form
  return (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />

        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

}

export default App;