import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import FullNewsCart from "../components/FullNewsCart";
import { ArrowLeft } from "lucide-react";

const FullNewsPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const fetchDataById = async (id) => {
      try {
        const res = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await res.json();

        setNews([data]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataById(id);
  }, [id]);

  return (
    <div>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center gap-5">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <h2 className="text-xl font-bold text-primary animate-pulse">
              Fetching News...
            </h2>
          </div>
        </div>
      )}
      <section className="max-w-6xl mx-auto h-screen flex items-center">
        <Link to="/news" className="fixed top-20 right-20 hover:text-primary hover:underline flex items-center gap-1"><ArrowLeft size={16} /> Back to news</Link>
        {news.map((post) => {
          return (
            <div key={post.id}>
              <FullNewsCart item={post} />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FullNewsPage;
