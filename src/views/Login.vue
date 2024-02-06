<!-- Login.vue -->

<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" v-model="username" placeholder="Enter your username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" v-model="password" placeholder="Enter your password" required>
        <br>
        <p>沒有帳號？<router-link to = "/register">註冊</router-link></p>
        <button type="submit">Login</button>
      </form>
    </div>
</template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // 在实际项目中，你需要在这里处理登录逻辑，可能会涉及到向后端发送请求验证用户等
        console.log('Username:', this.username);
        console.log('Password:', this.password);
        // 模拟登录成功后的操作，你可以在这里进行页面跳转等
        alert('Login successful!');
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  </style>
  