import { createContext, useContext, useEffect, useState } from "react";

const NewsContext = createContext(null);
export const useNews = () => useContext(NewsContext);

const News = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [totalPost, setTotalPost] = useState(0);
  const [allPost, setAllPost] = useState([]);
  const limit = 6;

  // Total pages
  const totalPages = Math.ceil(totalPost / limit);

  // Current page derived from skip
  const currentPage = skip / limit + 1;
  const isPrevDisable = currentPage === 1;
  const isNextDisable = currentPage >= totalPages;
  const handleIncreaseSkip = () => {
    setSkip((prev) => prev + limit);
  };

  const handleDecreaseSkip = () => {
    setSkip((prev) => Math.max(prev - limit, 0));
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`,
        );
        const data = await res.json();

        setPosts(data.posts);
        setTotalPost(data.total);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [skip]);

  const fetchDataAll = async () => {
    setIsLoading(true);
    let tempAllPost = [];
    let skip = 0;
    const limit = 100;
    try {
      while (true) {
        const res = await fetch(
          `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`,
        );
        const data = await res.json();
        tempAllPost = [...tempAllPost, ...data.posts];
        skip += data.posts.length;
        if (skip >= data.total) break;
      }
      setAllPost(tempAllPost);
      
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    posts,
    allPost,
    isLoading,
    currentPage,
    totalPages,
    isPrevDisable,
    isNextDisable,
    handleIncreaseSkip,
    handleDecreaseSkip,
    fetchDataAll,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export default News;
