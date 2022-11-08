import React, { useEffect, Fragment, useState } from 'react'

type Props = {}

const Countdown = ({ }: Props) => {
    const [countDays, setCountDays] = useState<number>(0)
    const [countHours, setCountHours] = useState<number>(0)
    const [countMinutes, setCountMinutes] = useState<number>(0)
    const [countSeconds, setCountSeconds] = useState<number>(0)

    const oneMin = 60000;
    const oneHour = 60 * oneMin;
    const oneDay = 24 * oneHour;
    const timeOffset = 11 * oneHour;

    const startTimer = () => {
        const interval = setInterval(() => {
            const now = new Date().valueOf()
            const today1900 = Math.floor(new Date().valueOf() / oneDay) * oneDay + timeOffset
            const settleStartsIn = ((today1900 > now) ? (today1900 - now) : (today1900 - now + oneDay))

            if (settleStartsIn > 0) {
                const startDays = Math.floor(settleStartsIn / oneDay)
                const startHours = Math.floor((settleStartsIn % oneDay) / oneHour)
                const startMinutes = Math.floor((settleStartsIn % oneHour) / oneMin)
                const startSeconds = Math.floor((settleStartsIn % oneMin) / 1000)
                setCountDays(startDays)
                setCountHours(startHours)
                setCountMinutes(startMinutes)
                setCountSeconds(startSeconds)
            } else {
                clearInterval(interval)
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer()
    })

    return (
        <Fragment>
            <section className='count-container'>
                <div className='text-white font-bold'>距離下次開獎</div>
                <section className='py-2'>
                    <div className='flex text-[#4df1c0] m-auto items-center text-center h-[80px] w-[300px]
                    sm:h-[150px] sm:w-[350px] bg-gradient-to-r from-[#051818] to-[#0e3839]
                    rounded-xl border-2 border-silver shadow-2xl shadow-[#54bfd4] justify-around px-4 '>
                        <section>
                            <p className='text-2xl sm:text-5xl'>{countDays}</p>
                            <small>Days</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p className='text-2xl sm:text-5xl'>{countHours}</p>
                            <small>Hours</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p className='text-2xl sm:text-5xl'>{countMinutes}</p>
                            <small>Minutes</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p className='text-2xl sm:text-5xl'>{countSeconds}</p>
                            <small>Seconds</small>
                        </section>
                    </div>
                </section>
            </section>
        </Fragment>
    )
}



export default Countdown