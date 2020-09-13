import Vue from 'vue'
import GAuth from 'vue-google-oauth2'

const gauthOption = {
    clientId: process.env.Google_ClientID,
    scope: 'https://www.googleapis.com/auth/youtube.readonly',
    prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)
