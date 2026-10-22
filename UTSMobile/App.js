 import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView,
} from 'react-native';

const MAROON = '#800020';
const DARK = '#4A0012';
const LIGHT = '#F8F1F3';

export default function App() {
  const [page, setPage] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Perhatian', 'Email dan password wajib di isi!');
      return;
    }
    setPage('home');
  };

  const logout = () => {
    setPage('login');
    setPassword('');
  };

  const menus = [
    { icon: '👤', title: 'PROFIL' },
    { icon: '📚', title: 'BELAJAR' },
    { icon: '📝', title: 'TUGAS' },
    { icon: '⚙️', title: 'PENGATURAN' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={DARK} barStyle="light-content" />

      {page === 'login' ? (
        <View style={styles.login}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>MA</Text>
          </View>

          <Text style={styles.title}>MY APP</Text>
          <Text style={styles.subtitle}>UTS MOBILE 1</Text>
          <Text style={styles.description}>
            Selamat datang! Silakan login
          </Text>

          <Text style={styles.label}>EMAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="Input email"
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            placeholder="Input password"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>UTS MOBILE 1 • 2026</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.home}>
          <Text style={styles.homeTitle}>HOME PAGE</Text>

          <View style={styles.profile}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>A</Text>
            </View>
            <Text style={styles.name}>ALVINA CHALISTA</Text>
            <Text style={styles.email}>{email}</Text>
          </View>

          <View style={styles.menuGrid}>
            {menus.map((menu) => (
              <TouchableOpacity
                key={menu.title}
                style={styles.menu}
                onPress={() =>
                  Alert.alert(menu.title, `Kamu memilih ${menu.title}`)
                }
              >
                <Text style={styles.menuIcon}>{menu.icon}</Text>
                <Text style={styles.menuText}>{menu.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.button} onPress={logout}>
            <Text style={styles.buttonText}>LOGOUT</Text>
          </TouchableOpacity>

          <Text style={styles.footerHome}>MY APP © 2026</Text>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  login: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    alignSelf: 'center',
    width: 72,
    height: 72,
    borderRadius: 22,
    backgroundColor: MAROON,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: DARK,
    letterSpacing: 2,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 17,
    color: MAROON,
    fontWeight: 'bold',
    marginTop: 5,
  },
  description: {
    textAlign: 'center',
    color: '#888888',
    fontSize: 13,
    marginTop: 12,
    marginBottom: 24,
  },
  label: {
    color: DARK,
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 7,
    marginTop: 13,
  },
  input: {
    height: 49,
    borderWidth: 1,
    borderColor: '#DCC1CA',
    backgroundColor: LIGHT,
    borderRadius: 12,
    paddingHorizontal: 14,
    color: '#333333',
  },
  button: {
    height: 48,
    backgroundColor: MAROON,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  footer: {
    textAlign: 'center',
    color: '#999999',
    fontSize: 11,
    position: 'absolute',
    bottom: 22,
    alignSelf: 'center',
  },
  home: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 26,
    paddingTop: 45,
    backgroundColor: '#FFFFFF',
  },
  homeTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: DARK,
    marginBottom: 24,
  },
  profile: {
    width: '100%',
    backgroundColor: LIGHT,
    borderWidth: 1,
    borderColor: '#E5CDD5',
    borderRadius: 18,
    alignItems: 'center',
    paddingVertical: 25,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: MAROON,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  name: {
    color: DARK,
    fontWeight: 'bold',
    fontSize: 15,
  },
  email: {
    color: '#777777',
    fontSize: 12,
    marginTop: 6,
  },
  menuGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  menu: {
    width: '48%',
    height: 112,
    borderWidth: 1,
    borderColor: '#E5CDD5',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  menuIcon: {
    fontSize: 27,
    marginBottom: 9,
  },
  menuText: {
    color: DARK,
    fontSize: 12,
    fontWeight: 'bold',
  },
  footerHome: {
    color: '#999999',
    fontSize: 11,
    marginTop: 25,
  },
});