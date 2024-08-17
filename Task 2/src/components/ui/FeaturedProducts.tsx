import React from 'react'
import FeaturedProductsCard from './FeaturedProductsCard'
import SectionHeading from './SectionHeading'
import apple from '../../assets/images/apple juice.png'
import rising from '../../assets/images/rising crust.png'
import orange from '../../assets/images/simply orange.png'
import cali from '../../assets/images/california.png'
import melon from '../../assets/images/melon.png'
import toilet from '../../assets/images/toilet paper.png'

export default function FeaturedProducts() {
  const products=[
    {'name': '100 Percent Apple Juice – 64 fl oz Bottle','discount': 75,'type': 'organic', 'org_price': 0.5,'new_price': 1.99,'img': apple},
    {'name': 'Great Value Rising Crust Frozen Pizza, Supreme','discount': 11,'type': 'cold sale', 'org_price': 8.99,'new_price': 9.99,'img': rising},
    {'name': 'Simply Orange Pulp Free Juice – 52 fl oz','discount': 41,'type': null, 'org_price': 2.45,'new_price': 4.13,'img': orange},
    {'name': 'California Pizza Kitchen Margherita, Crispy Thin Crus…','discount': 21,'type': 'cold sale', 'org_price': 11.77,'new_price': 14.77,'img': cali},
    {'name': 'Cantaloupe Melon Fresh Organic Cut','discount': 59,'type': 'organic', 'org_price': 1.25,'new_price': 2.98,'img': melon},
    {'name': 'Angel Soft Toilet Paper, 9 Mega Rolls','discount': 18,'type': null, 'org_price': 14.12,'new_price': 17.12,'img': toilet}
  ]
  return (
    <section className='px-[6vw] mb-6'>
      <SectionHeading t1='featured products' t2='Do not miss the current offers until the end of March.' />
      <ul className='flex flex-wrap border-2 border-gray-200 border-b-0'>
        {
          products.map((product,index) => (
            <FeaturedProductsCard product={product} key={index} />
          ))
        }
      </ul>
    </section>
  )
}
