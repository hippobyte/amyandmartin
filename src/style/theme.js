import { colors } from './colors'
import { intent } from './intent'

export const theme = {
  anchor: {
    fontWeight: 500,
    textDecoration: 'none',
    hover: {
      textDecoration: 'none'
    },
    extend: {
      boxShadow: 'none',
      transition: 'color 0.15s',
      '& .language.active': {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors["brand"],
        background: colors["light-0"]
      },
      '&:hover': {
        color: colors.brand,
        '& .language': {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: colors["brand"],
          background: colors["light-0"]
        }
      },
      '& .language': {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors["dark-1"]
      },
    }
  },
  box: {
    extend: {
      transition: 'all 0.15s',
      '&.active.brand': {
        color: 'white',
        background: colors.brand
      }
    }
  },
  button: {
    border: {
      radius: '6px'
    },
    intent: intent
  },
  global: {
    font: {
      family: "'Dosis', sans-serif;"
    },
    colors: colors,
    focus: {
      outline: 'none !important',
      boxShadow: 'none !important'
    },
    input: {
      extend: {
        fontFamily: "'Montserrat', sans-serif;"
      }
    }
  },
  heading: {
    extend: {
      letterSpacing: '2.5px'
    },
    level: {
      '1': {
        font: {
          family: 'Poiret One',
          weight: 700
        },
        small: {
          size: '34px',
          height: '40px',
          maxWidth: '816px'
        },
        medium: {
          size: '50px',
          height: '56px',
          maxWidth: '1200px'
        },
        large: {
          size: '82px',
          height: '88px',
          maxWidth: '1968px'
        },
        xlarge: {
          size: '114px',
          height: '120px',
          maxWidth: '2736px'
        }
      },
      '2': {
        font: {
          family: 'Montserrat',
          weight: 400
        },
        small: {
          size: '20px',
          height: '20px',
          maxWidth: '816px'
        },
        medium: {
          size: '26px',
          height: '26px',
          maxWidth: '1200px'
        },
        large: {
          size: '82px',
          height: '88px',
          maxWidth: '1968px'
        },
        xlarge: {
          size: '114px',
          height: '120px',
          maxWidth: '2736px'
        }
      }
    }
  },
  layer: {
    overlay: {
      background: "rgba(0, 0, 0, 0.8)"
    }
  },
  paragraph: {
    "xsmall": {
      "size": "14px",
      "height": "20px",
      "maxWidth": "336px"
    },
    "small": {
      "size": "18px",
      "height": "24px",
      "maxWidth": "432px"
    },
    "medium": {
      "size": "22px",
      "height": "30px",
      "maxWidth": "528px"
    },
    "large": {
      "size": "26px",
      "height": "34px",
      "maxWidth": "624px"
    },
    "xlarge": {
      "size": "34px",
      "height": "42px",
      "maxWidth": "816px"
    },
    "xxlarge": {
      "size": "42px",
      "height": "50px",
      "maxWidth": "1024px"
    }
  },
  text: {
    "xsmall": {
      "size": "14px",
      "height": "20px",
      "maxWidth": "336px"
    },
    "small": {
      "size": "18px",
      "height": "24px",
      "maxWidth": "432px"
    },
    "medium": {
      "size": "22px",
      "height": "30px",
      "maxWidth": "528px"
    },
    "large": {
      "size": "26px",
      "height": "34px",
      "maxWidth": "624px"
    },
    "xlarge": {
      "size": "34px",
      "height": "42px",
      "maxWidth": "816px"
    },
    "xxlarge": {
      "size": "42px",
      "height": "50px",
      "maxWidth": "1024px"
    }
  }
}