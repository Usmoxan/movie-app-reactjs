import '../app/app.css';

import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import AppInfo from '../app-info/app-info';
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';
function App() {

  const data = [
    {
      name: "Empire of osman",
      views: 365,
      favorite: false,
      id: 1
    },
    {
      name: "Ottoman",
      views: 587,
      favorite: true,
      id: 2
    },
    {
      name: "Ertugrul",
      views: 98,
      favorite: false,
      id: 3
    },
  ]
  return (
    <div className="app font-monospace">
      <div className='content'>
        <div>
          <AppInfo />
          <div className='search-panel'>
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList data={data} />
          <MoviesAddForm />
        </div>

      </div>
    </div>
  );
}

export default App;
