import HeaderLeading from "../../widgets/header/common/headerLeading";
import './style.scss'


function LandingPage() {


    return (
        <>
            <HeaderLeading/>
            <div className={'container'}>
                <div className={'preview'}>
                    <div className={'preview-left'}>
                        <p className={'preview-left__title'}>
                            Платформа для добрых дел
                        </p>
                        <p className={'preview-left__desc'}>
                            Добро пожаловать на "Добрые Дела" – уникальную платформу, созданную для тех, кто стремится
                            изменить мир к лучшему! Мы объединяем людей, готовых совершать добрые дела, и тех, кто
                            нуждается в помощи. Наша миссия – сделать волонтерство доступным, понятным и вдохновляющим
                            для каждого.
                        </p>
                        <div>

                        </div>
                    </div>
                    <div className={'preview-right'}>

                    </div>
                </div>
            </div>
        </>
    )
}


export default LandingPage;