import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

import { connect } from 'react-redux';

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.slice(props.index,props.offset).map((sushi) =>
            <Sushi
              sushi={sushi}
                key={sushi.id}
                  eatSushi={props.eatSushi}
                    eaten={props.eaten.filter(_ => _.id === sushi.id).length > 0 ? true : false } />)
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return state.sushi
}

export default connect(mapStateToProps)(SushiContainer)
