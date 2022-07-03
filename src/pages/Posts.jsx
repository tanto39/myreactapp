import React, {useState, useEffect, useRef} from "react";
import PostService from "./../API/PostService";
import ClassCounter from "./../components/ClassCounter";
import Counter from "./../components/Counter";
import PostFilter from "./../components/PostFilter";
import PostForm from "./../components/PostForm";
import PostList from "./../components/PostList";
import Text from "./../components/Text";
import Button from "./../components/UI/button/Button";
import Loader from "./../components/UI/Loader/Loader";
import Modal from "./../components/UI/modal/Modal";
import { useFetching } from "./../hooks/useFetching";
import { usePosts } from "./../hooks/usePosts";
import { getPageCount } from "./../utils/pages";
import Pagination from "./../components/UI/pagination/pagination";
import { useObserver } from "../hooks/useObserver";
import Select from "../components/UI/select/Select";

function Posts() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Описание'}
  ]);

  const [filter, setFilter] = useState({sort: '', searchQuery: ''});
  const sortAndSearchedPosts = usePosts([...posts], filter.sort, filter.searchQuery);
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

 useObserver(lastElement, page < totalPages, isPostsLoading, () => {
   setPage(page + 1);
 })

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <Button onClick={() => setModal(true)}>
        Создать пост
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </Modal>
      <ClassCounter/>
      <Text/>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      <Select
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="Кол-во элементов на странице"
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 15, name: '15'},
          {value: -1, name: 'Все'}
        ]}
      />
      {postError && <h2>Произошла ошибка {postError}</h2>}
      <PostList remove={removePost} posts={sortAndSearchedPosts} title="Список"/>
      <div ref={lastElement} style={{height: 20, background: 'red'}}></div>
      {isPostsLoading &&
        <Loader/>
      }
      <Pagination 
        page={page} 
        totalPages={totalPages} 
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;

