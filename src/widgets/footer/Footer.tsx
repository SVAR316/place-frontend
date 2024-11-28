import './style.scss'
import footerImage from '../../shared/images/common/footer-image.svg'
import logo from '../../shared/images/common/footerLogo.svg'
import arrowRight from '../../shared/images/common/arrow-right-white.svg'
import phone from '../../shared/images/common/phone-call-green.svg'
import mail from '../../shared/images/common/mail-green.svg'

function Footer() {

    return (
        <div className={'footer'}>
            <div className={'footer-left'}>
                <img className={'footer-left__logo'} src={logo} alt={'logo'} />
                <img src={footerImage} alt={'footer image'} />
            </div>
            <div className={'footer-middle'}>
                <p className={'footer-middle__title'}>
                    Хотите быть в курсе всех новостей?
                </p>
                <p className={'footer-middle__desc'}>
                    Подпишитесь на рассылку, и вы узнаете о них первыми!
                </p>
                <div className={'footer-middle__inputs'}>
                    <input />
                    <button>
                        <img src={arrowRight} alt={'arrow right'} />
                    </button>
                </div>
                <div>
                    <a className={'footer-middle__link'} href={'tel:8-800-000-0000'}>
                        <img src={phone} alt={'phone icon'}/>
                        8-800-000-0000
                    </a>
                    <a className={'footer-middle__link'} href={'mailto:placetoday@placetoday.com'}>
                        <img src={mail} alt={'mail icon'}/>
                        placetoday@placetoday.com
                    </a>
                </div>
            </div>
            <div className={'footer-right'}>
                <div>
                    <a>

                    </a>
                </div>
                <a>
                    Пользовательское соглашение
                </a>
                <a>
                    Политика конфиденциальности
                </a>
            </div>
        </div>
    )
}

export default Footer;