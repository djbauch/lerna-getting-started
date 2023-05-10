import * as React from 'react'
import type { Preview } from '@storybook/react'
import { library as iconLibrary} from '@fortawesome/fontawesome-svg-core'
import {
  faCheckSquare,
  faSquare,
  faChevronRight,
  faChevronDown,
  faPlusSquare,
  faMinusSquare,
  faFolder,
  faFolderOpen,
  faFile
} from '@fortawesome/free-solid-svg-icons'

import { Provider as ReduxProvider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

// Import custom CSS
import '../src/scss/styles.scss'
import 'react-toastify/dist/ReactToastify.css'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import ThemeProvider from 'react-bootstrap/ThemeProvider'

import '@fontsource/roboto'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

iconLibrary.add(
  faCheckSquare,
  faSquare,
  faChevronRight,
  faPlusSquare,
  faChevronDown,
  faMinusSquare,
  faFolder,
  faFolderOpen,
  faFile
)

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: 'Plum',
      values: [
        {
          name: 'White',
          value: '#FFFFFF'
        },
        {
          name: 'Honeydew',
          value: '#F0FFF0'
        },
        {
          name: 'AliceBlue',
          value: '#F0F8FF'
        },

        {
          name: 'Plum',
          value: '#DDA0DD'
        },

        {
          name: 'AntiqueWhite',
          value: '#FAEBD7'
        },
        {
          name: 'Aqua',
          value: '#00FFFF'
        },
        {
          name: 'LightGray',
          value: '#D3D3D3'
        },

        {
          name: 'Indigo',
          value: '#727cf5'
        },
        {
          name: 'Purple',
          value: '#6b5eae'
        },
        {
          name: 'Orange',
          value: '#fd7e14'
        },
        {
          name: 'Gray',
          value: '#748194'
        },
        {
          name: 'Red',
          value: '#FF0000'
        },
        {
          name: 'Black',
          value: '#000000'
        }
      ]
    },
    decorators: [
      (Story) => (

            <ThemeProvider>
              <ToastContainer />
              <Story />
            </ThemeProvider>

        )
    ]
  }
}

export default preview
