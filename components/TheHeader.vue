<template>
    <div class="container">
        <ul>
            <li class="logo li"><a href="https://store.steampowered.com/?snr=1_60_4__global-header"><img
                        src="../public/logo.svg" alt="" class="logo"></a></li>
            <div class="content-pc">
                <div class="cont-store" @mouseover="openStore" @mouseout="closeStore">
                    <li class="store li"><a class="store-a"
                            href="https://store.steampowered.com/?snr=1_60_4__global-header">магазин</a></li>
                    <div class="store-popup" :style="{
                        opacity: storeOpacity,
                        pointerEvents: storePointer
                    }" @mouseover="openStore" @mouseout="closeStore">
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
                            <a class="a-i-p-s"
                                href="https://store.steampowered.com/points/shop/?snr=1_60_4__global-header">
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
                <div class="cont-comm" @mouseover="openComm" @mouseout="closeComm">
                    <li class="community li"><a class="comm-a" href="https://steamcommunity.com/">сообщество</a></li>
                    <div class="comm-popup" :style="{
                        opacity: commOpacity,
                        pointerEvents: commPointer
                    }" @mouseover="openComm" @mouseout="closeComm">
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
                <li class="info li"><a class="info-a"
                        href="https://store.steampowered.com/about/?snr=1_60_4__global-header">информация</a></li>
                <li class="help li"><a class="help-a" href="https://help.steampowered.com/ru/">поддержка</a></li>
                <li class="right li">
                    <a href="https://store.steampowered.com/about/?snr=1_60_4__global-header">
                        <button class="dwn-btn"><img src="../public/dwn.png" alt="" class="dwn-img">Установить
                            Steam</button>
                    </a>

                    <a href="" class="login li">войти</a>
                    <span class="sumbol">|</span>
                    <div class="cont-lang lang li">
                        <span class="lang li" @click="isLang">язык <img src="../public/padd.png" alt="" class="pad-img"></span>
                        <div class="lang-popup"
                        :style="{
                            opacity:langOpacity,
                            pointerEvents:langPointer
                        }"
                        @mouseout="closeLang"
                        @mouseover="openLang"
                        >
                            <div class="l-p-item" v-for="(lang,index) in allLanguages" :key="index" @click="changeLanguage(lang.code)" :data-google-lang="lang.code">{{ lang.name }}</div>
                            <a href="https://www.valvesoftware.com/en/contact?contact-person=Translation%20Team%20Feedback" class="l-p-item">
                                Сообщить о проблеме с переводом
                            </a>
                        </div>
                    </div>
                    
                </li>
            </div>


        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const changeLanguage = (langCode) => {
    const url = new URL(window.location);
    url.searchParams.set('l', langCode);
    window.history.replaceState(null, '', url.toString());
}

const allLanguages = [
    {
        name: '简体中文 (упрощенный китайский)',
        code: 'zh-CN'
    },
    {
        name: '繁體中文 (традиционный китайский)',
        code: 'zh-TW'
    },
    {
        name: '日本語 (японский)',
        code: 'ja'
    },
    {
        name: '한국어 (корейский)',
        code: 'ko'
    },
    {
        name: 'ไทย (тайский)',
        code: 'th'
    },
    {
        name: 'Български (болгарский)',
        code: 'bg'
    },
    {
        name: 'Čeština (чешский)',
        code: 'cs'
    },
    {
        name: 'Dansk (датский)',
        code: 'da'
    },
    {
        name: 'Deutsch (немецкий)',
        code: 'de'
    },
    {
        name: 'English (английский)',
        code: 'en'
    },
    {
        name: 'Español - España (испанский)',
        code: 'es'
    },
    {
        name: 'Español - Latinoamérica (латиноам. испанский)',
        code: 'es-419'
    },
    {
        name: 'Ελληνικά (греческий)',
        code: 'el'
    },
    {
        name: 'Français (французский)',
        code: 'fr'
    },
    {
        name: 'Italiano (итальянский)',
        code: 'it'
    },
    {
        name: 'Bahasa Indonesia (индонезийский)',
        code: 'id'
    },
    {
        name: 'Magyar (венгерский)',
        code: 'hu'
    },
    {
        name: 'Nederlands (нидерландский)',
        code: 'nl'
    },
    {
        name: 'Norsk (норвежский)',
        code: 'no'
    },
    {
        name: 'Polski (польский)',
        code: 'pl'
    },
    {
        name: 'Português (португальский)',
        code: 'pt'
    },
    {
        name: 'Português-Brasil (бразильский португальский)',
        code: 'pt-BR'
    },
    {
        name: 'Română (румынский)',
        code: 'ro'
    },
    {
        name: 'Suomi (финский)',
        code: 'fi'
    },
    {
        name: 'Svenska (шведский)',
        code: 'sv'
    },
    {
        name: 'Türkçe (турецкий)',
        code: 'tr'
    },
    {
        name: 'Tiếng Việt (вьетнамский)',
        code: 'vi'
    },
    {
        name: 'Українська (украинский)',
        code: 'uk'
    },
];
const storeOpacity = ref(0);
const langOpacity = ref(0);
const langPointer = ref('none');
const storePointer = ref('none');
const isOpenLang = ref(false);
const commOpacity = ref(0);
const commPointer = ref('none');
const isLang = () => {
    isOpenLang.value = !isOpenLang.value
    if (isOpenLang.value === false) {
        langOpacity.value = 0
        langPointer.value = 'none'
    }
    else {
        langOpacity.value = 1
        langPointer.value = 'visible'
    }
}
const openLang = () => {
    langOpacity.value = 1
    langPointer.value = 'visible'
}
const closeLang = () => {
    langOpacity.value = 0
    langPointer.value = 'none'
}
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
.l-p-item {
    padding: 5px 12px;
    color: #dcdedf;
    text-transform: none;
    font-family: Motiva Sans, Arial, Helvectica, Verdana, sans-serif;
    font-size: 12px;
    font-weight: normal;
    line-height: normal;
    text-align: left;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.l-p-item:hover {
    background-color:#dcdedf;
    color: #3D4450;
}
.cont-lang {
    position: absolute;
    z-index: 199;
    right: -55px;
    display: flex;
    width: auto;
    height: 0;
    flex-direction: column;
    align-items: end;
}
.lang-popup {
    border: 1px solid #3D4450;
    position: relative;
    background-color: #3D4450;
    box-shadow: 0 0 12px #000000;
    top: 2.5px;
    min-width: 285px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:2.6px;
    scale: 1.005;
    height: auto;
    padding-bottom: 1px;
    left: -9.5px;
    transition: all 0.2s ease;
}
.comm-a {
    color: #dcdedf;
    transition: all 0.1s ease;
}
.comm-a:hover {
    color: white;
}

.info-a {
    color: #dcdedf;
    transition: all 0.1s ease;
}
.info-a:hover {
    color: white;
}
.help-a {
    color: #dcdedf;
    transition: all 0.1s ease;
}
.help-a:hover {
    color: white;
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
    left: -5px;
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
    transition: all 0.1s ease;
    cursor: pointer;
}
.login:hover {
    color: white;
}

.lang {
    padding-right: 5px;
    color: #b8b6b4;
    text-transform: none;
    font-size: 11px;
    margin-top: 2px;
    font-weight: normal;
    transition: all 0.1s ease;
    cursor: pointer;
}
.lang:hover {
    color: white;
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
