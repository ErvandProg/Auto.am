import React from 'react';
let dataBase = [
	{
		img: "//s.list.am/h/272/76379272.webp",
		price: "$29,500",
		text: "Lexus RX, 3.5 լ, 2013 թ.",
		info: "2024թ."
	},
	{
		img: "//s.list.am/h/176/76048176.webp",
		price: "$44,000",
		text: "Tesla Model Y, էլեկտրական, լիաքարշ, 2020 թ.",
		info: "2024թ."
	},
	{
		img: "//s.list.am/h/560/76416560.webp",
		price: "$9,800",
		text: "Hyundai Elantra, 1.8 լ, 2012 թ., գազ",
		info: "2024թ."
	},
	{
		img: "//s.list.am/h/163/76803163.webp",
		price: "$55,000",
		text: "Toyota Highlander, 3.5 լ, լիաքարշ, 2021 թ.",
		info: "2024թ."
	},
	{
		img: "//s.list.am/h/522/76834522.webp",
		price: "$20,000",
		text: "BMW 3 Series, 2.0 լ, 2017 թ.",
		info: "2024թ."
	},
	{
		img: "//s.list.am/h/272/76379272.webp",
		price: "$29,500",
		text: "Lexus RX, 3.5 լ, 2013 թ.",
		info: "2024թ."
	},
	{
		img: "//s.list.am/h/176/76048176.webp",
		price: "$44,000",
		text: "Tesla Model Y, էլեկտրական, լիաքարշ, 2020 թ.",
		info: "2024թ."
	},
	{
		img: "//s.list.am/h/560/76416560.webp",
		price: "$9,800",
		text: "Hyundai Elantra, 1.8 լ, 2012 թ., գազ",
		info: "2024թ."
	},
	{
		img: "//s.list.am/h/163/76803163.webp",
		price: "$55,000",
		text: "Toyota Highlander, 3.5 լ, լիաքարշ, 2021 թ.",
		info: "2024թ."
	},
	{
		img: "//s.list.am/h/522/76834522.webp",
		price: "$20,000",
		text: "BMW 3 Series, 2.0 լ, 2017 թ.",
		info: "2024թ."
	},
	{
		img: "//s.list.am/h/272/76379272.webp",
		price: "$29,500",
		text: "Lexus RX, 3.5 լ, 2013 թ.",
		info: "2024թ."
	},
	{
		img: "//s.list.am/h/176/76048176.webp",
		price: "$44,000",
		text: "Tesla Model Y, էլեկտրական, լիաքարշ, 2020 թ.",
		info: "2024թ."
	},
	{
		img: "//s.list.am/h/560/76416560.webp",
		price: "$9,800",
		text: "Hyundai Elantra, 1.8 լ, 2012 թ., գազ",
		info: "2024թ."
	},
	{
		img: "//s.list.am/h/163/76803163.webp",
		price: "$55,000",
		text: "Toyota Highlander, 3.5 լ, լիաքարշ, 2021 թ.",
		info: "2024թ."
	},
	{
		img: "//s.list.am/h/522/76834522.webp",
		price: "$20,000",
		text: "BMW 3 Series, 2.0 լ, 2017 թ.",
		info: "2024թ."
	}
]
export default function UrgentSale() {
	return (
		<div>
			<p className='text-[20px] font-bold text-[#333] block h-auto mb-[6px] [transition:color_.2s,background-color_.2s]'>
				Թոփ հայտարարություններ
			</p>
			<div className='flex overflow-hidden flex-wrap justify-between'>
				{dataBase.map((car, index) => (
					<div key={index} className="relative inline-block w-[157px] h-[189px] mx-[0] my-[8px] text-left align-top cursor-pointer">
						<img src={car.img} alt={`Car ${index + 1}`} className="w-[157px] h-[118px] rounded-[8px] [transition:all_0.2s] object-cover" />
						<div className="flex flex-col my-[6px]">
							<div className="text-[15px] text-[#222] leading-[21px] overflow-hidden max-h-[44px] overflow-ellipsis [transition:all_0.2s] text-left">{car.text}</div>
							<div className=" flex justify-between">
								<div className="text-[16px] font-bold text-[#222] mb-[2px]">{car.price}</div>
								<div className="text-[14px] text-[#666] mt-[4px]">{car.info}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
