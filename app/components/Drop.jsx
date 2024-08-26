'use client'

import React, { useState } from 'react'
import './style.css'

const Drop = () => {
    const [open, setOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState('BMW');

    const handleButtonClick = (car) => {
        setSelectedCar(car);
        setOpen(false);
    }

    const handleDropDown = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div className='space-y-4'>
                <section className='flex items-center gap-4'>
                    <div className='w-[10em] text-center cursor-pointer bg-[#2533424d] border border-[#0d1116] px-12 py-1 rounded-xl text-2xl'>
                        <span className='font-bold text-[#3a6fa8]'>{selectedCar}</span>
                    </div>
                    <div
                        className='cursor-pointer duration-200 hover:bg-[#242f3bb4] bg-[#2533424d] border border-[#0d1116] p-3 rounded-xl'
                        onClick={handleDropDown}
                    >
                        <span className='text-[#536579] flex items-center'><ion-icon name="caret-down"></ion-icon></span>
                    </div>
                </section>

                {/** DropDown */}
                <section className='rounded-xl text-[#697583]'>
                    <div className={`dropdown-menu flex flex-col space-y-2 ${open ? 'open' : 'closed'}`}>
                        <button onClick={() => handleButtonClick('BMW')} className='dropdown-button bg-[#2533424d] p-2 rounded-xl border border-[#0d1116] text-start font-bold hover:text-[#3a6fa8]'>
                            BMW
                        </button>
                        <button onClick={() => handleButtonClick('Porsche')} className='dropdown-button bg-[#2533424d] p-2 rounded-xl border border-[#0d1116] text-start font-bold hover:text-[#3a6fa8]'>
                            Porsche
                        </button>
                        <button onClick={() => handleButtonClick('Audi')} className='dropdown-button bg-[#2533424d] p-2 rounded-xl border border-[#0d1116] text-start font-bold hover:text-[#3a6fa8]'>
                            Audi
                        </button>
                        <button onClick={() => handleButtonClick('Mercedes')} className='dropdown-button bg-[#2533424d] p-2 rounded-xl border border-[#0d1116] text-start font-bold hover:text-[#3a6fa8]'>
                            Mercedes
                        </button>
                        <button onClick={() => handleButtonClick('Rolls-Royce')} className='dropdown-button bg-[#2533424d] p-2 rounded-xl border border-[#0d1116] text-start font-bold hover:text-[#3a6fa8]'>
                            Rolls-Royce
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Drop
