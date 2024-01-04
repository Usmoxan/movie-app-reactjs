import "../app/app.css";
import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import SearchPanel from "../search-panel/search-panel";
import AppInfo from "../app-info/app-info";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Empire of osman",
          views: 365,
          favorite: false,
          like: false,
          id: 1,
        },
        {
          name: "Ottoman",
          views: 587,
          favorite: false,
          like: false,
          id: 2,
        },
        {
          name: "Ertugrul",
          views: 98,
          favorite: false,
          like: false,
          id: 3,
        },
      ],
      term: "",
      filter: "all",
    };
  }
  onDelete = (id) => {
    this.setState(({ data }) => {
      //const index = data.findIndex(c => c.id === id)
      //console.log(index); //mutable

      return {
        data: data.filter((c) => c.id !== id),
      };
    });
  };

  addForm = (item) => {
    const newItem = {
      name: item.name,
      views: item.views,
      id: uuidv4(),
      favorite: false,
      like: false,
    };
    this.setState(({ data }) => ({
      data: [...data, { ...item, newItem }],
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => {
      const newArr = data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
      return { data: newArr };
    });
  };
  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }

    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like);
      case "mostViewers":
        return arr.filter((c) => c.views > 800);

      default:
        return arr;
    }
  };
  updateTermHandler = (term) => this.setState({ term });
  updateFilterHandler = (filter) => this.setState({ filter });

  render() {
    const { data, term, filter } = this.state;
    const allMoviesCount = data.length;
    const favoriteMoviesCount = data.filter((g) => g.favorite).length;

    const visibleData = this.filterHandler(
      this.searchHandler(data, term),
      filter
    );
    return (
      <div className="app font-monospace">
        <div className="content">
          <div>
            <AppInfo
              allMoviesCount={allMoviesCount}
              favoriteMoviesCount={favoriteMoviesCount}
            />
            <div className="search-panel">
              <SearchPanel updateTermHandler={this.updateTermHandler} />
              <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler} />
            </div>
            <MovieList
              data={visibleData}
              onToggleProp={this.onToggleProp}
              onDelete={this.onDelete}
            />
            <MoviesAddForm addForm={this.addForm} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
