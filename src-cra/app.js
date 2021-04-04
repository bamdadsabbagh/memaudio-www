import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Player } from './components/player'
import { LayoutBackground } from './layout/layout-background'
import { Layout } from './layout/layout'
import { PageHome } from './page/page-home'
import { NewAudioPlayer } from './components/new-audio-player'

export function AppOld () {

    return (
        <>
            <div>
                <NewAudioPlayer/>
            </div>
            <div>
                <LayoutBackground/>
            </div>
            <div className="layer-main">
                <div className="grid">
                    <BrowserRouter>
                        <Switch>
                            <Layout>
                                <Route exact path="/home" component={PageHome}/>
                                <Route path="*" component={PageHome}/>
                            </Layout>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        </>
    )

}

export function App () {

    return (
        <div>
            test
        </div>
    )

}