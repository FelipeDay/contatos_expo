import React, { useEffect, useState } from "react";
import { Contato, getContatos } from "../services/contatos";
import { View, Text } from "react-native"
import { styles }  from "../Estilos/main"
import { useLocalSearchParams } from "expo-router";


const Detalhes: React.FC<Contato> = (Contato) => {
    const { id } = useLocalSearchParams();
    const [contato, setContato] = useState<Contato | null>(null);

    useEffect () => {
        const meucontato = await getContatoById(id);
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>contato!.nome</Text>
            <Text style={styles.text}>contato!.email</Text>
            <Text style={styles.text}>contato!.telefone</Text>
            <Text style={styles.text}>contato!.endereco</Text>

            </View>
    )
}

