import { createContext, useContext } from 'react';

import login from './modules/login'
import header from './modules/header'

class RootStore {
  login = login
  header = header
}

const Context = createContext(new RootStore())

export default function useStore() {
  return useContext(Context);
} 
