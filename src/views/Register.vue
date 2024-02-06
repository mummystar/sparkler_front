<!-- Login.vue -->

<template>
    <div class="login-container">
      <h2>註冊</h2>
      <form @submit.prevent="register">
        <label for="username">用戶名</label>
        <input type="text" v-model="username" placeholder="請輸入用戶名" required>
        <br>
        <label for="password">密碼</label>
        <input type="password" v-model="password" placeholder="請輸入密碼" required>
        <br>
        <label for="confirmPassword">請確認密碼</label>
        <input type="password" v-model="confirmPassword" placeholder="請再次輸入密碼" required>
        <br>
        <button type="submit">註冊</button>
      </form>
    </div>
  </template>
  
  <script>
  // import { useRouter } from 'vue-router';
  export default {
    name: 'RegisterView',
    data() {
      return {
        username: '',
        password: '',
        confirmPassword:''
      };
    },
    methods: {
      register() {
        if (this.confirmPassword == this.password)
        {
          alert("註冊成功");

          setTimeout(()=>{
            // const router = useRouter;
            this.$router.push('/login');
          },2000)
        }
        else{
          alert("確認密碼與密碼不符，請重新輸入");
          this.confirmPassword = '';
          return;
        }
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
  