import React from 'react'

export const AppContext = React.createContext({
  // 网络环境 内网 inner 外网 outter
  netEnv: 'inner'
})
