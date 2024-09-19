<template>
    <div class="container">
        <div class="rule-one"></div>
        <div class="logos">
            <a href="http://www.valvesoftware.com/" class="link-to-steam">
                <img src="https://store.akamai.steamstatic.com/public/images/footerLogo_valve_new.png" alt=""
                    class="img-one">
            </a>
            <img src="https://store.akamai.steamstatic.com/public/images/v6/logo_steam_footer.png" alt=""
                class="img-two">
        </div>
        <div class="bottom-info">
            <span class="text-one">
                © 2024 Valve Corporation. Все права сохранены. Все торговые марки являются собственностью
                соответствующих владельцев в США и других странах.
            </span>
            <div class="all-info">
                НДС включён во все цены, где он применим.
                <a href="https://store.steampowered.com/privacy_agreement/" class="link one">Политика
                    конфиденциальности</a>
                <span class="sumbol">|</span>
                <a href="https://store.steampowered.com/legal/" class="link two">Правовая информация</a>
                <span class="sumbol">|</span>
                <a href="https://store.steampowered.com/subscriber_agreement/" class="link three">Соглашение подписчика Steam</a>
                <span class="sumbol">|</span>
                <a href="https://store.steampowered.com/steam_refunds/" class="link four">Возвраты</a>
                <span class="sumbol">|</span>
                <a href="https://store.steampowered.com/account/cookiepreferences/" class="link five">Файлы cookie</a>
            </div>
            <div class="mob-vers" :style="{
                display: btnMobileDisplay
            }">
                <button class="btn-mob-vers" @click="clickToMobile">
                    Мобильная версия
                </button>
            </div>
            <div class="rule-two"></div>
            <ul class="valve-links">
                <li class="link one">
                    <a href="http://www.valvesoftware.com/about" class="link-a one">
                        О Valve
                    </a>
                </li>
                <span class="sumbolt">|</span>
                <li class="link two">
                    <a href="http://www.valvesoftware.com/" class="link-a two">
                        Вакансии
                    </a>
                </li>
                <span class="sumbolt">|</span>
                <li class="link th">
                    <a href="http://www.steampowered.com/steamworks/" class="link-a th">
                        Steamworks
                    </a>
                </li>
                <span class="sumbolt">|</span>
                <li class="link fr">
                    <a href="https://partner.steamgames.com/steamdirect" class="link-a fr">
                        Дистрибуция Steam
                    </a>
                </li>
                <span class="sumbolt">|</span>
                <li class="link fv">
                    <a href="https://help.steampowered.com/ru/" class="link-a fv">
                        Служба поддержки
                    </a>
                </li>
                <span class="sumbolt">|</span>
                <li class="link six">
                    <a href="https://store.steampowered.com/digitalgiftcards/" class="link-a six">
                        Подарочные карты
                    </a>
                </li>
                <span class="sumbolt">|</span>
                <li class="link sv">
                    <a href="https://www.facebook.com/Steam" class="link-a sv">
                        <img src="https://store.akamai.steamstatic.com/public/images/ico/ico_facebook.png" alt=""
                            class="ico-fc">
                        Steam
                    </a>
                </li>
                <span class="sumbolt">|</span>
                <li class="link eight">
                    <a href="http://twitter.com/steam" class="link-a eight">
                        <img src="https://store.akamai.steamstatic.com/public/images/ico/ico_twitter.png" alt=""
                            class="ico-tw">
                        @steam
                    </a>
                </li>
            </ul>
            <div class="extra-space"></div>
        </div>


    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const isClickMobile = ref(false);
const btnMobileDisplay = ref('block');
const clickToMobile = () => {
    isClickMobile.value = true
    localStorage.setItem('clickmobile', true)
    btnMobileDisplay.value = 'none'
}
onMounted(() => {
    if (localStorage.getItem('clickmobile') !== null) {
        if (localStorage.getItem('clickmobile') === false) {
            btnMobileDisplay.value = 'block'
        }
        else {
            btnMobileDisplay.value = 'none'
        }
    }



})
</script>

<style scoped>
.container {
    width: 940px;
    margin: 0px auto;
    padding-top: 16px;
    margin-top: 27px;
    padding-bottom: 60px;
}
.extra-space {
    height: 60px;
    width: 100%;
}
.valve-links {
    margin-top: 8px;
    font-family: "Motiva Sans", Sans-serif;
    font-weight: normal;
    font-size: 13px;
    color: #61686D;
    display: flex;
    position: relative;
    left: -15px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
}

.link-a {
    color: #C6D4DF;
    display: flex;
    align-items: center;
}

.link-a:hover {
    color: white;
}

.btn-mob-vers {
    border-radius: 2px;
    border: none;
    padding: 1px;
    display: inline-block;
    cursor: pointer;
    text-decoration: none !important;
    color: #66c0f4;
    background: #212c3d;
    padding: 0 15px;
    font-size: 15px;
    line-height: 150%;
}

.btn-mob-vers:hover {
    background: #66c0f4;
    color: white;
}

.mob-vers {
    text-align: center;
    padding: 20px 0;
    color: #8F98A0;
    font-size: 12px;
    line-height: 16px;
    font-family: Arial, Helvetica, sans-serif;
}

.bottom-info {
    position: relative;
    top: -7px;
}

.sumbol {
    color: #8F98A0;
    font-size: 12px;
    line-height: 16px;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    top: 1px;
}
.sumbolt {
    color: #8F98A0;
    font-size: 12px;
    line-height: 16px;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    top: 1px;
}
.link {
    color: #C6D4DF;
    text-decoration: none;
}

.one {
    margin-left: 7px;
}

.link:hover {
    color: white;
}

.all-info {
    color: #8F98A0;
    margin-left: 12px;
    font-size: 12px;
    gap: 5px;
    position: relative;
    top: -2px;
    line-height: 16px;
    font-family: Arial, Helvetica, sans-serif;
}

.text-one {
    color: #8F98A0;
    font-size: 12px;
    line-height: 1px;
    margin-left: 12px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
}

.rule-one {
    height: 8px;
    border-top: 1px solid #363c44;
    width: 100%;
    margin-bottom: 2px;
    margin-top: 7px;
}
.rule-two {
    height: 8px;
    border-top: 1px solid #363c44;
    width: 100%;
    margin-bottom: 2px;
}

.logos {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
}

.img-one {
    height: 25px;
    object-fit: contain;
}

.img-two {
    height: 26px;
    object-fit: contain;
}
@media(max-width:975px) {
    .container {
        display: none;
    }
}
@media(min-width:976px) {
    .container {
        display: flex;
    }
}
@media(min-width:1100px) {
    .bottom-info {
        top: -7px;
    }
    .all-info {
        margin-bottom: 12px;
    }
    .rule-one {
        margin-bottom: 2px;
    }
    .valve-links {
        margin-top: 8px;
        left: -7px;
    }
    .sumbolt {
        margin-left: 17px;
        margin-right: 17px;
    }
    .ico-fc {
        margin-right: 5px;
        object-fit: contain;
    }
    .ico-tw {
        margin-right: 4px;
        object-fit: contain;
    }
    .container {
        padding-top: 18px;
        padding-bottom: 53px;
    }
}
@media(min-width:1300px) {
    .container {
        padding-top: 16px;
    }
    .bottom-info {
        top: -10px;
    }
    .all-info {
        margin-bottom: 10px;
    }
    .rule-one {
        margin-bottom: 3px;
    }
    .valve-links {
        margin-top: 9px;
        left: -7px;
    }
    .sumbolt {
        margin-left: 17px;
        margin-right: 17px;
    }
    .ico-fc {
        margin-right: 5px;
        object-fit: contain;
    }
    .ico-tw {
        margin-right: 4px;
        object-fit: contain;
    }
}
</style>
