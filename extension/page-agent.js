import ceciPageAgent from '../src/page-agent.js'

window.run = ceciPageAgent()

window.run((a) => {
  return new Promise((resolve, reject) => {
    resolve(a)
  })
}, [55]).then(console.log)
