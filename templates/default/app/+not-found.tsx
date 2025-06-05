import { Link, Stack } from 'expo-router';
import { mainstyle } from '@/assets/styles/style';
import { Text, View } from '@crossbuildui/core';
import { StatusBar } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Page Not Found' }} />
      <View style={[mainstyle.container, { paddingTop: StatusBar.currentHeight || 20, alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={mainstyle.title}>This screen doesn't exist.</Text>
        <Text style={mainstyle.paragraph}>
          Sorry, the page you are looking for could not be found.
        </Text>
        <Link href="/" style={mainstyle.link}>
          <Text style={mainstyle.link}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
