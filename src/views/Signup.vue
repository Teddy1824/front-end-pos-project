<template>
    <form @submit.prevent="register">
<div class="loginBox">
     <img class="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" />
    <h3>Sign up here</h3>
        <div class="inputBox"> 
            <input id="name" type="text" name="Username" v-model="fullname" placeholder="Name">
            <input id="tel" type="tel" name="Contact" v-model="phone_number" placeholder="0123456789">
            <input id="email" type="email" name="Email" v-model="email" placeholder="joe@1234.com">
            <input id="pass" type="password" name="Password" v-model="password" placeholder="Password"> 
            </div>
           <input type="submit" name="" value="Sign Up">
</div>
    </form> 
</template>

<script>
export default {
  data() {
    return {
      fullname: "",
      phone_number: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      fetch("https://pos-backend-pos.herokuapp.com/user/register", {
        method: "POST",
        body: JSON.stringify({
          fullname: this.fullname,
          phone_number: this.phone_number,
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          alert("User registered");
          localStorage.setItem("jwt", json.jwt);
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};

</script>

<style>
 .loginBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    min-height: 200px;
    background: #000000;
    border-radius: 10px;
    padding: 40px;
    box-sizing: border-box
}

.user {
    margin: 0 auto;
    display: block;
    margin-bottom: 20px
}

h3 {
    margin: 0;
    padding: 0 0 20px;
    color: #59238F;
    text-align: center
}

.loginBox input {
    width: 100%;
    margin-bottom: 20px
}

.loginBox input[type="text"],
.loginBox input[type="password"],
.loginBox input[type="email"],
.loginBox input[type="tel"] {
    border: none;
    border-bottom: 2px solid #262626;
    outline: none;
    height: 40px;
    color: black;
    background: transparent;
    font-size: 16px;
    padding-left: 20px;
    box-sizing: border-box
}

.loginBox input[type="text"]:hover,
.loginBox input[type="password"]:hover,
.loginBox input[type="email"]:hover,
.loginBox input[type="tel"] {
    color: black;
    border: 1px solid #59238F;
    box-shadow: 0 0 5px rgba(0, 255, 0, .3), 0 0 10px rgba(0, 255, 0, .2), 0 0 15px rgba(0, 255, 0, .1), 0 2px 0 black
}

.loginBox input[type="text"]:focus,
.loginBox input[type="password"]:focus,
.loginBox input[type="email"]:focus,
.loginBox input[type="tel"]:focus {
    border-bottom: 2px solid #262626
}

.inputBox {
    position: relative
}

.inputBox span {
    position: absolute;
    top: 10px;
    color: #262626
}

.loginBox input[type="submit"] {
    border: none;
    outline: none;
    height: 40px;
    font-size: 16px;
    background: #59238F;
    color: black;
    border-radius: 20px;
    cursor: pointer
}

.loginBox a {
    color: #262626;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    display: block
}

a:hover {
    color: #00ffff
}

p {
    color: #0000ff
}
</style>