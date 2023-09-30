import React from 'react'
import Grid from './components/Grid'
import ItemVariant1 from './components/Grid/components/ItemVariant1'
import ItemVariant2 from './components/Grid/components/ItemVariant2'

const components = {
  "grid" : Grid,
  "ItemVariant1": ItemVariant1,
  "ItemVariant2": ItemVariant2
}

const DynamicElement = (props) => {
    const {
        type
    } = props
    const SelectedElement = components[type]
    return <SelectedElement {...props} />
}

export default DynamicElement;