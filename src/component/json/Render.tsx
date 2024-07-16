import { iterate } from '@/utils/json-render';
import type { FC } from 'react';

interface IRender {
  json: object;
}

const Render: FC<IRender> = ({ json }) => {
  const jsonArray = iterate(json)
  
  return (
    <div className="">
      {jsonArray.map((data, index) => (
        <p
          key={index}
          style={{
            paddingLeft: `${data.indent * 32}px`
          }}
        >{data.line}</p>
      ))}
    </div>
  )
}

export default Render;