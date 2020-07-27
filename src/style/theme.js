const colors = {
  brand: '#1273ea'
}

export const theme = {
  anchor: {
    fontWeight: 500,
    textDecoration: 'none',
    hover: {
      textDecoration: 'none'
    },
    extend: {
      boxShadow: 'none',
      transition: 'color 0.3s',
      '&:hover': {
        color: colors.brand
      }
    }
  },
  box: {
    extend: {
      transition: 'all 0.3s',
      '&.active.brand': {
        color: 'white',
        background: colors.brand
      }
    }
  },
  button: {
    border: {
      radius: '6px'
    }
  },
  global: {
    font: {
      family: 'Ubuntu',
    },
    colors: {
      brand: colors.brand
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