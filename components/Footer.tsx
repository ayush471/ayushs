import React from 'react'

interface Props {
    brandLabel?: string,
    year?: number | string
}

export default function Footer({
    brandLabel = "Deri Kurniawan",
    year = new Date().getFullYear()
}: Props): React.JSX.Element {
    return (
        <footer>
            <div className='py-6 text-center safe-x-padding'>
                <p className='text-base font-medium md:text-xl lg:text-xl'>©{year} {brandLabel} All Rights Reserved.</p>
            </div>
        </footer>
    )
}
