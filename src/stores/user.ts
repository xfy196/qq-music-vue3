import { defineStore } from "pinia";
import type { UserProfile } from "@/models/user";
import {useLogin, useLoginStatus} from "@/utils/api"
import {MD5} from 'crypto-js'
import jscookie from "js-cookie"
export const useUserStore = defineStore("user", {
  state: () => ({
    profile: {} as UserProfile,
    showLogin: false,
    token: "",
    cookie: "",
  }),
  actions: {
    async login(phone: string, password: string) {
       let res =  await useLogin(phone, MD5(password).toString())
       if(res.code === 200){
           this.token = res.token
           this.cookie = res.cookie
           jscookie.set("USER_TOKEN", res.cookie)
           localStorage.setItem("USER_TOKEN", res.token)
           localStorage.setItem("USER_COOKIE", res.cookie)
           this.checkLogin()
       }
    },
    async checkLogin() {
        let {data} = await useLoginStatus()
        if(data.code === 200){
            this.profile = data.profile
            this.showLogin = false
        }
    },
  },
  getters: {
    isLogin: (state) => state.profile?.userId > 0,
  },
});
