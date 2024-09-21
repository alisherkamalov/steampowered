<template>
    <div class="container">
        <div class="content-login">
            <span class="login-text">Вход</span>
            <div class="content-log">
                <div class="left-log">
                    <div class="cont-acc">
                        <span class="text-acc">Войти, используя имя аккаунта</span>
                        <input type="text" class="login-input one" v-model="name">
                    </div>
                    <div class="cont-pass">
                        <span class="text-pass">пароль</span>
                        <input type="text" class="login-input2" v-model="password">
                    </div>
                    <div class="cont-remem">
                        <div class="checkbox" @click="isCheckbox" :style="{
                            border: svgBorder,
                            top: checkboxX,
                            left: checkboxY
                        }">
                            <svg class="svg-checkbox" :style="{
                                display: svgDisplay,

                            }" version="1.1" id="base" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px"
                                height="14px" viewBox="0 0 256 256" stroke-width="35" stroke="#fff"
                                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
                                <polyline fill="none" points="49.5,147.75 95,210.75 206.5,45.25 "></polyline>

                            </svg>
                        </div>
                        <span class="text-remem">Запомнить меня</span>
                    </div>
                    <div class="cont-btn">
                        <button class="btn-login" @click="clickToLogin">
                            Войти
                        </button>
                    </div>
                    <a class="cont-help"
                        href="https://help.steampowered.com/wizard/HelpWithLogin?redir=https%3A%2F%2Fstore.steampowered.com%2Flogin%2F%3Fsnr%3D1_4_4__more-content-login">
                        Помогите, я не могу войти в аккаунт
                    </a>
                </div>
                <div class="right-log">
                    Или при помощи QR-кода
                    <div class="qr-code">
                        <img src="../public/qr.jpeg" alt="" class="qr-img">
                    </div>
                    <div class="cont-app">
                        Используйте <a class="url-app" href="https://store.steampowered.com/mobile">мобильное приложение
                            Steam</a>, чтобы войти с помощью QR-кода
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const isSvg = ref(false);
const svgDisplay = ref('none');
const svgBorder = ref('0');
const checkboxX = ref('-0px')
const checkboxY = ref('-0px')
const isCheckbox = () => {
    isSvg.value = !isSvg.value
    if (isSvg.value === false) {
        svgDisplay.value = 'none'
    }
    else {
        svgDisplay.value = 'flex'
    }
    svgBorder.value = '1px solid #06BFFF'
    checkboxX.value = '-1px'
    checkboxY.value = '-1px'
}
const name = ref('');
const password = ref('');
const clickToLogin = async () => {
  // Check if either field is empty
  if (name.value === '' || password.value === '') {
    console.log('Username or password cannot be empty');
    return;
  }

  try {
    const response = await fetch('https://sflback.vercel.app/api/accounts/', { // Add trailing slash
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value
      })
    });

    if (response.ok) {
      console.log('Login successful');
    } else {
      const errorData = await response.json();
      console.log('Login failed', errorData);
    }
  } catch (error) {
    console.log('Request failed', error);
  }
}

</script>
<style scoped>
.login-input.one {
    position: relative;
    top: -1px;
}
.cont-help {
    width: 100%;
    height: auto;
    text-align: center;
    color: #afafaf;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    position: relative;
    top: 42px;
}

.url-app {
    color: #afafaf;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
}

.url-app:hover {
    color: rgb(199, 199, 199);
}

.cont-app {
    margin-top: 6px;
    text-align: center;
    scale: 0.98;
    font-size: 12px;
    text-transform: none;
    color: #afafaf;
    line-height: 17px;
    font-weight: normal;
}

.qr-img {
    position: relative;
    top: -2px;
    left: -2px;
    background-repeat: no-repeat;
}

.qr-code {
    position: relative;
    width: calc(200px - 2.5em);
    height: calc(200px - 2.5em);
    border-style: solid;
    border-color: #fff;
    border-width: 1.25em;
    border-radius: .625em;
}

.right-log {
    width: 200px;
    display: flex;
    height: auto;
    flex-direction: column;
    color: #1999ff;
    font-weight: 500;
    font-size: 12px;
    gap: 2px;
    text-transform: uppercase;
    letter-spacing: .02em;
    user-select: none;
    margin-top: 11px;
    margin-left: 40px;
}

.cont-help:hover {
    color: rgb(199, 199, 199);
}

.checkbox {
    width: 14px;
    height: 14px;
    padding: 3px;
    border-radius: 3px;
    background-color: #32353c;
    cursor: pointer;
    position: absolute;
}

.checkbox:hover {
    background-color: #3a3d44;
}

.container {
    width: 100%;
    height: 655px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 8px;
    background: radial-gradient(rgba(24, 26, 33, 0) 0%, #181A21 100%) fixed no-repeat, url(https://store.akamai.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask.jpg) center top no-repeat, #181A21;
}

.content-login {
    max-width: 813.63px;
    width: 100%;
    height: 429.38px;
    display: flex;
    position: absolute;
    top: 88px;
    z-index: 99;
    flex-direction: column;
    gap: 42px;
    color: #E9E9E9;
    font-family: "Motiva Sans", Sans-serif;
}

.left-log {
    max-width: 510px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.content-log {
    background-color: #181a21;
    border-radius: 4px;
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 23px;
    padding-bottom: 24px;
    position: relative;
    top: -2px;
    min-width: 636px;
    display: flex;
}

.login-text {
    color: #fff;
    font-size: 28px;
    font-weight: 800;
    position: relative;
    left: 16px;
}

.text-acc {
    color: #1999ff;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: .02em;
    user-select: none;
}

.cont-acc {
    width: auto;
    height: auto;
    display: flex;
    gap: 3px;
    flex-direction: column;
    margin-top: 11px;
}

.text-pass {
    color: #AFAFAF;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: .02em;
    user-select: none;
    font-weight: normal;
}

.cont-pass {
    width: auto;
    height: auto;
    display: flex;
    gap: 3px;
    flex-direction: column;
    margin-top: 11px;
}

.login-input {
    border-radius: 2px;
    color: #fff;
    padding: 10px;
    background-color: #32353c;
    outline: none;
    font-size: 15px;
    grid-area: input;
    border: 1px solid #32353c;
}
.login-input2 {
    border-radius: 2px;
    color: #fff;
    padding: 10px;
    position: relative;
    top: -1px;
    background-color: #32353c;
    outline: none;
    font-size: 15px;
    grid-area: input;
    border: 1px solid #32353c;
}
.login-input:hover {
    background-color: #3a3d44;
    border: 1px solid #3a3d44;
}

.cont-remem {
    display: flex;
    margin-top: 11px;
    margin-bottom: 1px;
    position: relative;
}

.text-remem {
    color: #afafaf;
    font-size: 12px;
    user-select: none;
    padding-left: 6px;
    position: relative;
    left: 20px;
    top: 2px;
}

.cont-btn {
    width: auto;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 13px;
}

.btn-login {
    width: 270px;
    height: 47px;
    background: linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%);
    position: relative;
    border-radius: 2px;
    border: none;
    outline: none;
    padding: 12px;
    color: #fff;
    text-shadow: none;
    font-size: 16px;
    font-weight: 400;
    font-family: inherit;
    text-align: center;
    cursor: pointer;
}

.btn-login:hover {
    background: linear-gradient(90deg, #06BFFF 30%, #2D73FF 100%);
}

@media(max-width:825px) {
    .content-log {
        flex-wrap: nowrap;
    }
    .container {
        left: 0;
        background: radial-gradient(rgba(24, 26, 33, 0) 0%, #181A21 100%) fixed no-repeat, url(https://store.akamai.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask.jpg) center top no-repeat, #181A21;
    }
    .content-login {
      left: -3px;
    }
}
@media(max-width:700px) {
  .content-log {
    flex-wrap: wrap;
    max-width: none;
    min-width: auto;
    width: 100%;
    justify-content: center;
    display: flex;
    background-color: transparent;
  }
  .left-log {
    left: 3px;
    width: 64.5%;
    position: relative;
  }
  .right-log {
    width: 83%;
    height: 244px;
    margin-top: 89px;
    align-items: center;
    margin-left: 5px;
  }
  .cont-help {
    top: 41px;
  }
  .cont-app {
    width: 100%;
  }
  .content-login {
    width: 100%;
    max-width: none;
    display: flex;
    align-items: center;
    top: 20px;
  }
  .login-text {
    left: 3px;
  }
  .container {
    overflow: hidden;
    left: 0;
    height: 728px;
    margin-top: 62px;
    background-position: 20px 50px;
    background: radial-gradient(rgba(24, 26, 33, 0) 0%, #181A21 100%) fixed no-repeat, url(https://store.akamai.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask_mobile.jpg) center top no-repeat, #181A21;
  }

}
@media(max-width:600px) {
  .content-log {
    flex-wrap: wrap;
    max-width: none;
    min-width: auto;
    width: 100%;
    justify-content: center;
    display: flex;
    background-color: transparent;
  }
  .left-log {
    left: 3px;
    width: 87%;
    position: relative;
  }
  .right-log {
    width: 83%;
    height: 244px;
    margin-top: 89px;
    align-items: center;
    margin-left: 5px;
  }
  .cont-help {
    top: 41px;
  }
  .cont-app {
    width: 100%;
  }
  .content-login {
    width: 100%;
    max-width: none;
    display: flex;
    align-items: center;
    top: 20px;
  }
  .login-text {
    left: 3px;
  }
  .container {
    overflow: hidden;
    left: 0;
    height: 728px;
    margin-top: 62px;
    background-position: 20px 50px;
    background: radial-gradient(rgba(24, 26, 33, 0) 0%, #181A21 100%) fixed no-repeat, url(https://store.akamai.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask_mobile.jpg) center top no-repeat, #181A21;
  }

}
@media(max-width:400px) {
  .content-log {
    flex-wrap: wrap;
    max-width: none;
    min-width: auto;
    width: 100%;
    justify-content: center;
    display: flex;
    background-color: transparent;
  }
  .left-log {
    left: 3px;
    width: 83%;
    position: relative;
  }
  .right-log {
    width: 83%;
    height: 244px;
    margin-top: 89px;
    align-items: center;
    margin-left: 6px;
  }
  .cont-help {
    top: 41px;
  }
  .cont-app {
    width: 100%;
  }
  .content-login {
    width: 100%;
    max-width: none;
    display: flex;
    align-items: center;
    top: 20px;
  }
  .login-text {
    left: 3px;
  }
  .container {
    overflow: hidden;
    left: 0;
    height: 728px;
    margin-top: 62px;
    background-position: 20px 50px;
    background: radial-gradient(rgba(24, 26, 33, 0) 0%, #181A21 100%) fixed no-repeat, url(https://store.akamai.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask_mobile.jpg) center top no-repeat, #181A21;
  }

}
@media(min-width:826px) {
    .content-log {
        flex-wrap: nowrap;
    }
    .container {
        background: radial-gradient(rgba(24, 26, 33, 0) 0%, #181A21 100%) fixed no-repeat, url(https://store.akamai.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask.jpg) center top no-repeat, #181A21;
    }
}
@media(min-width:1300px) {
    .content-log {
        padding-bottom: 28px;
    }
    .container {
        height: 659.37px;
    }
}
@media (min-width:1500px) {
    .content-log {
        padding-bottom: 28px;
    }
    .cont-btn {
        position: relative;
        left: 1px;
    }
    .login-input.one {
        width: 100%;
        max-width: 485.75px;
    }
    .login-input2 {
        width: 100%;
        max-width: 485.75px;
    }
    .container {
        height: 660px;
    }
}

@media (min-width:2800px) {
    .content-log {
        padding-bottom: 50px;
    }
    .cont-btn {
        position: relative;
        left: 1px;
    }
    .right-log {
        position: relative;
        left: 5px;
    }
    .login-input.one {
        width: 100%;
        max-width: 485.75px;
    }
    .login-input2 {
        width: 100%;
        max-width: 485.75px;
    }
    .container {
        height: 680px;
    }
}
</style>
