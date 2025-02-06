import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const api = process.env.VUE_APP_API_URL
const token = process.env.VUE_APP_TOKEN

const apiClient = axios.create({
  baseURL: api,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'apikey': token
  }
})
apiClient.interceptors.response.use(config =>{
  // const token = Cookies.get('token')
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  } return config
}
)

export default new Vuex.Store({
  state: {
    me:{
        'fullname':'Daniel Nahun Calcina Fuentes',
        'shortname': 'Daniel Calcina',
        'birthdate': '10/12/1999',
        'phone': '+51 922996705',
        'email': 'danielnahuncalcinafuentes@gmail.com',
        'address':'Peru, Moquegua, Ilo'
      },
    studies:[
      {
        'title':'Bachelour in System and Computing Engginering',
        'date':'2017-2021',
        'certificate': 'archivo.pdf'
      },
      {
        'title':'English Intermediate Level',
        'date':'2018-2019',
        'certificate': 'archivo.pdf'
      },
    ],
    projects:[]
  },
  getters: {
  },
  mutations: {
    setMe(state, me){
      state.me = me
    },
    setStudies(state, studies){
      state.studies = studies
    }
    ,
    setProjects(state, projects){
      state.projects = projects
    }
  },
  actions: {
    getMe({commit}){
      apiClient.get('/me?id=eq.1&select=*').then(response =>{
        commit('setMe', response.data[0])
      })
    },
    getStudies({commit}){
      apiClient.get('/studies').then(response =>{
        commit('setStudies', response.data)
      })
    },
    getProjects({commit}){
      apiClient.get('/projects?select=*').then(response =>{
        commit('setProjects', response.data)
      })
    }
  },
  modules: {
  }
})
