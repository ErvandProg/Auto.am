import React from 'react';
import { memo } from 'react';

function Footer() {
	return (
		<div className='w-[100%] bg-slate-200 flex justify-center gap-4 py-[20px] mt-[10px]'>
			<p>Նախագծի մասին</p><p>Օգտագործման կանոնները</p><p>Գովազդ կայքում</p><p>Օգնություն</p><p>Կապ</p>
		</div>
	)
}


export default memo(Footer)
