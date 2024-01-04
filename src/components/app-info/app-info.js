import './app-info.css'

const AppInfo = ({allMoviesCount, favoriteMoviesCount}) => {
    return <div className='app-info'>
        <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCount}</p>
        <p className='fs-3 text-uppercase'>Sevimli filmlar: {favoriteMoviesCount}</p>
    </div>

}

export default AppInfo