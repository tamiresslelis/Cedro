import { Opcao } from './pergunta/opcao/opcao.model'
export interface Pergunta {
    id: number
    titulo: string
    opcoes: Opcao[]
}
