import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Hyperlink from 'react-native-hyperlink';

const PostContent = () => {
    const copyToClipboard = (url) => {
        Clipboard.setString(url);
    };

    return (
        <View style={styles.postContent}>
            <Hyperlink
                linkDefault={true}
                onLongPress={(url, text) => copyToClipboard(url)}
                linkStyle={{ color: '#2980b9' }}
            >
                <Text style={styles.postText}>
                    https://www.npmjs.com/package/react-native-hyperlink Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    tincidunt nec velit vitae bibendum. Ut quis finibus diam.
                    Proin id auctor risus. Aliquam est leo, convallis rhoncus
                    bibendum sed, accumsan cursus dolor. Etiam ultricies odio
                    dignissim dolor molestie maximus. Aliquam vehicula at odio
                    nec pharetra. Suspendisse scelerisque felis tortor, quis
                    tristique nisl rutrum eget. Etiam at orci libero. Quisque ac
                    sem sodales, varius justo fringilla, fringilla massa. Ut sed
                    turpis enim. Aenean vulputate mauris at condimentum
                    condimentum. Donec ullamcorper porttitor justo ut laoreet.
                    Sed dapibus blandit enim, et rhoncus augue porttitor a.
                    Curabitur sit amet iaculis mauris, sed efficitur turpis.
                    Aenean ex sapien, ultricies id orci ac, imperdiet rhoncus
                    augue. Proin vulputate dui ac nulla scelerisque sodales.
                    Suspendisse potenti. Aliquam sed ligula eget velit convallis
                    sodales. Vestibulum sodales eros nec ipsum mattis, in
                    porttitor dui semper. Curabitur vehicula mi ut metus
                    viverra, eu mattis diam pellentesque. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Quisque ac porttitor est. Sed nisl libero,
                    suscipit at blandit nec, faucibus non enim. Aliquam massa
                    eros, dapibus et pellentesque non, euismod lobortis orci.
                    Nunc pellentesque dictum odio, ut venenatis nunc pulvinar
                    eget. Phasellus id efficitur justo. Pellentesque non
                    dignissim felis. Aenean non lacus eget nisl bibendum
                    eleifend. Praesent volutpat finibus pretium. Ut sed euismod
                    risus. Mauris dignissim consectetur felis quis posuere.
                    Nulla dignissim nisi purus, id vulputate erat mollis non.
                    Aliquam facilisis ligula mauris, vel
                    www.npmjs.com/package/react-native-hyperlink sagittis neque
                    posuere ut. Integer sit amet iaculis risus, in consectetur
                    ex. Pellentesque imperdiet purus mi, a finibus sem placerat
                    eget. Sed dolor magna, ullamcorper ut enim a, iaculis
                    malesuada massa. Phasellus luctus ipsum a velit scelerisque,
                    fermentum efficitur libero faucibus.
                </Text>
            </Hyperlink>
        </View>
    );
};

export default PostContent;

const styles = StyleSheet.create({
    postContent: {
        paddingVertical: 20,
        paddingHorizontal: 25,
    },
    postText: {
        fontFamily: 'Roboto',
        fontSize: 16,
    },
});
