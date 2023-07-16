


import React from 'react'
import WorkItem from './Workitem'

const data = [
    {
        id: 1,
        year: 2020,
        title: 'Content Creator',
        duration: '3 Years',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A id explicabo deleniti. Repellat quidem possimus hic, dolor non obcaecati similique excepturi. Eveniet, id quasi. Distinctio ducimus eos amet eveniet vero!'
    },
    {
        id: 2,
        year: 2017,
        title: 'Google',
        duration: '3 Years',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A id explicabo deleniti. Repellat quidem possimus hic, dolor non obcaecati similique excepturi. Eveniet, id quasi. Distinctio ducimus eos amet eveniet vero!'
    },
    {
        id: 3,
        year: 2015,
        title: 'Amazon',
        duration: '2 Years',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A id explicabo deleniti. Repellat quidem possimus hic, dolor non obcaecati similique excepturi. Eveniet, id quasi. Distinctio ducimus eos amet eveniet vero!'
    },
    {
        id: 4,
        year: 2012,
        title: 'Facebook',
        duration: '3 Years',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A id explicabo deleniti. Repellat quidem possimus hic, dolor non obcaecati similique excepturi. Eveniet, id quasi. Distinctio ducimus eos amet eveniet vero!'
    }
]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 py-16'>
            <h1 className=' text-4xl font-bold text-center text-[#001f5e]'>Work</h1>
            {data.map((item, idx) => {
                return <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                >ed</WorkItem>
            })}
        </div>
    )
}

export default Work;