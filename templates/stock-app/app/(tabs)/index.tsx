import { mainstyle } from "@/assets/styles/style";
import { ScrollView, Text, View } from "@crossbuildui/core";
import { View as ReactView } from "react-native";
import { StatusBar, StyleSheet } from "react-native";
import { Card } from "@/crossbuildui/card";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Accordion, AccordionItem } from '@/crossbuildui/accordion';

const CustomArrowIndicator = ({ isOpen }: { isOpen: boolean }) => (
  <Icon name={isOpen ? "chevron-up" : "chevron-down"} size={16} color={'#FFFFFF'} />
);

const accordionData = [
  {
    id: '1',
    title: 'Most Valuable Stocks 2020',
    content: 'An analysis of the top-performing stocks from 2020, including tech giants and emerging players. Key factors included market cap growth, revenue, and innovation. This section provides insights into what made these stocks successful and lessons for future investments.',
  },
  {
    id: '2',
    title: 'How to pick best stock',
    content: 'A beginner\'s guide to stock selection: understanding P/E ratios, company fundamentals, market trends, and diversification strategies. Always do your own research before investing. Consider your risk tolerance and investment horizon.',
  },
  {
    id: '3',
    title: 'Future of Renewable Energy Stocks',
    content: 'Exploring the potential growth in the renewable energy sector. Discussion on solar, wind, and hydrogen stocks and the impact of global green initiatives. This area is poised for significant changes and opportunities.',
  },
  {
    id: '4',
    title: 'Understanding Market Volatility',
    content: 'Market volatility is a measure of the tendency of a market or security to rise or fall sharply within a short period. Learn how to navigate volatile markets, manage risk, and identify potential opportunities during uncertain times.',
  },
  {
    id: '5',
    title: 'The Role of ETFs in Diversification',
    content: 'Exchange-Traded Funds (ETFs) offer a convenient way to diversify your portfolio across various asset classes, sectors, or geographical regions. Discover the benefits, types, and considerations when investing in ETFs.',
  },
  {
    id: '6',
    title: 'Future of Renewable Energy Stocks',
    content: 'Exploring the potential growth in the renewable energy sector. Discussion on solar, wind, and hydrogen stocks and the impact of global green initiatives. This area is poised for significant changes and opportunities.',
  },
  {
    id: '7',
    title: 'Understanding Market Volatility',
    content: 'Market volatility is a measure of the tendency of a market or security to rise or fall sharply within a short period. Learn how to navigate volatile markets, manage risk, and identify potential opportunities during uncertain times.',
  },
  {
    id: '8',
    title: 'The Role of ETFs in Diversification',
    content: 'Exchange-Traded Funds (ETFs) offer a convenient way to diversify your portfolio across various asset classes, sectors, or geographical regions. Discover the benefits, types, and considerations when investing in ETFs.',
  }
];


export default function HomeScreen() {
  return (
    <View style={[mainstyle.container, { paddingTop: StatusBar.currentHeight || 20 }]}>
      <Text style={[mainstyle.title, { marginTop: 10, marginBottom: 20 }]}>Home</Text>

      <Card
        fullWidth
        shadow="lg"
        radius="lg"
      >
        <LinearGradient
          colors={['#FF6BA1', '#FE5762']}
          style={styles.gradientBackground}
          start={{ x: 0, y: 0 }} // Top-left
          end={{ x: 1, y: 1 }}  // Bottom-right (diagonal)
        >
          <ReactView style={styles.cardContentContainer}>
            <Text style={styles.smallLabelText}>Your total asset portfolio</Text>
            <ReactView style={{ flexDirection: 'row', gap: 5, justifyContent: 'flex-start', alignItems: 'center' }}>
              <Text style={styles.largeAmountText}>$ 2,240.559</Text>
              <ReactView style={styles.statsRow}>
                <Icon name="arrow-up" size={16} color="white" />
                <Text style={styles.smallStatsText}>13%</Text>
              </ReactView>
            </ReactView>
          </ReactView>
        </LinearGradient>
      </Card>

      <ReactView style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>What's to Buy ?</Text>
      </ReactView>

      <ReactView style={styles.horizontalScrollView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 20, }}>
          <Card
            shadow="sm"
            radius="lg"
            style={{ minWidth: 128, }}
          >
            <LinearGradient
              colors={['#676767', '#000000',]}
              style={styles.gradientBackground}
              start={{ x: 0, y: 1 }} // Top-left
              end={{ x: 1, y: 0 }}  // Bottom-right (diagonal)
            >
              <Icon name="apple" size={24} color="white" />
              <Text style={styles.brandName}>AAPL</Text>
              <Text style={styles.brandPrice}>$ 398.12</Text>
            </LinearGradient>
          </Card>

          <Card
            shadow="sm"
            radius="lg"
            style={{ minWidth: 128, }}
          >
            <LinearGradient
              colors={['#DC4F00', '#E80B0B',]}
              style={styles.gradientBackground}
              start={{ x: 0, y: 1 }} // Top-left
              end={{ x: 1, y: 0 }}  // Bottom-right (diagonal)
            >
              <Icon name="gamepad" size={24} color="white" />
              <Text style={styles.brandName}>GAME</Text>
              <Text style={styles.brandPrice}>$ 244.12</Text>
            </LinearGradient>
          </Card>

          <Card
            shadow="sm"
            radius="lg"
            style={{ minWidth: 128, }}
          >
            <LinearGradient
              colors={['#5CE2FF', '#0038FF',]}
              style={styles.gradientBackground}
              start={{ x: 0, y: 1 }} // Top-left
              end={{ x: 1, y: 0 }}  // Bottom-right (diagonal)
            >
              <Icon name="facebook-official" size={24} color="white" />
              <Text style={styles.brandName}>META</Text>
              <Text style={styles.brandPrice}>$ 123.12</Text>
            </LinearGradient>
          </Card>
        </ScrollView>
      </ReactView>

      <ReactView style={styles.opinionSection}>
        <Text style={styles.opinionTitle}>Today's Opinion</Text>
        <ScrollView style={styles.accordionScrollView} showsVerticalScrollIndicator={false}>
          <Accordion defaultTitleColor="#FFFFFF" defaultDividerColor="#888888">
            {accordionData.map((item) => (
              <AccordionItem key={item.id} itemKey={item.id} title={item.title} style={{ backgroundColor: '#232C41' }} indicator={CustomArrowIndicator}>
                <Text style={styles.accordionContentText}>{item.content}</Text>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollView>
      </ReactView>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    padding: 20,
  },
  cardContentContainer: {
    gap: 2,
  },
  smallLabelText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.85)',
    fontFamily: 'SFProRegular'
  },
  largeAmountText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 6,
    fontFamily: 'SFProRegular',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallStatsText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
    fontFamily: 'SFProRegular',
  },
  sectionHeader: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  horizontalScrollView: {
    flexDirection: 'row',
    gap: 20,
    maxHeight: 160,
    marginTop: 20,
  },
  brandName: {
    marginTop: 40,
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'SFProBold',
  },
  brandPrice: {
    marginTop: 5,
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'SFProMedium',
  },
  opinionSection: {
    marginTop: 40,
    backgroundColor: '#232C41',
    paddingHorizontal: 15,
    paddingTop: 15,
    marginHorizontal: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    marginBottom: -20,
  },
  opinionTitle: {
    color: '#FF6BA1',
    fontSize: 18,
    fontFamily: 'SFProBold',
    padding: 15,
  },
  accordionScrollView: {

  },
  accordionContentText: {
    fontFamily: 'SFProRegular',
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF'
  },
});
