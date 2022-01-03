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
    data.append('topic', 'Topic');
    data.append('post_content', post.content);

    //   post.images.forEach((image, index) =>
    //     data.append("images", {
    //       name: "image" + index,
    //       type: "image/jpeg",
    //       uri: image,
    //     })
    //   );

    return client.post(endpoint, data);
};

export default {
    addPost,
    bookmarkPost,
    getPosts,
    getBookmarkedPosts,
};
