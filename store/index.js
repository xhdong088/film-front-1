import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
Vue.use(Vuex)


const store = () => new Vuex.Store({
  state: {
    TOKEN: '', //存储登录token,用来写入到header头的Authorization中
    filmList: []
  },
  getters: {
    TOKEN (state) {
      return state.TOKEN
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.TOKEN = token;
    },
    GET_FILMSLIST: (state, data) => {
      state.filmList = data;
    }
  },
  actions: {
    nuxtServerInit({commit}, {req}) {
      if (req.session && req.session.TOKEN) {
        commit('SET_TOKEN', req.session.TOKEN)
      }
    },
    getFilms ({commit}, params) {
      fetch(process.env.baseUrl + '/meetingfilm/film/getFilms', params)
        .then((res) => {
          if (res.status === 401) {
            throw new Error('Bad credentials')
          } else {
            return res.json()
          }
        })
        .then((res) => {
          if (res && res.data) {
            if (res.data.status == 0) {
              commit('GET_FILMSLIST', res.data.data);
            }else {

            }
          }
        })
    },
    login: ({commit}, {username, password}) => {
      fetch(process.env.baseUrl + '/auth',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password
          })
        }
        ).then((res) => {
          if (res.status === 401) {
            throw new Error('Bad credentials')
          } else {
            return res.json()
          }
        })
        .then((res) => {
          if (res && res.data) {
            let _res = res.data;
            if (_res.status == 0) {
              if (_res.data.token) {
                commit('SET_TOKEN', _res.data.token);
                Cookies.set('token', _res.data.token);
              }
            }
          }
        })
    },
    logout({commit}) {
      return fetch(process.env.baseUrl + '/meetingfilm/user/logout', {
        credentials: 'same-origin',
        method: 'GET'
      })
        .then((res) => {
          if (res.status === 401) {
            throw new Error('Bad credentials')
          } else {
            return res.json()
          }
        }).then((res) => {
          if (res) {
            let _res = res.data;
            if(_res && _res.status == 0) {
              commit('SET_TOKEN', null);
              Cookies.remove('token');
            }else {
              if (_res.data.msg) {
                alert(_res.data.msg)
              }
            }
          }
        })
    }
  }
});
export default store

