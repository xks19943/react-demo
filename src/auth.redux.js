const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';


//管理用户登录的reducer
export function auth(state={isLogin: false, user: '李云龙'},action) {
  switch (action.type){
    case LOGIN:
      return {
        ...state,
        isLogin: true
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false
      };
    default:
      return state
  }
}


export function login(){
  return {type:LOGIN};
}

export function logout(){
  return {type:LOGOUT};
}