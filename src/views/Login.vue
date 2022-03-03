<template>
<div class="loginBox"> <img class="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px">
    <h3>Hey there!</h3>
    <form @submit.prevent="handleLogin">
        <div class="inputBox"> <input id="uname" type="email" name="email" placeholder="Email" v-model="email"/> 
        <input id="pass" type="password" name="password" placeholder="Password" v-model="password"/> </div>
         <a href="/products"><input type="submit" name="" value="Login"/></a>
    </form>
    <h6>Don't have an account?, Sign up below to see our products</h6>
    <div class="text-center">
        <a href="/signup"><button type="button" class="btn btn-light btn-rounded">Sign-up >></button></a>
    </div>
</div>
</template>

<script>

export default {
  name: "Login",
  data() {
    
    return {
      loading: false,
      message: "",
      email: '',
      password: ''


    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
      // if (this.loggedIn) {
      //   this.$router.push("/products")
      // }
    },
  },
   created() {
    if (this.loggedIn) {
      this.$router.push({ name: "Products"});
    }
  },
  methods: {
    handleLogin() {
      console.log(this.email, this.password)
      fetch("https://pos-backend-pos.herokuapp.com/user/login", {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this.password
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if(json.message) {
            alert("User logged in");
            localStorage.setItem("jwt", json.message);
            this.$router.push("/products");
          }

        })
        .catch((err) => {
          alert(err);
        });
    
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: Raleway, sans-serif;
}

body {
	background: linear-gradient(90deg, #c7c5f4, #776bcc);
}

.loginBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    min-height: 200px;
    background: white;
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
.loginBox input[type="password"] {
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
.loginBox input[type="password"]:hover {
    color: black;
    border: 1px solid white;
    box-shadow: 0 0 5px rgba(0, 255, 0, .3), 0 0 10px rgba(0, 255, 0, .2), 0 0 15px rgba(0, 255, 0, .1), 0 2px 0 black
}

.loginBox input[type="text"]:focus,
.loginBox input[type="password"]:focus {
    border-bottom: 2px solid #59238F
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
    color: #fff;
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