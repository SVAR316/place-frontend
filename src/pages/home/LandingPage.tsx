import HeaderLeading from "../../widgets/header/common/headerLeading";
import './style.scss'


import previewImage from '../../shared/images/landing/preview.png'
import usersLan from '../../shared/images/landing/users-lan.svg'

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
                        <div>

                        </div>
                    </div>
                    <div className={'preview-right'}>
                        <img className={'preview-right__image'} src={previewImage} alt={'preview image'} />

                        <div>
                            <div>
                                <div>
                                    <img src={usersLan} alt={'users icon'} />
                                    <h3>
                                        Сообщество единомышленников
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LandingPage;