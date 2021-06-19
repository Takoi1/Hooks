import "./App.css";
import MovieList from "./components/MovieList";
import { useState } from "react";
import  RatingStar from "./components/RatingStar";




function App() {
  const myMovies = [
    {
      id: Math.random(),
      image:
        "social.jpeg",
      rating: 4,
      name: "the social dilemma",
      date: "2020",
      description:
        "The Social Dilemma focuses on how big social media companies manipulate users by using algorithms that encourage addiction to their platforms. It also shows, fairly accurately, how platforms harvest personal data to target users with ads – and have so far gone largely unregulated",
    },
   
    {
      id: Math.random(),
      image: "tri.jpg",
      rating: 2,
      name: "TRI",
      date: "2016",
      description:
        "TRI is an inspiring, emotionally-charged drama about Natalie, a medical technician with a history of not finishing things, who is inspired by a cancer patient to sign up for her first Triathlon.",
    },
    {
      id: Math.random(),
      image: "wild.jpg",
      rating: 3,
      name: "Into the wild",
      date: "2007",
      description:
        "It is an adaptation of the 1996 non-fiction book of the same name written by Jon Krakauer and tells the story of Christopher McCandless (Alexander Supertramp), a man who hiked across North America into the Alaskan wilderness in the early 1990s",
    },
    {
      id: Math.random(),
      image: "pursuithappyness.jpg",
      rating: 4,
      name: "The pursuit of happyness",
      date: "2006",
      description:
        "The Pursuit of Happyness is a 2006 American biographical drama film directed by Gabriele..",
    },  
  ];


  const [Movies, setmyMovie] = useState(myMovies);
  const [inputSearch, setInputSearch] = useState("");
  const [starSearch, setStarSearch] = useState(null);
  return (
    
    <div className="App">
        <h1>Movie App</h1> 
            <header className="header">
              
              <input type="text" placeholder="Search By Name/Star" onChange={(e) => setInputSearch(e.target.value)} />
                <RatingStar rating={starSearch} setStarSearch={setStarSearch} />
            </header>
                <MovieList
                  myMovies={Movies}
                  setmyMovie={setmyMovie}
                  inputSearch={inputSearch}
                  starSearch={starSearch}
                />
    </div>
  );
}

export default App;