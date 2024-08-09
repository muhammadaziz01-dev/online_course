import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@layout', replacement: '/src/layout' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@interface', replacement: '/src/types/interface' },
      { find: '@ui', replacement: '/src/components/ui' },

      { find: '@modals', replacement: '/src/components/modals' },
      { find: '@drawers', replacement: '/src/components/drawers' },

      { find: '@cookie', replacement: '/src/utils/cookie.ts' },
      {find: "@service-auth" , replacement: "/src/service/auth"},

      { find: '@stor', replacement: '/src/stor'},

    ]
  }
})
