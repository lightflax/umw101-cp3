import { StyleSheet, View, Pressable, Text } from "react-native";

function ButtonGetCars({navigation}){
    return(
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button}  onPress={() => navigation.navigate('../screens/GetCars')}>
                <Text style={styles.buttonLabel}>Get Cars</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 250,
        height: 70,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 8,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'blue'
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#000',
        fontSize: 16,
    },
});





export default ButtonGetCars;