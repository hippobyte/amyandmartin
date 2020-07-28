
import React from 'react'
import { Markdown } from 'grommet'

const MarkdownContent = ({ children }) => (
  <Markdown>
    {children}
  </Markdown>
)

// const MarkdownTheme = styled(Box)(props => ({
//   h2: {
//     fontSize: '1.8em',
//     fontWeight: '900',
//     marginBottom: '0.9em',
//     color: props.theme.global.colors.black,
//   },
//   h3: {
//     fontSize: '1.4em',
//     fontWeight: '600',
//   },
//   h4: {
//     fontSize: '1.25em',
//     fontWeight: '400',
//   },
//   h5: {
//     fontSize: '1.055em',
//     fontWeight: '400',
//   },
//   h6: {
//     fontSize: '1.055em',
//     fontWeight: '600',
//     marginBottom: '0.5em',
//   },
//   em: {
//     background: props.theme.global.colors["light-2"],
//     fontStyle: 'normal',
//     fontWeight: '500',
//     color: props.theme.global.colors["accent-2"],
//     paddingLeft: '6px',
//     paddingRight: '6px',
//     letterSpacing: '0.4px',
//     borderRadius: '4px'
//   },
//   [['ul', 'ol']]: {
//     marginLeft: '1.45em'
//   },
//   li: {
//     marginBottom: '.725em'
//   },
//   [['p', 'li']]: {
//     fontSize: '1.4em',
//     lineHeight: '1.7em'
//   },
//   // style all anchors with an href and no prior classesh2
//   // this helps avoid anchors with names and styled buttons
//   'a[href]:not([class])': {
//     color: props.theme.global.colors.brand,
//     textDecoration: 'none',
//     ':hover': {
//       textDecoration: 'underline'
//     },
//     code: {
//       color: 'inherit'
//     }
//   },
//   [['h1', 'h2', 'h3', 'h4', 'h5', 'h6']]: {
//     fontFamily: '"Muli", sans-serif',
//     fontStyle: 'initial',
//     marginTop: '0px',
//     textTransform: "initial",
//     ':not(:hover) a svg': {
//       visibility: 'hidden'
//     },
//     code: {
//       whiteSpace: 'normal'
//     },
//     'a.anchor': {
//       ':hover': {
//         opacity: '.9'
//       },
//       svg: {
//         fill: props.theme.global.colors.brand
//       },
//       '&.before': {
//         top: 'auto'
//       }
//     }
//   },
//   '*:not(style) +': {
//     [['h2', 'h3', 'h4']]: {
//       marginTop: '32px'
//     }
//   },
//   img: {
//     display: 'block',
//     maxWidth: '100%',
//     margin: '0 auto'
//   },
//   '.mermaid svg': {
//     maxWidth: '100%'
//   },
//   blockquote: {
//     margin: '0px',
//     borderLeftWidth: '3px',
//     borderLeftColor: props.theme.global.colors.brand,
//     paddingTop: '12px',
//     paddingBottom: '12px',
//     paddingLeft: '20px',
//     paddingRight: '12px',
//     marginBottom: '32px',
//     borderTopRightRadius: '4px',
//     borderBottomRightRadius: '4px',
//     background: props.theme.global.colors['light-1'],
//     p: {
//       color: props.theme.global.colors['dark-1'],
//       fontSize: '0.9em',
//       lineHeight: '1.4em',
//       fontStyle: 'normal'
//     }
//   },
//   table: {
//     borderRadius: '4px',
//     overflow: 'hidden',
//     thead: {
//       color: props.theme.global.colors.white,
//       background: props.theme.global.colors.brand,
//     },
//     [['td', 'th']]: {
//       padding: '.3em',
//       paddingLeft: '1em',
//       fontSize: '1em'
//     },
//   },
//   [[
//     "div.gatsby-highlight[data-language='alert-']",
//     "div.gatsby-highlight[data-language='alert-warn']",
//     "div.gatsby-highlight[data-language='alert-danger']",
//     "div.gatsby-highlight[data-language='alert-success']"
//   ]]: {
//     pre: {
//       fontSize: '1.025em',
//       fontWeight: '600',
//       lineHeight: '1.6em',
//       borderRadius: '8px',
//       padding: '12px',
//       borderWidth: '1px',
//       borderStyle: "solid",
//       color: props.theme.global.colors["dark-5"],
//       background: props.theme.global.colors["light-0"],
//       borderColor: props.theme.global.colors["light-3"],
//       code: {
//         fontFamily: '"Muli", sans-serif',
//         fontSize: '1em',
//         lineHeight: '1em',
//       }
//     }
//   },
//   "div.gatsby-highlight[data-language='alert-warn']": {
//     pre: {
//       borderWidth: '1px',
//       borderStyle: "solid",
//       borderColor: props.theme.global.colors["status-warning"],
//       backgroundColor: props.theme.global.colors["status-warning"] + '10',
//     }
//   },
//   "div.gatsby-highlight[data-language='alert-danger']": {
//     pre: {
//       borderWidth: '1px',
//       borderStyle: "solid",
//       borderColor: props.theme.global.colors["status-error"],
//       backgroundColor: props.theme.global.colors["status-error"] + '10',
//     }
//   },
//   "div.gatsby-highlight[data-language='alert-success']": {
//     pre: {
//       borderWidth: '1px',
//       borderStyle: "solid",
//       borderColor: props.theme.global.colors["status-ok"],
//       backgroundColor: props.theme.global.colors["status-ok"] + '10',
//     }
//   },
//   'div.gatsby-highlight': {
//     pre: {
//       background: props.theme.global.colors["light-0"],
//       padding: '12px',
//       paddingRight: '12px',
//       whiteSpace: 'normal'
//     }
//   }
// }))

export default MarkdownContent