import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

export const ProjCard = ({item}:any) => {
  return (
    <div
    className='flex flex-col gap-2 justify-between p-4 rounded-md #border-2 shadow-md bg-gradient-to-r from-second-default to-second-100
    border-slate-500 border
    '
    >
      <img 
      className='rounded-md h-[300px] object-cover'
      src={item?.image} 
      alt={item.title} 
      />

      <div>
        <h2 className='text-2xl font-bold text-gray-200'>
          {item?.title}
        </h2>
        <p className='text-gray-400'>
          {item?.description}
        </p>
      </div>

      <div
      className='
      flex items-center gap-4 justify-between
      '
      >
        <Button
        asChild={true}
        
        className="scale-anime-05 font-bold flex items-center gap-2"
        >
          <Link
          href={item?.githubLink}
          target="__blank"
          >
            <span className="font-bold">
            Github
            </span>
            <span>
            <FaGithub size={24}/> 
            </span>
          </Link>
        </Button>
        <Button
        asChild={true}
        variant={'secondary'}
        className="scale-anime-05 flex items-center gap-2 font-bold"
        >
          <Link
          href={item?.githubLink}
          target="__blank"
          >
            <span>
            Live Project
            </span>
            <span>
            <HiArrowTopRightOnSquare size={24}/> 
            </span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
