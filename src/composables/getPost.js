import { ref } from 'vue';
import db from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const docRef = doc(db, 'posts', id);

  const load = async () => {
    try {
      const res = await getDoc(docRef);

      if (!res.data()) {
        throw Error('that post does not exist');
      }

      post.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
