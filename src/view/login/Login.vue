<template>
    <div class="login_container">
       <div class="content">
        <t-card>
            <h1>MoWei Admin</h1>
            <t-form ref="form" :data="loginForm" class="login_form" :rules="rules" :colon="true" :label-width="0">
                <t-form-item name="username">
                    <t-input v-model="loginForm.username"  clearable placeholder="请输入账户名">
                    <template #prefix-icon>
                        <Icon name="desktop" />
                    </template>
                    </t-input>
                </t-form-item>

                <t-form-item name="password">
                    <t-input v-model="loginForm.password" type="password" clearable placeholder="请输入密码">
                    <template #prefix-icon>
                        <Icon name="lock-on" />
                    </template>
                    </t-input>
                </t-form-item>

                <t-form-item>
                    <t-button theme="primary" type="submit" block>登录</t-button>
                </t-form-item>
                </t-form>
        </t-card>
       </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from '@vue/reactivity';
import { Icon } from 'tdesign-vue-next';


// 表单验证
const rules = {
    username: [
        { required: true, message: '请输入账户名'}
    ],
    password: [
        { required: true, message: '请输入密码'}
    ],
}

type LoginForm = {
    username: string,
    password: string
}

const loginForm = reactive<LoginForm>({
    username: '',
    password: '',
})

</script>

<style lang="less" scoped>
.login_container{
    width: 100vw;
    height: 100vh;
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    .content{
        width: 400px;
        h1{
            text-align: center;
        }
        .login_form{
            padding: 15px 0;
        }
    }
}

</style>