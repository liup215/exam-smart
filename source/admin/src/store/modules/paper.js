const state = {
  questionInBucket: []
}

const mutations = {
  ADD_QUESTION: (state, question) => {
    var isInBucket = false
    for (var i = 0; i < state.questionInBucket.length; i++ ) {
      if (state.questionInBucket[i].ID === question.ID) {
        isInBucket = true
        break
      }
    }

    if (!isInBucket) {
      state.questionInBucket.push(question)
    }
  },
  DEL_QUESTION: (state, qId) => {
    for (var i = 0; i < state.questionInBucket.length; i++ ) {
      if (state.questionInBucket[i].ID === qId) {
        state.questionInBucket.splice(i, 1)
        break
      }
    }
  }
}

const actions = {
  add_question({ commit }) {
    commit('ADD_QUESTION')
  },
  del_question({ commit }) {
    commit('DEL_QUESTION')
  }
}

const getters = {
  questionInBucket: () => {
    return state.questionInBucket
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
