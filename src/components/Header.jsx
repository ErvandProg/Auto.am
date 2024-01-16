import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className='w-[100%] bg-white flex flex-col justify-center items-center py-[20px] mb-[10px] [box-shadow:0_2px_6px_0_rgba(0,_0,_0,_0.07)] fixed z-10'>
			<a href='' className="w-[1000px]">
				<img src="https://auto.am/static/azd/280/971ec50b6314f01894e3083e378f1e79.gif" alt="" className='w-1000px' />
			</a>
			<div className='w-[1000px] p-[15px]'>
				<ul className='flex justify-between'>
					<li><Link to='/'><img src="../../public/logo.jpeg" alt="" className='w-[195px] h-[45px] object-cover' /></Link></li>
					<div className="flex gap-10">
						<li className='h-[100%]'><Link to='/dealers' className='h-[100%] flex flex-col items-center justify-center' >
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-[rgba(134,_149,_164,_1)]'><path d="m20.772 10.155-1.368-4.104A2.995 2.995 0 0 0 16.559 4H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.104A2 2 0 0 0 2 12v5c0 .738.404 1.376 1 1.723V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.277A1.99 1.99 0 0 0 22 17v-5a2 2 0 0 0-1.228-1.845zM7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 0 1 7.441 6zM5.5 16a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 16zm13 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18.5 16z"></path></svg>
							Դիլերները</Link></li>
						<li className='h-[100%]'><Link to='/ContactUs' className='h-[100%] flex flex-col items-center justify-center' >
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-[rgba(134,_149,_164,_1)]'><path d="M20 1.999H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2v-12c0-1.103-.897-2-2-2zm-6 11H7v-2h7v2zm3-4H7v-2h10v2z"></path></svg>
							</Link></li>
					</div>
				</ul>
			</div>
		</div>
	)
}
