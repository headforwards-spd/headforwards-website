import React, {Fragment} from 'react'
import getComponent from '../../../helpers/get-component'

export default DesignPageTemplate

function DesignPageTemplate ({components=[]}) {
  return (
    <Fragment>
      {!!components && components.map((component, key) => getComponent({ ...component, key }))}
    </Fragment>
  )
}
