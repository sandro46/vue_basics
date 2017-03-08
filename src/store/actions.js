export default {
    register({commit}, id){
      setTimeout(()=>{
        commit('register',id);
      }, 1000);
    }
  }
