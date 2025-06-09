import { mainstyle } from '@/assets/styles/style';
import { Text, View } from '@crossbuildui/core';
import { StatusBar, Linking } from 'react-native';

export default function MyAssetsScreen() {
  return (
    <View style={[mainstyle.container, { paddingTop: StatusBar.currentHeight || 20 }]}>
      <Text style={[mainstyle.title, { marginTop: 10 }]}>Explore Crossbuild UI</Text>
      <Text style={mainstyle.paragraph}>
        This screen is your canvas to experiment with and showcase various
        components from the Crossbuild UI library.
      </Text>
      <Text style={mainstyle.paragraph}>
        Try implementing different layouts, forms, lists, or any other UI elements
        you plan to use in your application.
      </Text>
      <Text style={mainstyle.paragraph}>
        For a comprehensive list of available components and their props, visit the{' '}
        <Text style={mainstyle.link} onPress={() => Linking.openURL('https://www.crossbuildui.com/docs/getting-started/introduction')}>
          CrossBuildUI Documentation
        </Text>.
      </Text>
    </View>
  );
}
