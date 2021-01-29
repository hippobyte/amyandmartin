const colorizeTheme = ({ colors, prefix, defaultIndexColor, indexStart = 0, indexFinish = 20, indexOffset = 0 }) => {
  const keys = Object.keys(colors)
  const obj = defaultIndexColor ? { [prefix]: colors[defaultIndexColor] } : {}

  keys.forEach((item, index) => {
    if (index >= indexStart && index <= indexFinish) {
      const keyIndex = index - indexOffset 
      const keyName = prefix + '-' + keyIndex
      obj[keyName] = colors[item]
    } 
  })

  return obj
}

const accent = {
  "0":  "#74A4A4",
  "10": "#7e73a3",
  "20": "#5774AE",
  "30": "#87869E",
  "40": "#68B091",
}

const compliment = {
  "0":   "#C9E8F8",
  "10":  "#B6E1F6",
  "20":  "#A4D9F4",
  "30":  "#91D2F2",
  "40":  "#7FCAF0",
  "50":  "#6DC3EE",
  "60":  "#5BBBEC",
  "70":  "#48B4EA",
  "80":  "#36ACE7",
  "90":  "#24A5E5",
  "100": "#1A9BDB",
  "110": "#188EC9",
  "120": "#1581B7",
  "130": "#1374A4",
  "140": "#116792",
  "150": "#0F5A80",
  "160": "#0D4D6D",
  "170": "#0B405B",
  "180": "#093348",
  "190": "#072636",
  "200": "#051924"
}

const grays = {
  "0": "#F7F9FA",
  "10": "#EFF3F5",
  "20": "#E8EDF1",
  "30": "#E0E8EC",
  "40": "#D8E2E7",
  "50": "#D1DCE3",
  "60": "#C9D6DE",
  "70": "#C1D1D9",
  "80": "#BACBD5",
  "90": "#B2C5D0",
  "100": "#ABC0CC",
  "110": "#9CAFBA",
  "120": "#8C9EA7",
  "130": "#7D8C95",
  "140": "#6D7B82",
  "150": "#5E6970",
  "160": "#4E585D",
  "170": "#3F464B",
  "180": "#2F3538",
  "190": "#202326",
  "200": "#101213"
}

const danger = {
  "0":   "#FFEFEB",
  "10":  "#FFDED6",
  "20":  "#FFD0C2",
  "30":  "#FFC0AD",
  "40":  "#FFB199",
  "50":  "#FFA185",
  "60":  "#FF9270",
  "70":  "#FF825C",
  "80":  "#FF7247",
  "90":  "#FF6333",
  "100": "#FF531F",
  "110": "#FF430A",
  "120": "#F53900",
  "130": "#E03400",
  "140": "#CC3000",
  "150": "#B82B00",
  "160": "#A32600",
  "170": "#8F2100",
  "180": "#7A1D00",
  "190": "#661800",
  "200": "#521300"
}

const primary = {
  "0":   "#D9EBFC",
  "10":  "#C7E1FA",
  "20":  "#B4D7F8",
  "30":  "#A1CDF7",
  "40":  "#8EC4F6",
  "50":  "#1D88ED",
  "60":  "#1173D0",
  "70":  "#0F69BD",
  "80":  "#0E5EAA",
  "90":  "#0B4983",
  "100": "#0C4983",
  "110": "#0A3F70",
  "120": "#08345E",
  "130": "#072A4B",
  "140": "#051F38",
  "150": "#051F38",
  "160": "#051F38",
  "170": "#051F38",
  "180": "#051F38",
  "190": "#051F38",
  "200": "#051F38"
}

const secondary = {
  "0":   "#EEE4FA",
  "10":  "#ECE1FA",
  "20":  "#EBDEFA",
  "30":  "#E1CEF8",
  "40":  "#D7BEF6",
  "50":  "#CDAEF4",
  "60":  "#C49DF2",
  "70":  "#BA8DF0",
  "80":  "#B07DEE",
  "90":  "#9C5DEA",
  "100": "#934DE8",
  "110": "#8646D3",
  "120": "#7940BE",
  "130": "#6B39A9",
  "140": "#5E3294",
  "150": "#512A7F",
  "160": "#43236A",
  "170": "#361C55",
  "180": "#291540",
  "190": "#1B0E2B",
  "200": "#190D28"
}

const success = {
  "0":   "#EEF6EC",
  "10":  "#DDEED9",
  "20":  "#CDE5C6",
  "30":  "#BCDDB4",
  "40":  "#ACD4A1",
  "50":  "#9BCC8E",
  "60":  "#8BC37B",
  "70":  "#7ABB69",
  "80":  "#6AB256",
  "90":  "#59AA43",
  "100": "#49A231",
  "110": "#43942D",
  "120": "#3C8529",
  "130": "#367624",
  "140": "#2F6820",
  "150": "#28591B",
  "160": "#224A17",
  "170": "#1B3B12",
  "180": "#142D0E",
  "190": "#0E1E09",
  "200": "#070F05"
}

const warning = {
  "0":   "#FCEEEE",
  "10":  "#F8DDDD",
  "20":  "#F5CCCC",
  "30":  "#F2BBBB",
  "40":  "#EEAAAA",
  "50":  "#EB9898",
  "60":  "#E88787",
  "70":  "#E57676",
  "80":  "#E26565",
  "90":  "#DE5353",
  "100": "#DB4343",
  "110": "#CE2727",
  "120": "#BC2424",
  "130": "#AB2121",
  "140": "#9A1D1D",
  "150": "#891A1A",
  "160": "#781717",
  "170": "#671414",
  "180": "#551111",
  "190": "#440D0D",
  "200": "#330A0A"
}

export const colors = {
  "transparent": "#ffffff00",

  "black":    "#000000",
  "white":    "#ffffff",
  "green":    "#00B84D",
  "red":      "#E32926",
  "yellow":   "#ffc400",

  text: {
    dark:     "#ffffff",
    light:    "#121212"
  },

  ...colorizeTheme({ 
    colors: primary, 
    prefix: 'brand', 
    defaultIndexColor: "100" 
  }),

  ...colorizeTheme({ 
    colors: danger, 
    prefix: 'danger', 
    defaultIndexColor: "100" 
  }),

  ...colorizeTheme({ 
    colors: grays, 
    prefix: 'dark', 
    defaultIndexColor: "110",
    indexStart: 11,
    indexFinish: 20,
    indexOffset: 10,
  }),

  ...colorizeTheme({ 
    colors: accent, 
    prefix: 'accent', 
  }),

  ...colorizeTheme({ 
    colors: compliment, 
    prefix: 'compliment', 
    defaultIndexColor: "100" 
  }),

  ...colorizeTheme({ 
    colors: grays, 
    prefix: 'light', 
    defaultIndexColor: "0",
    indexStart: 0,
    indexFinish: 10
  }),

  ...colorizeTheme({ 
    colors: primary, 
    prefix: 'primary', 
    defaultIndexColor: "100" 
  }),

  ...colorizeTheme({ 
    colors: secondary, 
    prefix: 'secondary', 
    defaultIndexColor: "100" 
  }),

  ...colorizeTheme({ 
    colors: success, 
    prefix: 'success', 
    defaultIndexColor: "100" 
  }),

  ...colorizeTheme({ 
    colors: warning, 
    prefix: 'warning', 
    defaultIndexColor: "100" 
  })
}
