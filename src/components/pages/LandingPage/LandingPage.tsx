import { FC, useEffect } from 'react'

import { getClassname, IDefaultProps, Grid, Typography, Center, Container } from "../../"
import './style.css'

interface ILandingPageProps extends IDefaultProps {

}

export const LandingPage: FC<ILandingPageProps> = (props: ILandingPageProps) => {
    const className = getClassname('p__landing', [], props.className)

    useEffect(() => {
        const slider = document.querySelector('.p__landing__galleryList') as HTMLDivElement | undefined
        if (slider) {
            slider.scrollLeft = 172
        }
    })

    return <main className={className}>
        <Container>
            <Grid className={'p__landing__article'}>
                <div className={'p__landing__articleColumn'}>
                    <img
                        className={'p__landing__articleImg'}
                        src={require('../../../assets/LandingPage/1.png')}
                        alt={'Московский кремль'}
                    />
                    <div className={'p__landing__articleText'}>
                        <Typography
                            variant={'h2'}
                            element={'h2'}
                        >
                            О ПРОЕКТЕ
                        </Typography>
                        <Typography
                            variant={'p'}
                            element={'p'}
                        >
                            Данный проект создан для развития туризма в России на хакатоне “Автопутешествия по России”.
                        </Typography>
                        <Typography
                            variant={'p'}
                            element={'p'}
                        >
                            Автопутешествие может казаться туристу большой и сложной задачей, к которой не понятно с какой стороны подойти. Нужно потратить много усилий: готовить автомобиль, копить деньги, собирать огромное количество вещей, брать отпуск, откладывать важные дела. Очень часто туристы забывают о возможности коротких автопутешествия в 1-2 дня и буквально на 1 бак бензина. Такие путешествия может позволить себе едва ли не каждый турист от 1 до 4 раз в месяц.
                        </Typography>
                        <Typography
                            variant={'p'}
                            element={'p'}
                        >
                            Данный проект позволяет путешественнику разработать план путешествия, особо не заморачиваясь, за него все сделает ии: подберет удобный маршрут, забронирует отель, подскажет, где можно пообедать.
                        </Typography>
                    </div>
                </div>
                <div className={'p__landing__articleColumn'}>
                    <img
                        className={'p__landing__articleImg'}
                        src={require('../../../assets/LandingPage/2.png')}
                        alt={'Московский кремль'}
                    />
                    <div className={'p__landing__articleText'}>
                        <Typography
                            variant={'p'}
                            element={'p'}
                        >
                            Россия — это сундук с сокровищами, которые можно перебирать бесконечно. У нас полно незабываемых мест от Выборга до Камчатки — пора пользоваться тем, что они доступны безо всякой волокиты с визами.
                        </Typography>
                        <Typography
                            variant={'p'}
                            element={'p'}
                        >
                            Только в России можно сплавляться по удивительно красивым рекам Алтайского края и Приморья; изучать затерянный мир на Камчатке; кататься на снегоходах по тундре; путешествовать по старинным русским городам Золотого кольца – гордости России; в сезон белых ночей увидеть великолепие одного из самых красивых городов мира - Санкт-Петербурга; добраться до горы Эльбрус - места паломничества альпинистов и горнолыжников; обязательно побывать в Сочи – столице Олимпиады 2014 года; отдохнуть и полечиться на курортах Кавказских Минеральных вод, и, конечно же, посетить главный символ России – Красную площадь.                </Typography>
                    </div>
                    <img
                        className={'p__landing__articleImg'}
                        src={require('../../../assets/LandingPage/3.png')}
                        alt={'Московский кремль'}
                    />
                </div>
            </Grid>
        </Container>
        <div className={'p__landing__gallery'}>
            <Container>
                <Center className={'p__landing__galleryHeader'}>
                    <Typography
                        variant={'h2'}
                        element={'h2'}
                    >
                        Путешествуй с Дорожной картой!
                    </Typography>
                </Center>
            </Container>
            <div className={'p__landing__galleryList'}>
                <img
                    className={'p__landing__galleryList__item'}
                    src={require('../../../assets/LandingPage/4.png')}
                    alt={'element 1'}
                />
                <img
                    className={'p__landing__galleryList__item'}
                    src={require('../../../assets/LandingPage/5.png')}
                    alt={'element 2'}
                />
                <img
                    className={'p__landing__galleryList__item'}
                    src={require('../../../assets/LandingPage/6.png')}
                    alt={'element 3'}
                />
                <img
                    className={'p__landing__galleryList__item'}
                    src={require('../../../assets/LandingPage/7.png')}
                    alt={'element 4'}
                />
            </div>
        </div>
    </main>

}

LandingPage.defaultProps = {
    className: ''
}


