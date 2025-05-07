import { ScreenLayout } from '@/providers/ScreenLayout';
import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function PublicLayout() {
    return (
        <ScreenLayout>
            <View style={{ flex: 1 }}>
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen
                        name="signIn"
                    />
                    <Stack.Screen
                        name="signUp"
                    />
                </Stack>
            </View>
        </ScreenLayout>
    );
}
