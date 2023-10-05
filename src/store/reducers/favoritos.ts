//* importando a tipagem Produto *\\
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

//* Tipando o State *\\
type FavoritosState = {
  itens: Produto[]
}

//* Criando um objeto para o estado inicial *\\
const initialState: FavoritosState = {
  itens: []
}

//* Criando um Slice com o CreateSlice *\\
const favoritosSlice = createSlice({
  //* Nomeando Slice *\\
  name: 'favoritos',
  //* Valor inicial do state *\\
  initialState,
  //* Criando Reducers *\\
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id === produto.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== produto.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(produto)
      }
    }
  }
})

//* exportando a action favoritar *\\
export const { favoritar } = favoritosSlice.actions
//* exportando o reducer *\\
export default favoritosSlice.reducer
