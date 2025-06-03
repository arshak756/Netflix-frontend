
import React from "react";

const movies = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
  },
  {
    id: 2,
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
  },
  {
    id: 3,
    title: "Leo",
    image: "https://m.media-amazon.com/images/M/MV5BODFkZWQwZDAtZDNkYi00MWU1LTkyNmYtM2JjMTM5OTI0ZGQwXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 4,
    title: "Maharaja",
    image: "https://m.media-amazon.com/images/M/MV5BZDJjNzdkNmItZDExMy00NzA3LWE3YzEtM2U3ZGRjMThlMDU2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 5,
    title: "Narcos",
    image: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
  },
  {
    id: 6,
    title: "Retro",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsv-a3psBWnXGKMlmSOujLIonZu-ncVvEKfQ&s",
  },
  {
    id: 7,
    title: "Dark",
    image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
  },
  {
    id: 8,
    title: "When life gives you tangerines",
    image: "https://m.media-amazon.com/images/M/MV5BZTBhZTcwNWUtOTZjMi00ZjI2LWEzMzMtNWJkMWQ2ZDA0NTU3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 9,
    title: "Squid Game",
    image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
  },
  {
    id: 10,
    title: "Wednesday",
    image: "https://image.tmdb.org/t/p/w500/8uUU2pxm6IYZw8UgnKJyx7Dqwu9.jpg",
  },
];

export default function Dashboard() {
  return (
    <div className="bg-black min-h-screen text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Recommended for You</h1>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-zinc-900 rounded overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
            <img src={movie.image} alt={movie.title} className="w-full h-60 object-cover" />
            <div className="p-3">
              <h2 className="text-lg font-semibold truncate">{movie.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




















