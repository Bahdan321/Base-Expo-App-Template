import { ScreenLayout } from '@/providers/ScreenLayout';
import { Stack } from 'expo-router';
import React from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import { View } from 'react-native';

export default function PrivateLayout() {
    const { theme } = useTheme();

    return (
        <ScreenLayout>
            <View style={{ flex: 1 }}>
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen
                        name="home"
                    />
                    <Stack.Screen
                        name="onboardingScreen"
                    />
                </Stack>
            </View>
        </ScreenLayout>
    );
}
