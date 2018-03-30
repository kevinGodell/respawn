'use strict'

const {spawn} = require('child_process')

const [, , ...args] = process.argv

const childProcessPath = args[0]

const childProcessParams = args.slice(1)

console.log(`child process path: ${childProcessPath}`)

console.log(`child process params: ${childProcessParams.join(' ')}`)

if (!childProcessPath) {
  console.error('must pass a path to a child process to spawn')
  process.exit(1)
}

const spawnChildProcess = () => {
  console.log(`spawning ${childProcessPath} ${childProcessParams.join(' ')}`)

  const childProcess = spawn(childProcessPath, childProcessParams, {stdio: ['ignore', 'inherit', 'inherit']})

  childProcess.once('error', (data) => {
    console.error(`unable to start child process ${childProcessPath}`)
    console.error(data)
    process.exit(1)
  })

  childProcess.once('exit', (code, signal) => {
    console.error(`child process ${childProcessPath} exited with code:${code} and signal:${signal}`)
    setTimeout(spawnChildProcess, 10000)
  })
}

spawnChildProcess()
