import { FC } from 'react'
/*import { getClassname } from "../"
import { IDefaultProps } from "../"*/

interface ILandingPagProps /*extends IDefaultProps*/ {

}

export const LandingPage: FC<ILandingPagProps> = (props: ILandingPagProps) => {
    const className = ''//getClassname('', [], props.className)

    return <main className={className}>
        LandingPage
    </main>
}

LandingPage.defaultProps = {
    //className: ''
}


