import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useApp} from '../context/AppContext';
import {Colors} from '../utils/colors';

const ChatsScreen = () => {
  const {matches} = useApp();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chats</Text>
        <Icon name="chatbubble" size={28} color={Colors.primary} style={styles.titleIcon} />
      </View>

      <ScrollView style={styles.scrollView}>
        {matches.length === 0 ? (
          <View style={styles.emptyState}>
            <Icon name="chatbubble" size={80} color={Colors.primary} style={styles.emptyIcon} />
            <Text style={styles.emptyText}>No chats yet</Text>
            <Text style={styles.emptySubtext}>
              Match with pets to start chatting with their owners!
            </Text>
          </View>
        ) : (
          <View style={styles.chatsList}>
            {matches.map(match => (
              <TouchableOpacity
                key={match.id}
                style={styles.chatCard}
                activeOpacity={0.7}>
                <Image
                  source={{uri: match.animal2.image}}
                  style={styles.chatImage}
                />
                <View style={styles.chatInfo}>
                  <Text style={styles.chatName}>{match.animal2.name}</Text>
                  <Text style={styles.chatMessage}>
                    Say hi to {match.animal2.name}'s owner!
                  </Text>
                </View>
                <View style={styles.chatMeta}>
                  <Text style={styles.chatTime}>New</Text>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>1</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.primary,
    marginRight: 8,
  },
  titleIcon: {
    marginTop: 2,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
    marginTop: 100,
  },
  emptyIcon: {
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
  chatsList: {
    gap: 10,
    paddingBottom: 20,
  },
  chatCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  chatImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  chatMessage: {
    fontSize: 14,
    color: '#666',
  },
  chatMeta: {
    alignItems: 'flex-end',
  },
  chatTime: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
  },
  badge: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ChatsScreen;

