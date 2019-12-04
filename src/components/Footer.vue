<template>
    <footer class="d-flex-r clear container text-white">
       <div class="copyright">
            <p>Copyright &copy; 2018 - All Rights Reserved - <a href="#">Domain Name</a></p>
            <p>Built With Love from Nesa Cohort 9</p>
            <a href="#mypage"><div id="backtoptop"><i class="fa fa-chevron-up"></i></div></a>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
.copyright{
    display: flex;
    position: absolute;
    width: 100%;
    bottom: 0px;
    left: 0px;
    padding-top: 20px;
    justify-content: space-around;
    text-align: center;
    background: #34495e;
    color: white;
}
</style>