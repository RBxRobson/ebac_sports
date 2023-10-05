//* importando a tipagem Produto *\\
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

//* Tipando o State *\\
type CarrinhoState = {
  itens: Produto[]
}

//* Criando um objeto para o estado inicial *\\
const initialState: CarrinhoState = {
  itens: []
}

//* Criando um Slice com o CreateSlice *\\
const carrinhoSlice = createSlice({
  //* Nomeando Slice *\\
  name: 'carrinho',
  //* Valor inicial do state *\\
  initialState,
  //* Criando Reducers *\\
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((i) => i.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

//* exportando a action adicionar *\\
export const { adicionar } = carrinhoSlice.actions
//* exportando o reducer *\\
export default carrinhoSlice.reducer
