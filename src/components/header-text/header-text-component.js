import React from 'react'
import { flexRow, flexGrow, noGrow } from './header-text-component.module.scss'

export function HeaderText({ title, text, twoColumns }) {
  const flexGrowClass = twoColumns ? flexGrow : noGrow
  return (
    <div className={`${flexRow} ${flexGrowClass}`}>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  )
}
