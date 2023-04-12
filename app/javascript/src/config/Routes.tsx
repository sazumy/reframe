import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Chat } from '../pages/Chat'
import { Diagnose } from '../pages/Diagnose'
import { Index } from '../pages/Index'

type Props = object

// type State = {}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route exact path="/chat">
        <Chat />
      </Route>
      <Route exact path="/">
        <Index />
      </Route>
      <Route path="/diagnose">
        <Diagnose />
      </Route>
    </Switch>
  )
}
