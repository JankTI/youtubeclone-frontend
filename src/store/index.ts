import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { User } from '@/api/user'

// 声明 State 类型
export interface State {
  count: number
  user: User | null
}

export const key: InjectionKey<Store<State>> = Symbol('wwe')

export const store = createStore<State>({
  state: {
    count: 0,
    user: JSON.parse(window.localStorage.getItem('user') || 'null')
  },
  mutations: {
    setUser (state, user: User) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  }
})

export const useStore = () => {
  return baseUseStore(key)
}
