import HeaderLeading from "../../widgets/header/common/headerLeading";
import './style.scss'


import previewImage from '../../shared/images/landing/preview.png'
import usersLan from '../../shared/images/landing/users-lan-white.svg'
import handHoldingHeart from '../../shared/images/landing/users-lan-white.svg'
import calendarPen from '../../shared/images/landing/calendar-pen.svg'
import moneyBank from '../../shared/images/landing/moneyBank.svg'
import handshake from '../../shared/images/landing/handshake.svg'

function LandingPage() {


    return (
        <>
            <HeaderLeading/>
            <div className={'container'}>
                <div className={'preview'}>
                    <div className={'preview-left'}>
                        <h1 className={'preview-left__title'}>
                            Платформа для добрых дел
                        </h1>
                        <h2 className={'preview-left__desc'}>
                            Добро пожаловать на "Добрые Дела" – уникальную платформу, созданную для тех, кто стремится
                            изменить мир к лучшему! Мы объединяем людей, готовых совершать добрые дела, и тех, кто
                            нуждается в помощи. Наша миссия – сделать волонтерство доступным, понятным и вдохновляющим
                            для каждого.
                        </h2>
                        <div className={'preview-left__buttons'}>
                            <button className={'preview-left__button'}>
                                Хочу помочь
                            </button>
                            <button className={'preview-left__button'}>
                                Организатор
                            </button>
                        </div>
                    </div>
                    <div className={'preview-right'}>
                        <img className={'preview-right__image'} src={previewImage} alt={'preview image'}/>

                        <div className={'preview-right__list'}>
                            <div className={'preview-right__item'}>
                                <div>
                                    <img src={usersLan} alt={'users icon'}/>
                                </div>
                                <h3>
                                    Сообщество единомышленников
                                </h3>
                            </div>
                            <div className={'preview-right__item'}>
                                <div>
                                    <img src={handHoldingHeart} alt={'users icon'}/>
                                </div>
                                <h3>
                                    Волонтерские проекты
                                </h3>
                            </div>
                            <div className={'preview-right__item'}>
                                <div>
                                    <img src={calendarPen} alt={'users icon'}/>
                                </div>
                                <h3>
                                    Создание собственных проектов
                                </h3>
                            </div>
                            <div className={'preview-right__item'}>
                                <div>
                                    <img src={moneyBank} alt={'users icon'}/>
                                </div>
                                <h3>
                                    Сбор средств
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'about'}>
                    <h2 className={'about__title'}>
                        О платформе
                    </h2>

                    <div className={'about-list'}>
                        <div className={'about-center'}>
                            <div className={'about-center__item'}>
                                <img src={handshake} alt={'handshake icon'}/>
                            </div>
                        </div>
                        <div className={'about-item about-item__bg'}>
                            <h3 className={'about-item__title'}>
                                Волонтерские проекты:
                            </h3>
                            <h4 className={'about-item__desc'}>
                                Присоединяйтесь к разнообразным инициативам в вашем городе или за его пределами. От
                                помощи бездомным и воспитанникам детских домов до эколого-ориентированных акций – у нас
                                есть множество проектов на любой вкус.
                            </h4>
                        </div>
                        <div className={'about-item'}>
                            <h3 className={'about-item__title'}>
                                Сбор средств:
                            </h3>
                            <h4 className={'about-item__desc'}>
                                Поддержите важные инициативы, сделав пожертвования через нашу платформу. Мы обеспечиваем
                                прозрачность и контроль за использованием средств, чтобы вы могли быть уверены в том,
                                что ваша помощь действительно решает проблемы.
                            </h4>
                        </div>
                        <div className={'about-item'}>
                            <h3 className={'about-item__title'}>
                                Создание собственных проектов:
                            </h3>
                            <h4 className={'about-item__desc'}>
                                У вас есть идея, как помочь людям или улучшить среду? Создайте свой проект на нашей
                                платформе, привлекайте волонтеров и собирайте средства на его реализацию. Мы предоставим
                                все необходимые инструменты для успешного старта.
                            </h4>
                        </div>
                        <div className={'about-item about-item__bg'}>
                            <h3 className={'about-item__title'}>
                                Сообщество единомышленников:
                            </h3>
                            <h4 className={'about-item__desc'}>
                                На "Добрых Делах" вы найдете людей, которые разделяют ваши ценности и стремления.
                                Обменивайтесь опытом, находите друзей и вдохновение для новых начинаний!
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LandingPage;