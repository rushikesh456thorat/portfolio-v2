import React from 'react'

const Container = ({children,title,className=''}) => {
  return (
   <>
    <section className={className + 'gap-8 flex flex-col'}>
        <div>
            <h1 className="text-3xl text-gray-800 dark:text-gray-200 font-black hero-font">{title}</h1>
        </div>
        <div className='text-gray-700 font-stretch-75% text-[17px] gap-4 flex flex-col'>

            {children}

        </div>
    </section>
   </>
  )
}

export default Container