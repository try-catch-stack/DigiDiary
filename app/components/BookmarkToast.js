import { ToastAndroid } from 'react-native';

const bookmarkToast = (user, response) => {
    const user_id = user.user.id;
    const users_bookmarked = response.data.bookmarks;
    if (users_bookmarked.includes(user_id)) {
        return ToastAndroid.show(
            'Post bookmarked successfully!',
            ToastAndroid.BOTTOM
        );
    } else {
        return ToastAndroid.show(
            'Post unbookmarked successfully!',
            ToastAndroid.BOTTOM
        );
    }
};

export default bookmarkToast;
