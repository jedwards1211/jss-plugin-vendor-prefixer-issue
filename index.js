const React = require('react')
const {renderToString} = require('react-dom/server')
const {JssProvider, SheetsRegistry, createUseStyles} = require('react-jss')

const styles = {
  '@keyframes spinner-rotation': {
    from: {transform: 'rotate(0deg)'},
    to: {transform: 'rotate(360deg)'},
  },
  spinner: {
    animation: [
      '$spinner-rotation linear infinite 1s',
    ],
  },
}

const useStyles = createUseStyles(styles)

function Spinner(props) {
  const classes = useStyles()
  return React.createElement('div', {className: classes.spinner})
}

const sheets = new SheetsRegistry()

renderToString(
  React.createElement(
    JssProvider,
    {
      registry: sheets,
      children: React.createElement(Spinner)
    }
  )
)

console.log('INPUT:\n', JSON.stringify(styles, null, 2))

const css = sheets.toString()
console.log('OUTPUT:\n', css)

if (typeof document !== 'undefined') {
  const el = document.createElement('pre')
  el.innerText = `INPUT:\n${JSON.stringify(styles, null, 2)}\n\nOUTPUT:\n${css}`
  document.body.appendChild(el)
}