import {
  SET_DW
} from '../types';

// initial state
const
  state = {
    deviceW: 0 //设备视窗大小
  },
  getters = {
    isMobile: (state) => {
      console.log('getters in test');
      if (state.deviceW <= 768) {
        return true;
      }
      return false;
    }
  },
  actions = {
    print({
      commit
    }) {

    }
  },
  mutations = {
    [SET_DW](state,
      deviceW
    ) {
      console.log('in test');
      state.deviceW = deviceW;
    }
  };

export default {
  state,
  getters,
  actions,
  mutations
}
