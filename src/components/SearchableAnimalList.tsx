'use client'

import Image from 'next/image'
import { search } from '../assets'

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className='search-bar'>
      <Image src={search} alt="Search" width={20} height={20} />
      <input 
        type="text" 
        placeholder="Rechercher un animal..." 
        className='search-input'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
