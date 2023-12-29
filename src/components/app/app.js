import '../app/app.css';

import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import AppInfo from '../app-info/app-info';
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';
function App() {
  return (
    <div className="app font-monospace">
      <div className='content'>
        <div>
          <AppInfo />
          <div className='search-panel'>
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList />
          <MoviesAddForm />
        </div>

      </div>
    </div>
  );
}

export default App;
