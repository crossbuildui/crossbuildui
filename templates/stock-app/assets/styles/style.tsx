import { StyleSheet } from "react-native";

export const mainstyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 16,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 12,
    },
    link: {
        color: '#007AFF', // A standard link color
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 24,
        height: 1,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#DDDDDD',
    },
});