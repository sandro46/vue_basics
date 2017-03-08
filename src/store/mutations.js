export default {
    register(state, id){
      const date = new Date;
      const user = state.users.find(user => { return user.id==id; });
      user.registered = true;
      const registration = {
        userId: id,
        name: user.name,
        date: date.getMonth() + '/' + date.getDay()
      }
      state.registrations.push(registration);
    },
    unregister(state, payload){
      const user = state.users.find(user => { return user.id==payload.id; });
      user.registered = false;
      const registration = state.registrations.find(reg => { return reg.userId==payload.id; });
      state.registrations.splice(state.registrations.indexOf(registration), 1);
    }
  }
