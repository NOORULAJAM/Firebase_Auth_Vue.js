<template>
  <div id="app" class="login-container">
    <h3 class="login-header">Log in</h3>
    <form @submit.prevent="Login" class="login-form">
      <p>Need an account? <router-link to="/register"> Sign up</router-link></p>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input
          class="form-control"
          type="email"
          name="email"
          placeholder="email@gmail.com"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Password</label>
        <div class="password-input">
          <input
            class="form-control"
            type="password"
            name="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <p class="forgot-password-link">
        Forgot your password? <a href="">Click here</a>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    };

    return {
      email,
      password,
      Login,
    };
  },
};
</script>

<style>
/* Use a custom font */
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

/* Define colors */
:root {
  --primary-color: #2e86c1;
  --danger-color: #dc3545;
  --gray-color: #f2f2f2;
}

/* Set base styles */
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

/* Style the container */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--gray-color);
}

/* Style the form */
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Style the form header */
.login-header {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: bold;
}

/* Style the form input */
.form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
}

.form-label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.signup-link {
  font-size: 0.8rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  text-align: right;
  color: var(--primary-color);
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}

.form-control {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid #ccc;
  transition: all 0.2s ease;
}

.form-control:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.password-input {
  position: relative;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 0.8rem;
  padding: 0.2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: #333;
}
.password-toggle:hover {
  text-decoration: underline;
}

/* Style the submit button */
.btn {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-radius: 50px;
  border: none;
  color: white;
  background-color: var(--primary-color);
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}

.btn:hover {
  background-color: #0069d9;
}
.forgot-password-link {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}
</style>