import { Pressable, Text, useTheme, View } from '@crossbuildui/core';
import { Link } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, } from 'react-native';

export default function MainScreen() {

    const { colors } = useTheme();

    return (
        <ScrollView style={[styles.container]}>
            <View style={styles.contentContainer}>
                <Text style={[styles.title]}>Welcome to Crossbuild UI!</Text>

                <Link href="/YourComponent/+index" asChild>
                    <Pressable style={[styles.button, { backgroundColor: colors.primary[500] }]}>
                        <Text style={[styles.buttonText, { color: colors.foreground }]}>
                            Your Component
                        </Text>
                    </Pressable>
                </Link>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 10,
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
        marginTop: 45,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 30,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 200,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
    },
})