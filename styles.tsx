import { StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
    screen: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        paddingStart: 16,
        flex: 1,
    },
    topspace: {
        marginTop: 24,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: '#000',
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#F1EFF5',
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center'
    },
    inputWithBackground: {
        paddingStart: 16,
        flex: 1,
    },
});

export default AppStyles;