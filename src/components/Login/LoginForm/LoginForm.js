import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../common/Input/Input";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [signInError, setSignInError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!username) {
      setEmailError("Please enter your email");
      return;
    }
    if (!isValidEmail(username)) {
      setEmailError("Please enter a valid email");
      return;
    }
    if (!password) {
      setPasswordError("Please enter your password");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password should be at least 8 characters long");
      return;
    }

    try {
      const response = await fetch(process.env.REACT_APP_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Sign-in request failed");
      }

      const data = await response.json();

      if (data.success) {
        // Redirect to some page on successful sign-in
        navigate("/dashboard");
      } else {
        setSignInError("Invalid email or password");
      }
    } catch (error) {
      setSignInError("An error occurred during sign-in");
    }
  };

  const isValidEmail = (value) => {
    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validateForm = () => {
    return username !== "" && password !== "";
  };

  return (
    <>
      <div className="login-form-container">
        <form onSubmit={handleFormSubmit}>
          <div className="form-logo">
            <img src="assets/images/Logo-1.jpg" alt="Login" />
          </div>
          <div className="form-productitle">
            <span>Welcome to the Senegal</span>
            <label>searches platform</label>
          </div>
          <div className="form-signin">
            <label>Sign In to your account</label>
          </div>

          <div className="form-username">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={username}
              onChange={handleUsernameChange}
              inputError={emailError}
            />
          </div>
          <div className="form-password">
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              inputError={passwordError}
            />
          </div>
          <div className="form-forgotPassword">
            <div className="form-group">
              <a href="/forgot-password">Reset Password</a>
            </div>
          </div>
          <div className="form-group">
            <button
              name="Sign In"
              placeholder="Sign In"
              type="submit"
              disabled={!validateForm()}
            >
              SIGN IN
            </button>
            {signInError && <div className="error">{signInError}</div>}
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
