import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import CustomIcon from '../components/Icon';

const PostCard = () => {
    return (
        <View style={styles.card}>
            <View style={styles.cardImage}>
                <Image
                    source={require('../assets/img1.jpg')}
                    style={{ height: '100%', width: 120 }}
                />
            </View>
            <View style={styles.cardContent}>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi tincidunt nec velit vitae bibendum. Ut quis finibus
                    diam.
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        width: '100%',
                        justifyContent: 'space-between',
                        bottom: 5,
                        margin: 5,
                        alignItems: 'center',
                    }}
                >
                    <Text style={styles.dateAndAuthor}>Date --- Author</Text>

                    <TouchableOpacity
                        style={styles.bookmarkButton}
                        onPress={() => console.log('Bookmarked')}
                    >
                        <CustomIcon
                            name="bookmark-o"
                            backgroundColor={'#F5F5F5'}
                            size={35}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default PostCard;

const styles = StyleSheet.create({
    bookmarkButton: {},
    card: {
        flexDirection: 'row',
        height: 125,
        overflow: 'hidden',
        margin: 10,
    },
    cardContent: {
        borderWidth: 0.5,
        borderColor: '#EAEAEA',
        backgroundColor: '#F5F5F5',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 1,
        flex: 0.7,
        paddingHorizontal: 5,
    },
    cardImage: {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        flex: 0.3,
        overflow: 'hidden',
    },
    dateAndAuthor: {
        fontSize: 10,
        color: '#A9A9A9',
    },
});
