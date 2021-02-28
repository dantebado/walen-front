import React, { useEffect, useState } from 'react'
import { Address } from '../../interface/misc.model'

export default function AddressForm(props: {value: Address, onChange: ((v: any) => any)}) {
  const [address, setAddress] = useState({...props.value})

  const inputHandler = (field: string, value: any) => {
    setAddress({
      ...address,
      [field]: value
    })
  }

  useEffect(() => {
    if (props.onChange) {
      props.onChange(address)
    }
  }, [address])

  return (
    <div>
      <div className="sm:w-3/4 mx-auto pl-2 pr-2 sm:pr-0">
        <input type="text" placeholder="Dirección" className="px-2 py-2 w-full"
            value={address.address_line}
            onChange={(e) => inputHandler('address_line', e.target.value)} />
      </div>
      <div className="flex flex-row items-center sm:w-3/4 sm:mx-auto">
        <div className="w-1/2 sm:w-3/4 p-2">
          <input type="text" placeholder="Piso / Dpto." className="px-2 py-2 w-full"
              value={address.floor_apt}
              onChange={(e) => inputHandler('floor_apt', e.target.value)} />
        </div>
        <div className="w-1/2 sm:w-1/4 px-2 sm:px-0 py-2">
          <input type="text" placeholder="Código Postal" className="px-2 py-2 w-full"
              value={address.postal_code}
              onChange={(e) => inputHandler('postal_code', e.target.value)} />
        </div>
      </div>
      <div className="flex flex-row items-center sm:w-3/4 sm:mx-auto pb-2">
        <div className="w-1/2 px-2">
          <input type="text" placeholder="Ciudad" className="w-full px-2 py-2"
            value={address.city}
            onChange={(e) => inputHandler('city', e.target.value)} />
        </div>
        <div className="w-1/2 px-2 sm:px-0">
          <input type="text" placeholder="Estado / Provincia" className="w-full px-2 py-2"
            value={address.state}
            onChange={(e) => inputHandler('state', e.target.value)} />
        </div>
      </div>
    </div>
  )
}
