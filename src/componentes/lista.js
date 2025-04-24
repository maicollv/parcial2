import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

export default function Lista() {
    const [data, setData] = useState([]);
    const [busqueda, setBusqueda] = useState('');


    useEffect(() => {
    const obtenerDatos = async () => {
    const res = awaitfetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
    const json = await res.json();
    setData(json.results);
    };
 obtenerDatos();
}, []);

let resultados = data;
    if (busqueda.length >= 3 && isNaN(busqueda)) {
        resultados = data.filter(pokemon =>
            pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
         );
    } else if (!isNaN(busqueda) && busqueda !== '') {
        resultados = data.filter(pokemon =>
            pokemon.url.includes('/' + busqueda)
    );
}


return (
    <ScrollView>
        <View style={styles.lista}>
            {data.map((pokemon, index) => (
                <View key={index} style={styles.item}>
                <Text>{pokemon.url.split("/")[6]}</Text>
                <Image
                source={{ uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[6]}.png` }}
                style={styles.imagen}
            />
            <Text>{pokemon.name}</Text>
            </View>
         ))}
        </View>
    </ScrollView>
);
}

const styles = StyleSheet.create({
    lista: {
     flexDirection: 'row',
     flexWrap: 'wrap',
     gap: 10,
     justifyContent: 'space-between', // para distribuir en 2 columnas
     padding: 10,
    },
    item: {
     backgroundColor: 'aliceblue',
     width: '48%', // equivalente a calc(50% - 5px)
     padding: 10,
     alignItems: 'center',
     marginBottom: 10,
    },
    imagen: {
     width: 100,
     height: 100,
     resizeMode: 'contain',
    }
});