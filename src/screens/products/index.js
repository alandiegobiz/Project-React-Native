import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

import Fundo from '../../../assets/fundo2.png';
import Geladeira1 from '../../../assets/products/Geladeira1.jpg';
import Geladeira2 from '../../../assets/products/Geladeira2.jpg';
import Fogao1 from '../../../assets/products/Fogao1.jpg';
import Fogao2 from '../../../assets/products/Fogao2.jpg';
import Microondas1 from '../../../assets/products/Microondas1.jpg';
import Microondas2 from '../../../assets/products/Microondas2.jpg';


const Produtos = [
    {
        nome: "Geladeira Frost Free Brastemp 540L",
        imagem: <Image source={Geladeira1} />,
        preco: "6389.00",
        preco_venda: "5019,00"
    },
    {
        nome: "Geladeira Consul Prata 340 litros",
        imagem: <Image source={Geladeira1} />,
        preco: "2199.90",
        preco_venda: "2069.00"
    },
    {
        nome: "Fogão Consul 4 bocas",
        imagem: <Image source={Fogao1} />,
        preco: "939.00",
        preco_venda: "849.90"
    },
    {
        nome: "Fogão Esmaltec 6 bocas",
        imagem: <Image source={Fogao2} />,
        preco: "1250.00",
        preco_venda: "1099.00"
    },
    {
        nome: "Microondas Electrolux",
        imagem: <Image source={Microondas1} />,
        preco: "650.00",
        preco_venda: "559.00"
    },
    {
        nome: "Microondas LG",
        imagem: <Image source={Microondas2} />,
        preco: "800.00",
        preco_venda: "699.90"
    },
]

function Products() {
    return (
        <View>
            <ScrollView>
            <ImageBackground source={Fundo} style={styles.fundo}>
                <Text style={styles.texto}>Confira nossos produtos!</Text>
                {
                    Produtos.map((produto, key) => {
                        return (
                            <View style={styles.produtos}>
                                <Text style={styles.imagem}>{produto.imagem}</Text>
                                <Text style={styles.descricao}>{produto.nome}</Text>
                                <Text style={styles.preco}>R$ {produto.preco}</Text>
                                <Text style={styles.preco_venda}>R$ {produto.preco_venda}</Text>
                            </View>
                        )
                    }
                    )
                }
            </ImageBackground>
            </ScrollView>
        </View>
    )
}

export default Products;