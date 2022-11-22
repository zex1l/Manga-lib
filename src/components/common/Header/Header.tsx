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
            </div>
        </header>
    );
};

export default Header;