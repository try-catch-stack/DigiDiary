import client from './client';
import authStorage from '../auth/authStorage';

const endpoint = '/app/posts';

const getPosts = () => client.get(endpoint);

const getBookmarkedPosts = async () => {
    const token = await authStorage.getToken();
    return client.get(
        endpoint + '/bookmarks',
        {},
        { headers: { Authorization: 'Token ' + token } }
    );
};

const bookmarkPost = async (post_id) => {
    const token = await authStorage.getToken();
    return client.put(
        `/app/posts/${post_id}/bookmark`,
        {},
        { headers: { Authorization: 'Token ' + token } }
    );
};

export const addPost = (post, onUploadProgress) => {
    const data = new FormData();
    data.append('title', post.title);
    data.append('topic', post.topic.label);
    data.append('post_content', post.post);

    return client.post(endpoint, data, {
        headers: { Authorization: 'Token ' + token },
    });
};

export default {
    addPost,
    bookmarkPost,
    getPosts,
    getBookmarkedPosts,
};
