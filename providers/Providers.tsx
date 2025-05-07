import React from 'react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { LocalizationProvider } from '@/providers/LocalizationProvider';
import { LayoutProvider } from '@/providers/LayoutProvider';

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <LocalizationProvider>
            <ThemeProvider>
                <LayoutProvider>
                    {children}
                </LayoutProvider>
            </ThemeProvider>
        </LocalizationProvider>
    );
};