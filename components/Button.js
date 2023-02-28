import { StyleSheet, View, Pressable, Text } from "react-native";

function Button({ label }){
    return(
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('Du tryckte på knappen')}>
                <Text style={styles.buttonLabel}>{label}</Text>
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
        backgroundColor: '#fff'
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#000',
        fontSize: 16,
    },
});





export default Button;