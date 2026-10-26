
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Starry App</Text>
      <Text style={styles.subtitle}>
        iOS + Android + Web
      </Text>
      <Text style={styles.success}>
        ^^ 跨平台測試成功11！
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#10182B',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 18,
    color: '#A9B8D0',
    marginTop: 12,
  },
  success: {
    fontSize: 22,
    color: '#58E6A0',
    marginTop: 28,
  },
});
