import { mainstyle } from "@/assets/styles/style";
import { Text, View } from "@crossbuildui/core";
import { Platform, StatusBar, Linking } from "react-native";

export default function HomeScreen() {
  return (
    <View style={[mainstyle.container, { paddingTop: StatusBar.currentHeight || 20 }]}>
      <Text style={[mainstyle.title, { marginTop: 10 }]}>Welcome to Crossbuild UI!</Text>
      <Text style={mainstyle.paragraph}>
        This is a starter template designed by the Crossbuild UI team to help you build
        amazing cross-platform applications using our component library.
      </Text>
      <Text style={mainstyle.paragraph}>
        Explore the components and features. For detailed usage and best practices,
        please refer to our official documentation:
        <Text> </Text> {/* Ensures space before link */}
        <Text style={mainstyle.link} onPress={() => Linking.openURL('https://www.crossbuildui.com/docs/getting-started/introduction')}>
          crossbuildui.com/docs
        </Text>
      </Text>
      <Text style={mainstyle.paragraph}>
        To get started, you can modify this screen in{' '}
        <Text style={{ fontWeight: 'bold' }}>app/(tabs)/index.tsx</Text>.
      </Text>
      <Text style={mainstyle.paragraph}>
        Press{' '}
        <Text style={{ fontWeight: 'bold' }}>
          M
        </Text>{' '}
        in terminal to open developer tools.
      </Text>
      <Text style={mainstyle.paragraph}>
        Try changing your device's Light/Dark mode! The app theme will automatically adapt
        thanks to Crossbuild UI's built-in theme support.
      </Text>
      <Text style={mainstyle.paragraph}>Happy building with Crossbuild UI!</Text>
    </View>
  );
}
