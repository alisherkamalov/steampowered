<template>
    <div class="contain-menu"
    :style="{
        overflowX:menuScroll
    }">
        <ul class="ul-menu">
            <div>
                <li class="menu-item login"><a class="login-a" href="">Войти</a></li>
            <li class="menu-item-store" @click="openAndCloseStore" 
            :style="{
                backgroundColor:storeColor,
            }"><span class="span-store"
            :style="{
                color:storeTColor
            }"
            >Магазин</span><div class="chevron"
            :style="{
                rotate:chevronStore
            }"
            ></div></li>
            <div class="store-popup-mob"
            :style="{
                height:storeHeight,
                borderBottom:borderStore
            }"
            >
                <ul class="ul-popup-s">
                    <li class="li-popup-s"><a class="a-popup" href="https://store.steampowered.com/login/?redir=login%2F%3Fsnr%3D1_4_4__more-content-login&redir_ssl=1&snr=1_60_4__global-header">Главная</a></li>
                    <li class="li-popup-s"><a class="a-popup" href="">Рекомендации</a></li>
                    <li class="li-popup-s"><a class="a-popup" href="">Список желаемого</a></li>
                    <li class="li-popup-s"><a class="a-popup" href="https://store.steampowered.com/login/?redir=login%2F%3Fsnr%3D1_4_4__more-content-login&redir_ssl=1&snr=1_60_4__global-header">Предметы за очки</a></li>
                    <li class="li-popup-s"><a class="a-popup" href="https://store.steampowered.com/login/?redir=login%2F%3Fsnr%3D1_4_4__more-content-login&redir_ssl=1&snr=1_60_4__global-header">Новости</a></li>
                    <li class="li-popup-s"><a class="a-popup" href="https://store.steampowered.com/login/?redir=login%2F%3Fsnr%3D1_4_4__more-content-login&redir_ssl=1&snr=1_60_4__global-header">Статистика</a></li>
                </ul>
            </div>
            <li class="menu-item-comm" @click="openAndCloseComm" 
            :style="{
                backgroundColor:commColor,
                top:commLiTop
            }"
            ><span class="span-comm"
                :style="{
                color:commTColor
            }"
                >Сообщество</span><div class="chevron"
                :style="{
                rotate:chevronComm
            }"
                ></div></li>
            <div class="comm-popup-mob"
            :style="{
                height:commHeight,
                borderBottom:borderComm,
                top:commPopupTop
            }"
            >
                <ul class="ul-popup-c">
                    <li class="li-popup-c"><a class="a-popup" href="https://store.steampowered.com/login/?snr=1_4_4__more-content-login">Главная</a></li>
                    <li class="li-popup-c"><a class="a-popup" href="https://store.steampowered.com/login/?redir=login%2F%3Fsnr%3D1_4_4__more-content-login&redir_ssl=1&snr=1_60_4__global-header">Обсуждения</a></li>
                    <li class="li-popup-c"><a class="a-popup" href="https://store.steampowered.com/login/?redir=login%2F%3Fsnr%3D1_4_4__more-content-login&redir_ssl=1&snr=1_60_4__global-header">Мастерская</a></li>
                    <li class="li-popup-c"><a class="a-popup" href="https://store.steampowered.com/login/?redir=login%2F%3Fsnr%3D1_4_4__more-content-login&redir_ssl=1&snr=1_60_4__global-header">Торговая площадка</a></li>
                    <li class="li-popup-c"><a class="a-popup" href="https://store.steampowered.com/login/?redir=login%2F%3Fsnr%3D1_4_4__more-content-login&redir_ssl=1&snr=1_60_4__global-header">Трансляции</a></li>
                </ul>
            </div>
            <li class="menu-item info"><a class="info-a" href="">Информация</a></li>
            <li class="menu-item help"><a class="help-a" href="">Поддержка</a></li>
            <li class="advance-menu">
                <span class="text lang-mob">
                    Изменить язык
                </span>
                <span class="text dwn-mob"
                :style="{
                    top:dwnTop
                }"
                >
                    Скачать мобильное приложение Steam
                </span>
                <span class="text vers-mob">
                    Полная версия
                </span>
            </li>
            <div class="footer-spacer"
            :style="{
                position:positionSpacer,
            }"
            ></div>
            </div>
            <li class="footer-menu"
            :style="{
                paddingTop:footerPadding
            }"
            >
                <img src="https://store.akamai.steamstatic.com/public/shared/images/responsive/logo_valve_footer.png"
                    alt="" class="logo-bottom">
                <span class="footer-content">
                © Valve Corporation. Все права сохранены. Все торговые марки являются собственностью соответствующих
                владельцев в США и других странах.
                    <a href="" class="link">Политика конфиденциальности</a>
                <span class="sumbol-m">|</span>
                <a href="" class="link two"
                :style="{
                    marginLeft:leftInfo
                }"
                >Правовая информация</a>
                <span class="sumbol-m">|</span>
                <a href="" class="link">Соглашение подписчика Steam</a>
                <span class="sumbol-m">|</span>
                <a href="" class="link four"
                :style="{
                    left:leftPay
                }"
                >Возврат средств</a>
                </span>
                
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const isStore = ref(false);
const isComm = ref(false);
const menuScroll = ref('');
const storeHeight = ref('0px');
const chevronComm = ref('0deg');
const leftInfo = ref('0px');
const leftPay = ref('3px');
const dwnTop = ref('0px');
const commLiTop = ref('-2px');
const commPopupTop = ref('-3px');
const chevronStore = ref('0deg');
const positionSpacer = ref('relative');
const borderStore = ref('none');
const footerPadding = ref('0px');
const borderComm = ref('none');
const storeColor = ref('#171A21');
const storeTColor = ref('#bdbdbd');
const commTColor = ref('#bdbdbd');
const commHeight = ref('0px');
const commColor = ref('#171A21');

const openAndCloseStore = () => {
    if (isComm.value) {
        // Закрываем сообщество, если оно открыто
        isComm.value = false;
        commHeight.value = '0px';
        commColor.value = '#171A21';
        commTColor.value = '#bdbdbd';
        borderComm.value = 'none';
        chevronComm.value = '0deg';

    }
    // Переключаем состояние магазина
    isStore.value = !isStore.value;
    footerPadding.value = isStore.value ? '23px' : '0px';
    leftInfo.value = isStore.value ? '3px' : '0px';
    leftPay.value = isStore.value ? '0px' : '3px';
    dwnTop.value = isStore.value ? '0px' : '0px';
    commLiTop.value = isStore.value ? '-1px' : '-2px';
    commPopupTop.value = isStore.value ? '-2px' : '-3px';
    positionSpacer.value = isStore.value ? 'absolute' : 'relative';
    chevronStore.value = isStore.value ? '180deg' : '0deg';
    borderStore.value = isStore.value ? '1px solid #2f3138' : 'none';
    storeHeight.value = isStore.value ? '247px' : '0px';
    storeTColor.value = isStore.value ? '#ffffff' : '#bdbdbd';
    setTimeout(() => {
        menuScroll.value = isStore.value ? 'hidden' : '';
    }, 200);
    storeColor.value = isStore.value ? '#192533' : '#171A21';
}

const openAndCloseComm = () => {
    if (isStore.value) {
        // Закрываем магазин, если он открыт
        isStore.value = false;
        storeHeight.value = '0px';
        storeColor.value = '#171A21';
        storeTColor.value = '#bdbdbd';
        borderStore.value = 'none';
        chevronStore.value = '0deg';

    }
    // Переключаем состояние сообщества
    isComm.value = !isComm.value;
    chevronComm.value = isComm.value ? '180deg' : '0deg';
    footerPadding.value = isComm.value ? '23px' : '0px';
    leftInfo.value = isComm.value ? '3px' : '0px';
    leftPay.value = isComm.value ? '0px' : '3px';
    dwnTop.value = isComm.value ? '-1px' : '0px';
    commLiTop.value = isComm.value ? '-1px' : '-2px';
    commPopupTop.value = isComm.value ? '-2px' : '-3px';
    positionSpacer.value = isComm.value ? 'absolute' : 'relative';
    borderComm.value = isComm.value ? '1px solid #2f3138' : 'none';
    commHeight.value = isComm.value ? '206.25px' : '0px';
    commColor.value = isComm.value ? '#192533' : '#171A21';
    commTColor.value = isComm.value ? '#ffffff' : '#bdbdbd';
    setTimeout(() => {
        menuScroll.value = isComm.value ? 'hidden' : '';
    }, 100);
}
</script>

<style scoped>
.a-popup {
    color:#ffffff;
    top: 0;
    font-weight: 200;
    font-family:"Motiva Sans", Sans-serif;
}
.span-store {
    position: relative;
    top: -1px;
    font-weight: 200;
    font-family:"Motiva Sans", Sans-serif;
}
.span-comm {
    position: relative;
    top: -1px;
    color: #bdbdbd;
    font-weight: 200;
    font-family:"Motiva Sans", Sans-serif;
}
.ul-popup-c {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
}
.dwn-mob {
    position: relative;
}
.li-popup-c {
    display: block;
    color: #ffffff;
    padding-left: 28px;
    padding: 0 12px;
    font-family: "Motiva Sans", Sans-serif;
    font-weight: 200;
    font-size: 16.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 2.5em;
    text-decoration: none;
    cursor: pointer;
}
.comm-popup-mob {
    overflow: hidden;
    background-color: #192533;
    padding-top: 1px;
    position: relative;
    top: -3px;
    border-top: 1px solid #000000;
    transition: all 0.5s ease;
}
.ul-popup-s {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
}
.li-popup-s {
    display: block;
    color: #ffffff;
    padding-left: 28px;
    padding: 0 12px;
    font-family: "Motiva Sans", Sans-serif;
    font-weight: 200;
    font-size: 16.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 2.5em;
    text-decoration: none;
    cursor: pointer;
}
.store-popup-mob {
    overflow: hidden;
    background-color: #192533;
    padding-top: 1px;
    position: relative;
    top: -1px;
    border-top: 1px solid #000000;
    transition: all 0.5s ease;
}
.chevron {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAwCAYAAACG5f33AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFxJREFUeNrkmg9klGEcx5/dMY4Y44hjxIgxRpSy7NwspSmNWZayGGmKFJGylCJSmlJMKctiylKa5aZpSmmMMWIcY4xxjGPEmPX72ffN23Z7732f3/Pe+97tx9dtd/e87/N+7n1+/563Ym1tTbmx8fHxLnq5QzqYSqXmbO+rMrMoaZDUz5dX6MsRl/A66OU5KUFK0/9xVb42QOLr/UTaLwZIsI7hoFG8VUsapferyhDeI1In/o7xdZL2Og2ocFrCBKkFv0Rlvo9JR0grZQKvl3Qrz/tLpCRpxhNAgteEXyDmcNL3pHbSaonDu0B67PB5ln0/adYVQILHt+0X0g4XJ39G6ilheJ0IGoVsAXdixhEgwWugl68kLz7uHulaCcJj/z5s8++FbJ50ADA3AyR4dYCnE2Uvkp6UELwU/HvM47gMlvPifwAJXi3gJQSTOkV6UwLw9sBF6WYSvwFxKbJhjc8LJ/aSdDjk8HYjOErSMAaYy7eE+aDpQrlPAfsDZzsZQni8un4JV9kIqc1K3/IFkWos5XrBSRxzp4CM/foPFAK6NkZqtee+W6UxcUCsE5yMXcI+e8QK0KpwPQ2CY3wnHcIKc5VIJ3BSyS+WQdjPBggvBrfUKDjGJODlvJZyNfTyjVQjPHkzaTkAeFyCvkW+p2vTcEc5z7WwwfQmqLp50NYc0I22SacVVOGmHyhMsC0bQp5YrLr5Kem80P38S5hFAG0lHief1YJJFatu5sbvdcH4TSWbGKCtyZAWJqG3STd9hHeZ9ECYPfCdN+fmy54AAmIjIMYEk+zB3WjaulAN6dqWbStjAAFRtxD3s24+gYgbFcBr9pr8awEExKNoBVVqTngFWf2Yoc7KqGAuOcCb8jpQGyAgSn91E3Wzl+bvVnNgeD91BosAAiLnWQPCpZNEzuXV6gEvLoDH+emE7vVHDCwf9mPdwiI/rZGo78KyjQtcSJsEnimAbK/Uekda1xKA6BbGTk3odngnSZ+lF24KIBu3868Ixte5jOxWz1K3ycGV0Bm1vqOowgSQ7aEwSeaA8MEhmlqdFUmvshtlpQojQKvSuC8Y34JkOJqnszKsZN3yc3A3KswA2a6S+gTjObLbN7qjiPSS/RZ2L/2mL9QvgGyXSC8E47mT0mvrrHQIjnUD7sW4mcgDnT6OYjmeFpyC04wmwfi7AOiL+XkHWhHvLOmd4BgSeH1+wisGQAsiNw5GVHGtH25ElTpAe9Y/VqTzvUbEVeUC0IJ4XK1vD/ppQ3AbqtwA2ot3v55a+IgqY7VcAbLx9ibvsU4bPi7Xte2qyDt/QQBkywGiqUc/JpTteZXtAJAtC4gZ4XG4EdqqNjxysR0AsvGea1LpP1Y3BZ+6HNQFBA2QzXr22OtDSDOAlwty8mEAyMZ7sM3K/UNIs1j+2aAnHhaAFhQ3EC3Yi2GYdJgAulmWC4C3EJYJhw2gU2CwAs5cmCYbRoD5UhNTKc+2AWhPjrOGk26j9leAAQDu6F3rDzHr6wAAAABJRU5ErkJggg==);
    background-size: 100% 100%;
    width: 20px;
    height: 12px;
    position: absolute;
    right: 12px;
    top: calc(50% - 6px);
    transition: all 0.25s ease;
}
.footer-spacer {
    width: 100%;
    height: 111px;
    pointer-events: none;
}
.sumbol-m {
    font-size: 10px;
    white-space: normal;
    color: #8a8a8a;
    padding-left: 6px;
    padding-right: 5.5px;
}
.four {
    position: relative;
}
.link {
    font-size: 10px;
    white-space: normal;
    color: #8a8a8a;
    position: relative;
    top: 0px;
}
.logo-bottom {
    width: 92px;
    object-fit: contain;
}
.footer-content {
    font-size: 10px;
    white-space: normal;
    color: #8a8a8a;
}
.footer-menu {
    min-height: 113px;
    height: auto;
    position: relative;
    left: 0;
    right: 0;
    top: -4px;
    bottom: 0;
    display: flex;
    gap: 3px;
    flex-direction: column;
    font-size: 10px;
    white-space: normal;
    color: #8a8a8a;
    padding: 0 12px 24px 12px;
}

.ul-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100svh;
}

.ul-menu > *:first-child {
    display: flex;
    flex-direction: column;
}

a {
    color: #bdbdbd;
    position: relative;
    top: -1px;
}

.info {
    height: 54px;
    position: relative;
    top: -4px;
}

.help {
    height: 54px;
    position: relative;
    top: -4px;
}



.login {
    height: 54px;
}

.advance-menu {
    color: #8a8a8a;
    border: none;
    position: relative;
    top: -4px;
    font-size: 0.75em;
    font-family: "Motiva Sans", Sans-serif;
    border-top: 1px solid #2f3138;
}

.text {
    display: block;
    padding: 0 12px;
    color: #8a8a8a;
    font-size: 16.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 2.5em;
    font-weight: 200;
    font-family:"Motiva Sans", Sans-serif;
    text-decoration: none;
    cursor: pointer;
}
.login-a {
  font-weight: 200;
  font-family:"Motiva Sans", Sans-serif;
}
.info-a {
  font-weight: 200;
  font-family:"Motiva Sans", Sans-serif;
}
.help-a {
  font-weight: 200;
  font-family:"Motiva Sans", Sans-serif;
}
.menu-item {
    border-top: 1px solid #2f3138;
    border-bottom: 1px solid #000000;
    position: relative;
    color: #bdbdbd;
    background: #171a21;
    display: block;
    padding: 0 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 2.5em;
    text-decoration: none;
    cursor: pointer;
    padding-top: 1px;
    font-family: "Motiva Sans", Sans-serif;
    font-weight: 200;
    font-size: 22px;
}
.menu-item-store {
    border-top: 1px solid #2f3138;
    border-bottom: 1px solid #000000;
    position: relative;
    color: #bdbdbd;
    display: block;
    padding: 0 12px;
    height: 58.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 2.5em;
    text-decoration: none;
    cursor: pointer;
    padding-top: 1px;
    font-family: "Motiva Sans", Sans-serif;
    font-weight: 200;
    font-size: 22px;
}
.menu-item-comm {
    border-top: 1px solid #2f3138;
    border-bottom: 1px solid #000000;
    position: relative;
    color: #bdbdbd;
    display: block;
    padding: 0 12px;
    height: 58.5px;
    overflow: hidden;
    top: -2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 2.5em;
    text-decoration: none;
    cursor: pointer;
    padding-top: 1px;
    font-family: "Motiva Sans", Sans-serif;
    font-weight: 200;
    font-size: 22px;
}
.contain-menu {
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    background: #171A21;
    z-index: 1130;
    width: 280px;
}
::-webkit-scrollbar {
    height: 12px;
    width: 14px;
    background: #000000;
    z-index: 12;
    overflow: visible;
}
::-webkit-scrollbar-corner {
    background: #202020;
}
::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: #4E5157;
    border-radius: 10px;
    z-index: 12;
    border: 4px solid #000000;
    background-clip: padding-box;
    transition: background-color .32s ease-in-out;
    margin: 4px;
    min-height: 32px;
    min-width: 32px;
}
</style>
