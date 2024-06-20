import { type Education } from '@/models/education'

const education: Education[] = [
  {
    institute: 'Alura',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GNQhrlzrEWBt4hyfc5Nz5VI_FA5n4k0Sbg&s',
    degree: 'Education Backend',
    from: new Date('2023-03-01'),
    to: new Date('2023-09-01'),
  },
  {
    institute: 'Amazonia University',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GNQhrlzrEWBt4hyfc5Nz5VI_FA5n4k0Sbg&s',
    degree: "Bachelor's Degree in English",
    from: new Date('2018-02-01'),
    to: new Date('2022-11-01'),
  },
]

export default education
