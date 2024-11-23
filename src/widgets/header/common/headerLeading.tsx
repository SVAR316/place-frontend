import './style.scss'
import {Link} from "react-router-dom";

function HeaderLeading() {

    return (
        <div className={'container'}>
            <div className={'header'}>
                <div className={'header-left'}>
                    <Link className={'header-left__item'} to={'/'}>
                        Мероприятия
                    </Link>
                    <Link className={'header-left__item'} to={'/'}>
                        Сборы
                    </Link>
                    <Link className={'header-left__item'} to={'/'}>
                        Новости
                    </Link>
                </div>
                <div className={'header-middle'}>
                    <div className={'header__logo'}>
                    </div>
                    <p className={'header-middle__title'}>
                        PlaceToday
                    </p>
                </div>

                <div className={'header-right'}>
                    <Link className={'header-left__item'} to={'/'}>
                        Организации
                    </Link>

                    <div>
                        <Link className={'header-right__auth'} to={'/login'}>Войти</Link>
                        <Link className={'header-right__auth'} to={'/registration'}>Регистрация</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderLeading;