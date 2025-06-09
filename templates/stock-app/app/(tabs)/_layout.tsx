import { Tabs } from 'expo-router';
import React from 'react';
import { useTheme } from '@crossbuildui/core';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.focus,
        tabBarInactiveTintColor: colors.content3.DEFAULT,
        tabBarStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: (({ focused }) => <Icon name="auto-awesome" size={24} color={focused ? colors.focus : colors.content3.DEFAULT} />),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          headerShown: false,
          tabBarIcon: (({ focused }) => <Icon name="explore" size={24} color={focused ? colors.focus : colors.content3.DEFAULT} />),
        }}
      />
      <Tabs.Screen
        name="myassets"
        options={{
          title: 'Assets',
          headerShown: false,
          tabBarIcon: (({ focused }) => <Icon name="auto-awesome-mosaic" size={24} color={focused ? colors.focus : colors.content3.DEFAULT} />),
        }}
      />
    </Tabs>
  );
}
