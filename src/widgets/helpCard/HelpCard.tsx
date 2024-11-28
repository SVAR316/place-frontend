import style from './style.module.scss'
import plus from '../../shared/images/common/plus-green.svg'

function HelpCard() {

    return (
        <div className={style.card}>
            <div className={style.cardContent}>
                <p>
                    Не могу разобраться с документами, выплатами, мерами социальной поддержки, связанными с мобилизацией. К кому обратиться?
                </p>
                <button>
                    <img src={plus} alt={'plus icon'} />
                </button>
            </div>
            <div className={style.cardAnswer}>
                <p>
                    Вы можете обратиться к специалистам PlaceToday. Профессиональные юристы проконсультируют вас по наиболее острым вопросам, связанным с оформлением документов, получением выплат и компенсаций. Для этого оставьте заявку на сайте либо позвоните по телефону горячей линии 8-800-000-0000 (круглосуточно).
                </p>
            </div>
        </div>
    )
}

export default HelpCard;