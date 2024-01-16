import React from 'react'
import OffersFromDealers from '../components/OffersFromDealers'
import Top from '../components/Top'
import UrgentSale from '../components/UrgentSale'

export default function Home() {
	return (
		<div className='flex justify-center gap-1 pt-[182px]'>
			<div className="w-[843px] flex flex-col gap-10 relative">
				<div className="absolute top-[0] left-[-180px]">
					<img src="https://auto.am/static/azd/310/2444280a4925a9304efe39b0604e1838.gif" alt="" className='fixed w-[160px] h-[580px]' />
				</div>
				<Top />
				<UrgentSale />
				<OffersFromDealers />
				<div className="absolute top-[0] right-[-20px]">
					<img src="https://auto.am/static/azd/310/2444280a4925a9304efe39b0604e1838.gif" alt="" className='fixed w-[160px] h-[580px]' />
				</div>
			</div>
			<img src="" alt="" />
		</div>
	)
}
