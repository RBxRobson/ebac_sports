import { configureStore } from '@reduxjs/toolkit'

//* Importando o reducer carrinho *\\
import carrinhoReducer from './reducers/carrinho'

//* Importando o reducer favoritos *\\
import favoritosReducer from './reducers/favoritos'

//* Importando api *\\
import api from '../services/api'

export const store = configureStore({
  reducer: {
    //* Adicionando o carrinho ao RootReducer *\\
    carrinho: carrinhoReducer,
    //* Adicionando o favoritos ao RootReducer *\\
    favoritos: favoritosReducer,
    //* Adicionando a api ao RootReducer *\\
    [api.reducerPath]: api.reducer
  },
  //* Configurando um middleware *\\
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

//* Exportando com tipagem automática para não conflitar ts *\\
export type RootReducer = ReturnType<typeof store.getState>
