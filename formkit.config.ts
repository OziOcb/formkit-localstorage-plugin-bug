import '@formkit/themes/genesis'
import '@formkit/pro/genesis'
import '@formkit/addons/css/multistep'
import { createAutoAnimatePlugin, createLocalStoragePlugin } from '@formkit/addons'
import { createProPlugin, inputs } from '@formkit/pro'
import { defaultConfig } from '@formkit/vue'
import { genesisIcons } from "@formkit/icons"

// Put your Pro key here 'XXXXXXXXXXX'
const pro = createProPlugin('fk-XXXXXXXXXXX', inputs)

const config = defaultConfig({
  plugins: [
    pro,
    createAutoAnimatePlugin(),
    createLocalStoragePlugin()
  ],
  icons: genesisIcons,
})

export default config
