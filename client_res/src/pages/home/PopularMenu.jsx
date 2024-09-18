
import { useEffect, useState } from 'react';
import { SectionTitle } from '../shared/SectionTitle';
import { MenuItem } from '../shared/MenuItem';

export const PopularMenu = () => {
  const [menu, setmenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'popular');
        setmenu(popularItems);
      })
  }, [])
  return (
    <section>
      <SectionTitle heading="From Our Menu" subHeading="Popular Items" />
      <div className='grid md:grid-cols-2 gap-4'>
        {
          menu.map(item => <MenuItem key={item._id} item={item} />)
        }
      </div>
    </section>
  )
}
