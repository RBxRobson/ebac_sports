import { useSelector } from 'react-redux'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import { RootReducer } from '../store'
import { Produto as ProdutoType } from '../App'
import * as S from './styles'

const ProdutosComponent = () => {
  const itensFavoritos = useSelector(
    (state: RootReducer) => state.favoritos.itens
  )

  const { data: produtos, isLoading } = useGetProdutosQuery()
  if (isLoading) return <h2>Os produtos estão sendo carregados...</h2>

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = itensFavoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
