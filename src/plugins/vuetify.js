import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        colors: {
          background: '#2274A5',
          surface: '#1A1A2E',
          primary: '#7FDBFF',
          secondary: '#0A2463',
          accent: '#FFA700',
          error: '#FF6B6B',
          info: '#4ECDC4',
          success: '#2EC4B6',
          warning: '#FF9F1C',
          'on-background': '#E0E0E0',
          'on-surface': '#CCCCCC',
        },
      },
    },
  },
})
