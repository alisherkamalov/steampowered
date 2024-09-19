<template>
<div class="container">
    <div class="left cont">
        Первый раз в Steam?
        <a href="https://store.steampowered.com/join/?&snr=1_60_4__62" class="link-create-acc">
            <span class="text-create">Создать аккаунт</span>
        </a>    
    </div>
    <div class="right cont">
        <div class="subtext">
            Это бесплатно и просто. Откройте для себя тысячи игр, в которые можно играть с миллионами новых друзей.
            <a href="https://store.steampowered.com/about" class="link-to-games">Узнайте больше о Steam</a>
        </div>
    </div>
</div>
</template>

<script setup>

</script>

<style scoped>
.subtext {
    font-size: 14px;
    color: #b8b6b4;
    text-align: center;
}
.link-to-games {
    max-width: 60%;
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
    color: #b8b6b4;
    text-decoration: underline;

}
.link-to-games:hover {
    max-width: inherit;
    text-align: inherit;
    font-size: inherit;
    margin-top: inherit;
    color: white;
    text-decoration: inherit;
}
.right {
    position: relative;
    left: 8px;
    top: 10px;
    color: #E9E9E9;
    background-color: #181A21;
    font-family: "Motiva Sans", Sans-serif;
    font-weight: normal;
}
.container {
    display: flex;
    flex-direction: row;
    padding-top: 48px;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    justify-content: center;
    background-color: #181A21;
}
.text-create {
    padding: 0 20px;
    font-size: 15px;
    line-height: 30px;
    border-radius: 2px;
    display: block;
    background: linear-gradient(to right, #47bfff 5%, #1a44c2 60%);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    background-position: 25%;
    background-size: 330% 100%;
    text-align: center;
    color: white;
    text-shadow: none;
    cursor: pointer;
    font-family: "Motiva Sans", Sans-serif;
    font-weight: normal;
}
.link-create-acc:hover > .text-create {
    background: linear-gradient(to right, #47bfff 40%, #1a44c2 150%);
}
.link-create-acc {
    margin: 10px 0 10px 0;
    display: block;
    text-align: center;
    cursor: pointer;
    text-decoration: none !important;
    border-radius: 2px;
    border: none;
    padding: 3px 20px;
    color: white;
    text-shadow: none;
}
.left {
    font-size: 20px;
    font-weight: 800;
    color: white;
    position: relative;
    top: 20px;
    left: 8px;
}
.cont {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 300px;
}
</style>