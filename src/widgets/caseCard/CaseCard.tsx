import './style.scss'

import mock from '../../shared/images/landing/mock/image.png'
import place from '../../shared/images/common/marker-green.svg'
import calendar from '../../shared/images/common/calendar-green.svg'
import clock from '../../shared/images/common/clock-green.svg'

function CaseCard(){

    return(
        <div className="card">
            <img src={mock} alt={'image'} />
            <p className={'card__name'}>
                Благоворительный фонд для детей
            </p>
            <div className={'card-list'}>
                <div className={'card-item'}>
                    <img className={'card-item__icon'} src={place} alt={'place icon'}/>
                    <p className={'card-item__text'}>
                        г. Астрахань
                    </p>
                </div>
                <div className={'card-item'}>
                    <img className={'card-item__icon'} src={calendar} alt={'calendar icon'}/>
                    <p className={'card-item__text'}>
                        25.02.2025 - 29.02.2025
                    </p>
                </div>
                <div className={'card-item'}>
                    <img className={'card-item__icon'} src={clock} alt={'clock icon'}/>
                    <p className={'card-item__text'}>
                        09:00 - 20:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CaseCard;