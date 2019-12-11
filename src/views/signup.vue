<template>
<div>
    <div class="sign-up-form">
        <h1>Sign Up Now</h1>
        <form>
            <input type="email" class="input-box" placeholder="Your Email">
            <input type="password" class="input-box" placeholder="Your Password">
            <p><span><input type="checkbox"></span> I agree to the term Of services</p>
            <button type="button" class="sign-up-btn">Sign up</button>
            <hr>
            <p class="or">OR</p>
            <button type="button" class="twitter-btn">Login with twitter</button>
            <p>Do you have an account ? <a href="#">Sign in</a></p>
        </form>
    </div>
</div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";
    import Footer from "../components/Footer.vue";

    export default {
        name: "signup",
        components: {
            Navbar
            Footer
        }
    
    }
</script>

<style scoped>
.sign-up-form{
    width: 300px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
    background:#191919;
    margin: 8% auto 0;
    text-align: center;
}
.sign-up-form h1{
    color: #1c8adb;
    margin-bottom: 30px;
}
.input-box{
    border-radius: 20px;
    margin: 10px 0;
    width: 80%;
    outline: none;
    border: 2px solid  #3489db;
    padding: 12px 15px;
    outline: none;
    color: white;
    border-radius: 24px;
}
.input-box:focus{
    width: 90%
}
button{
    color: #fff;
    width: 90%;
    padding: 10px;
    border-radius: 20px;
    font-size: 15px;
    margin: 10px 0;
    border: none;
    outline: none;
    cursor: pointer;
}
.sign-up-btn{
    background-color: #1c8adb;
}
.twitter-btn{
    background-color: #21afde;
}
a{
    text-decoration: none;
}
hr{
    margin-top: 20px;
    width: 80%;
}
.or{
    background: #fff;
    width: 30px;
    margin: -19px auto 10px;
}

</style>