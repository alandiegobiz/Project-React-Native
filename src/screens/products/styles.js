import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent:"center",
        alignItems:"center"
    },
    texto: {
        marginTop: 20,
        fontSize: 24
    },
    produtos: {
        justifyContent:"center",
        alignItems:"center",
    },
    imagem: {
        height: 300
    },
    descricao: {
        fontSize: 20
    },
    preco: {
        color: "red",
        textDecorationLine:"line-through"
    },
    preco_venda: {
        fontSize: 18
    }
})

export default styles;