import { questions as allQuestions } from '../questions'
import { createContext, useEffect, useState } from 'react'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import {
  DeepPartial,
  DisplaySettings,
  FilterSettings,
  OrderSettings,
  PlayerSettings,
  defaultDisplaySettings,
  defaultFilterSettings,
  defaultOrderSettings,
  defaultPlayerSettings
} from '../header/settingsHelpers'
import { useServiceWorker } from '../useServiceWorker'
import { filter } from '../filterQuestions'
import { order } from '../orderQuestions'
import { PlayersContext } from '../usePlayers'

const preOrderedQuestions = allQuestions.sort( ( a, b ) => b.index - a.index )

export const ChangeOrderSettingsContext = createContext<( e: DeepPartial<OrderSettings> ) => void>( () => {} )
export const ChangeFilterSettingsContext = createContext<( e: DeepPartial<FilterSettings> ) => void>( () => {} )
export const FilteredAndOrderedQuestionsContext = createContext( preOrderedQuestions )

export const PlayerSettingsContext = createContext( defaultPlayerSettings )
export const ChangePlayerSettingsContext = createContext<( e: PlayerSettings ) => void>( () => {} )

export const DisplaySettingsContext = createContext( defaultDisplaySettings )
export const ChangeDisplaySettingsContext = createContext<( e: DisplaySettings ) => void>( () => {} )

export const Layout = ( ): JSX.Element => {
  useServiceWorker()

  const [orderedQuestions, setOrderedQuestions] = useState( order( defaultOrderSettings, preOrderedQuestions ) )
  const [filteredQuestions, setFilteredQuestions] = useState( orderedQuestions )
  const [filterSettings, setFilterSettings] = useState<DeepPartial<FilterSettings>>( defaultFilterSettings )
  const [displaySettings, setDisplaySettings] = useState( defaultDisplaySettings )
  const [playerSettings, setPlayerSettings] = useState( defaultPlayerSettings )

  const updateOrder = ( newOrder: DeepPartial<OrderSettings> ): void =>
    setOrderedQuestions( order( newOrder, preOrderedQuestions ) )

  useEffect( () => {
    setFilteredQuestions( filter( filterSettings, orderedQuestions ).slice() )
  }, [filterSettings, orderedQuestions] )

  return (
    <FilteredAndOrderedQuestionsContext.Provider value={filteredQuestions}>
      <PlayerSettingsContext.Provider value={playerSettings}>

        <ChangePlayerSettingsContext.Provider value={setPlayerSettings}>
          <ChangeOrderSettingsContext.Provider value={updateOrder} >
            <ChangeFilterSettingsContext.Provider value={setFilterSettings} >
              <ChangeDisplaySettingsContext.Provider value={setDisplaySettings}>
                <Header/>
              </ChangeDisplaySettingsContext.Provider>
            </ChangeFilterSettingsContext.Provider>
          </ChangeOrderSettingsContext.Provider>
        </ChangePlayerSettingsContext.Provider>

        <main>
          <DisplaySettingsContext.Provider value={displaySettings}>
            <PlayersContext>
              <Outlet/>
            </PlayersContext>
          </DisplaySettingsContext.Provider>
        </main>

        <Footer/>

      </PlayerSettingsContext.Provider>
    </FilteredAndOrderedQuestionsContext.Provider>
  )
}
