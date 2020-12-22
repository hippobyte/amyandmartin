import { colors } from './colors'

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
  },
  global: {
    font: {
      family: "'Montserrat', sans-serif;",
    },
    colors: colors,
    focus: {
      outline: 'none !important',
      boxShadow: 'none !important'
    }
  },
  heading: {
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
      }
    }
  }
}