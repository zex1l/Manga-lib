import './Header.scss'

const Header = () => {
    return (
        <header >
            <div className="header__inner">
                <h1>
                    Manga Life
                </h1>
                <div className='header__content'>
                    <p>Здесь я рассказываю какие манги или манхвы были прочитаны</p>
                    <p>Оценки и топ выставляю по своему мнению</p>
                    <p>Приятного просмотра!</p>
                </div>
                {/* <img src="https://media4.giphy.com/media/NyMaiJVuPmPKcYbbKd/giphy.gif?cid=ecf05e477h4np4f9yfng5cbcso34z90jd1vggnqgv73i04k0&rid=giphy.gif&ct=s" alt="" /> */}
            </div>
        </header>
    );
};

export default Header;