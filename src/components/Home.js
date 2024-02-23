import { Link } from "react-router-dom";

const Home = () => {
  const algorithms = [
    {
      name: 'Sorting Algorithms',
      path: '/sorting-algorithms'
    },
    {
      name: 'Sieve of Eratosthenes',
      path: '/sieve-of-eratosthenes'
    },
    {
      name: 'Binary Search',
      path: '/binary-search'
    },
    {
      name: 'Sliding Window',
      path: '/sliding-window'
    }
  ];
  
  return (
    <div className="grid items-center justify-center grid-cols-2 gap-4">
      {algorithms.map((algorithm, key) => (
        <Link 
          key={key} to={algorithm.path} 
          className="px-4 py-2 font-bold text-center rounded-md shadow-lg bg-zinc-300 text-zinc-800" 
        >{algorithm.name}</Link>
      ))}
    </div>
  );
}

export default Home;
