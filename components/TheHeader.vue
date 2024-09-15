<template>
    <div class="container">
        <ul>
            <li class="logo li"><a href="https://store.steampowered.com/?snr=1_60_4__global-header"><img src="../public/logo.svg" alt="" class="logo"></a></li>
            <div class="content-pc">
                <div class="cont-store"
                @mouseover="openStore"
                    @mouseout="closeStore">
                    <li class="store li"><a class="store-a" href="https://store.steampowered.com/?snr=1_60_4__global-header">магазин</a></li>
                    <div class="store-popup"
                    :style="{
                        opacity:storeOpacity,
                        pointerEvents:storePointer
                    }"
                    @mouseover="openStore"
                    @mouseout="closeStore"
                    >
                        <ul class="s-popup ul">
                            <a class="a-i-p-s" href="https://store.steampowered.com/?snr=1_60_4__global-header">
                                <li class="item-popup-s">Главная</li>
                            </a>
                            <a class="a-i-p-s" href="">
                                <li class="item-popup-s">Рекомендации</li>
                            </a>
                            <a class="a-i-p-s" href="">
                                <li class="item-popup-s">Список желаемого</li>
                            </a>
                            <a class="a-i-p-s" href="https://store.steampowered.com/points/shop/?snr=1_60_4__global-header">
                                <li class="item-popup-s">Предметы за очки</li>
                            </a>
                            <a class="a-i-p-s" href="https://store.steampowered.com/news/?snr=1_60_4__global-header">
                                <li class="item-popup-s">Новости</li>
                            </a>
                            <a class="a-i-p-s" href="https://store.steampowered.com/stats/?snr=1_60_4__global-header">
                                <li class="item-popup-s">Статистика</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div class="cont-comm"
                @mouseover="openComm"
                    @mouseout="closeComm"
                >
                    <li class="community li"><a class="comm-a" href="https://steamcommunity.com/">сообщество</a></li>
                    <div class="comm-popup"
                    :style="{
                        opacity:commOpacity,
                        pointerEvents:commPointer
                    }"
                    @mouseover="openComm"
                    @mouseout="closeComm"
                    >
                        <ul class="s-popup ul">
                            <a class="a-i-p-s" href="https://steamcommunity.com/">
                                <li class="item-popup-s">Главная</li>
                            </a>
                            <a class="a-i-p-s" href="https://steamcommunity.com/discussions/">
                                <li class="item-popup-s">Обсуждения</li>
                            </a>
                            <a class="a-i-p-s" href="https://steamcommunity.com/workshop/">
                                <li class="item-popup-s">Мастерская</li>
                            </a>
                            <a class="a-i-p-s" href="https://steamcommunity.com/market/">
                                <li class="item-popup-s">Торговая площадка</li>
                            </a>
                            <a class="a-i-p-s" href="https://steamcommunity.com/?subsection=broadcasts">
                                <li class="item-popup-s">Трансляции</li>
                            </a>
                            
                        </ul>
                    </div>
                </div>
                <li class="info li"><a class="info-a" href="https://store.steampowered.com/about/?snr=1_60_4__global-header">информация</a></li>
                <li class="help li"><a class="help-a" href="https://help.steampowered.com/ru/">поддержка</a></li>
                <li class="right li">
                    <a href="https://store.steampowered.com/about/?snr=1_60_4__global-header">
                        <button class="dwn-btn"><img src="../public/dwn.png" alt="" class="dwn-img">Установить
                            Steam</button>
                    </a>
                    
                    <span class="login li">войти</span>
                    <span class="sumbol">|</span>
                    <span class="lang li">язык <img src="../public/padd.png" alt="" class="pad-img"></span>
                </li>
            </div>


        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const storeOpacity = ref(0);
const storePointer = ref('none');
const commOpacity = ref(0);
const commPointer = ref('none');
const openStore = () => {
    storeOpacity.value = 1
    storePointer.value = 'visible'
}
const closeStore = () => {
    storeOpacity.value = 0
    storePointer.value = 'none'
}
const openComm = () => {
    commOpacity.value = 1
    commPointer.value = 'visible'
}
const closeComm = () => {
    commOpacity.value = 0
    commPointer.value = 'none'
}
</script>
<style scoped>
.comm-a {
    color: #dcdedf;
}
.info-a {
    color: #dcdedf;
}
.help-a {
    color: #dcdedf;
}
.store-a {
    color: #1a9fff;
    font-weight: 500;
    height: 18px;
}
.item-popup-s {
    text-decoration: none;
    text-transform: none;
    font-size: 12px;
    color: #dcdedf;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 8px;
    cursor: pointer;
    padding-bottom: 7px;
}
.a-i-p-s {
    color: #dcdedf;
    width: 100%;
}
.item-popup-s:hover {
    background-color: #dcdedf;
    color: #3D4450;
}

.item-popup-s:hover .a-i-p-s {
    color: #3D4450;
}
.store-popup {
    position: absolute;
    z-index: 1500;
    opacity: 1;
    left: -6px;
    top: 22px;
    overflow: hidden;
    transition: all 0.2s ease;
    min-width: 134px;
    max-width: 100%;
    background: #3D4450;
    text-align: left;
    box-shadow: 3px 3px 5px -3px #000;
    text-align: left;
}
.comm-popup {
    position: absolute;
    z-index: 1500;
    opacity: 1;
    left: -6px;
    top: 22px;
    overflow: hidden;
    transition: all 0.2s ease;
    min-width: 134px;
    max-width: 100%;
    background: #3D4450;
    text-align: left;
    box-shadow: 3px 3px 5px -3px #000;
    text-align: left;
}
.s-popup {
    flex-direction: column;
    left: 0;
    gap: 0;
    align-items: start;
}
.cont-store {
    position: relative;
}
.cont-comm {
    position: relative;
}
.container {
    width: 100%;
    height: 104px;
    background-color: #171d25;
    display: flex;
    align-items: center;
    justify-content: center;
}
.pad-img {
    position: relative;
    top: 2px;
    left: -4px;
}
.logo {
    width: 176px;
    margin-top: 2px;
    margin-right: 36px;
    object-fit: contain;
}
.content-pc {
    width: auto;
    height: auto;
    display: flex;
    gap: 14px;
    position: relative;
    top: 5px;
    left: -20px;
}

.dwn-img {
    position: relative;
    top: -1px;
    left: -1.5px;
    margin-right: 8.5px;
}

.dwn-btn {
    width: 138px;
    height: 24px;
    line-height: 24px;
    margin-right: 3px;
    background-color: #5c7e10;
    text-shadow: none;
    border: 0;
    position: relative;
    left: -1px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e5e4dc;
    font-weight: normal;
    font-size: 11px;
    transition: all 0.2s ease;
    font-family: "Motiva Sans", "Twemoji", "Noto Sans", Helvetica, sans-serif;
}
.dwn-btn:hover {
    background-color: #699114;
    color: white;
}

.li {
    text-transform: uppercase;
    font-size: 16px;
    font-family: "Motiva Sans", "Twemoji", "Noto Sans", Helvetica, sans-serif;
    font-weight: 500;
    color: #dcdedf;
}

.store {
    color: #1a9fff;
    font-weight: 500;
    height: 18px;
    border-bottom: 3px solid #1a9fff;
}

ul {
    gap: 15px;
    height: 100%;
    align-items: center;
    position: relative;
    left: 20px;
}

.right {
    margin-right: 16px;
    margin-left: 22px;
    position: relative;
    display: flex;
    top: -39px;
}

.login {
    padding: 0 5px;
    color: #b8b6b4;
    text-transform: none;
    font-size: 11px;
    margin-top: 6px;
    font-weight: normal;
}

.lang {
    padding-right: 5px;
    color: #b8b6b4;
    text-transform: none;
    font-size: 11px;
    margin-top: 4px;
    font-weight: normal;
}

.sumbol {
    padding-right: 12px;
    padding-left: 5px;
    color: #b8b6b4;
    text-transform: none;
    font-size: 11px;
    position: relative;
    top: -1px;
    right: 0px;
    margin-top: 6px;
    font-weight: normal;
}
</style>