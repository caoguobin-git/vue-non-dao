import {
  SET_TOKEN,
  SET_USER,
  SET_DICTLIST,
  SET_ALLDICTLIST,
  SET_AREALIST,
} from '../mutations-types';

import {
  setToKen,
  getToKen,
  setUser,
  getUser,
  removeToKen,
  removeUser
} from "utils/app.js";
import cookie from 'cookie_js';
import {
  Promise
} from 'core-js';

const state = {
  user: getUser() || {},
  toKen: getToKen() || "",
  dictList: [],
  allDictList: [],
  areaList: [],
}
const actions = {

  /**
   * 触发mutations 设置token
   */
  setToKenActions(context, payload) {
    context.commit(SET_TOKEN, payload);
  },

  /**
   * 触发mutations 设置username
   */
  setUserActions(context, payload) {
    context.commit(SET_USER, payload);
  },

  /**
   * 触发mutations 设置数据字典
   */
  setDictList(context, payload) {
    context.commit(SET_DICTLIST, payload);
  },
  /**
   * 触发mutations 设置全部数据字典
   */
  setAllDictList(context, payload) {
    context.commit(SET_ALLDICTLIST, payload);
  },
  /**
   * 触发mutations 设置所有区域信息
   */
  setAreaList(context, payload) {
    context.commit(SET_AREALIST, payload);
  },

  /**
   * 退出
   */
  exitActions(context, payload) {
    return new Promise((resolve, reject) => {
      //删除token和username set为设置 remove为删除
      set_info(context, '', 'remove');
      resolve();
    })
  }

}

const getters = {
  //监听username
  user: state => state.user
}

const mutations = {

  /**
   * 设置toKen
   */
  [SET_TOKEN](state, payload) {
    state.toKen = payload;
  },

  /**
   * 设置username
   */
  [SET_USER](state, payload) {
    state.user = payload;
  },

  /**
   * 设置数据字典
   */
  [SET_DICTLIST](state, payload) {
    state.dictList = payload;
  },
  /**
   * 设置全部数据字典
   */
  [SET_ALLDICTLIST](state, payload) {
    state.allDictList = payload;
  },

  /**
   * 设置所有区域信息
   */
  [SET_AREALIST](state, payload) {
    state.areaList = payload;
  },
}

/**
 * 判断set还是remove分别调用不同函数
 */
const set_info = (context, payload, type) => {
  //分别在vuex和cookie里设置token和username
  context.commit(SET_TOKEN, payload.token);
  context.commit(SET_USER, payload.user);
  if (type === 'set') {
    setToKen(payload.token);
    setUser(payload.user);
  } else {
    removeToKen(payload.token);
    removeUser(payload.user);
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}