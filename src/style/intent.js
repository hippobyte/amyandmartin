import { colors } from './colors'

const intentCompliment = {
  compliment: {
    color: colors["secondary-14"],
    background: colors["secondary-2"],
    borderColor: colors["secondary-2"],
    hover: {
      color: colors["secondary-14"],
      background: colors["secondary-2"],
      borderColor: colors["secondary-2"],
    }
  },
  complimentOutline: {
    color: colors["secondary-14"],
    background: colors.transparent,
    borderColor: colors["secondary-2"],
    hover: {
      color: colors["secondary-14"],
      background: colors.transparent,
      borderColor: colors["secondary-2"],
    }
  },
  complimentNone: {
    color: colors["secondary-14"],
    background: colors.transparent,
    borderColor: colors.transparent,
    hover: {
      color: colors["secondary-14"],
      background: colors.transparent,
      borderColor: colors.transparent
    }
  }
}

const intentDanger = {
  danger: {
    color: colors.white,
    background: colors.danger,
    borderColor: colors.danger,
    hover: {
      color: colors.white,
      background: colors.danger,
      borderColor: colors.danger
    }
  },
  dangerOutline: {
    color: colors.danger,
    background: colors.white,
    borderColor: colors.danger,
    hover: {
      color: colors.white,
      background: colors.danger,
      borderColor: colors.danger,
    }
  },
  dangerOutlineNone: {
    color: colors.danger,
    background: colors.white,
    borderColor: colors.danger,
    hover: {
      color: colors.white,
      background: colors.danger,
      borderColor: colors.danger,
    }
  }
}

const intentDark = {
  dark: {
    color: colors.white,
    background: colors["dark-7"],
    borderColor: colors["dark-8"],
    hover: {
      color: colors.white,
      background: colors["dark-10"],
      borderColor: colors["dark-10"],
    }
  },
  darkOutline: {
    color: colors["dark-8"],
    background: colors.transparent,
    borderColor: colors["dark-8"],
    hover: {
      color: colors["dark-8"],
      background: colors.transparent,
      borderColor: colors["dark-8"],
    }
  },
  darkOutlineNone: {
    color: colors["dark-8"],
    background: colors.transparent,
    borderColor: colors.transparent,
    hover: {
      color: colors["dark-10"],
      background: colors.transparent,
      borderColor: colors.transparent,
    }
  }
}

const intentLight = {
  light: {
    color: colors["lighy-8"],
    background: colors["light-2"],
    borderColor: colors["light-8"],
    hover: {
      color: colors["lighy-10"],
      background: colors["light-4"],
      borderColor: colors["light-10"],
    }
  },
  lightOutline: {
    color: colors["lighy-8"],
    background: colors.transparent,
    borderColor: colors["light-8"],
    hover: {
      color: colors["lighy-10"],
      background: colors["light-0"],
      borderColor: colors["light-10"],
    }
  },
  lightOutlineNone: {
    color: colors["light-8"],
    background: colors.transparent,
    borderColor: colors.transparent,
    hover: {
      color: colors["light-10"],
      background: colors.transparent,
      borderColor: colors.transparent,
    }
  }
}

const intentDefault = {
  default: {
    color: colors["dark-10"],
    background: colors["light-0"],
    borderColor: colors["light-2"],
    hover: {
      color: colors["dark-10"],
      background: colors["light-0"],
      borderColor: colors["light-2"]
    }
  },
}

const intentDisabled = {
  disabled: {
    color: colors["dark-10"],
    background: colors["dark"],
    borderColor: colors["dark"],
    hover: {
      color: colors["dark-10"],
      background: colors["dark"],
      borderColor: colors["dark"],
    }
  }
}

const intentNone = {
  none: {
    color: colors["dark-5"],
    background: colors.transparent,
    borderColor: colors["light-10"],
    placeholder: colors["dark-1"],
    hover: {
      color: colors["dark-2"],
      background: colors.transparent,
      borderColor: colors["light-10"],
    }
  },
  noneOutline: {
    color: colors["dark-10"],
    background: colors.transparent,
    borderColor: colors["dark-10"],
    hover: {
      color: colors["dark-10"],
      background: colors.transparent,
      borderColor: colors["dark-10"],
    }
  },
  noneOutlineNone: {
    color: colors["dark-10"],
    background: colors.transparent,
    borderColor: colors.transparent,
    hover: {
      color: colors["dark-10"],
      background: colors.transparent,
      borderColor: colors.transparent,
    }
  }
}

const intentPrimary = {
  primary: {
    color: colors.white,
    background: colors["primary-10"],
    borderColor: colors["primary-10"],
    hover: {
      color: colors.white,
      background: colors["primary-12"],
      borderColor: colors["primary-12"],
    }
  },
  primaryOutline: {
    color: colors["primary-10"],
    background: colors.transparent,
    borderColor: colors["primary-10"],
    hover: {
      color: colors["primary-12"],
      background: colors.transparent,
      borderColor: colors["primary-12"],
    }
  },
  primaryOutlineNone: {
    color: colors["primary-12"],
    background: colors.white,
    borderColor: colors.white,
    hover: {
      color: colors["primary-10"],
      background: colors.white,
      borderColor: colors.white,
    }
  },
}

const intentSuccess = {
  success: {
    color: colors.white,
    background: colors["success-9"],
    borderColor: colors["success-11"],
    hover: {
      color: colors.white,
      background: colors["success-9"],
      borderColor: colors["success-11"],
    }
  },
  successOutline: {
    color: colors["success-11"],
    background: colors.white,
    borderColor: colors["success-11"],
    hover: {
      color: colors["success-14"],
      background: colors["success-10"],
      borderColor: colors["success-14"],
    }
  },
  successOutlineNone: {
    color: colors["success-11"],
    background: colors.white,
    borderColor: colors.white,
    hover: {
      color: colors["success-14"],
    background: colors.white,
    borderColor: colors.white,
    }
  }
}

const intentUndefined = {
  undefined: {
    color: colors["primary-10"],
    background: colors.white,
    borderColor: colors["primary-10"],
    hover: {
      color: colors["primary-10"],
      background: colors["light-1"],
      borderColor: colors["primary-10"]
    }
  },
  undefinedOutline: {
    color: colors["primary-10"],
    background: colors.white,
    borderColor: colors["primary-10"],
    hover: {
      color: colors["primary-12"],
      background: colors.white,
      borderColor: colors["primary-12"],
    }
  }
}

const intentWarning = {
  warning: {
    color: colors.white,
    background: colors.warning,
    borderColor: colors.warning,
    hover: {
      color: colors.white,
      background: colors.warning,
      borderColor: colors.warning,
    }
  },
  warningOutline: {
    color: colors.warning,
    background: colors.transparent,
    borderColor: colors.warning,
    hover: {
      color: colors.warning,
      background: colors.transparent,
      borderColor: colors.warning,
    }
  },
  warningLight: {
    color: colors["warning-20"],
    background: colors["warning-0"],
    borderColor: colors["warning-3"],
    hover: {
      color: colors["warning-20"],
      background: colors["warning-0"],
      borderColor: colors["warning-3"],
    }
  },
  warningOutlineNone: {
    color: colors.warning,
    background: colors.transparent,
    borderColor: colors.transparent,
    hover: {
      color: colors.warning,
      background: colors.transparent,
      borderColor: colors.transparent,
    }
  }
}

const intentCollection = {
  color: colors.white,
  background: colors["accent-0"],
  borderColor: colors['accent-0'],
  hover: {
    color: colors.white,
    background: colors["accent-0"],
    borderColor: colors['accent-0']
  }
}

const intentConnector = {
  color: colors.white,
  background: colors["accent-1"],
  borderColor: colors['accent-1'],
  hover: {
    color: colors.white,
    background: colors["accent-1"],
    borderColor: colors['accent-1']
  }
}

const intentObject = {
  collection: intentCollection,
  Collection: intentCollection,
  COLLECTION: intentCollection,
  connector: intentConnector,
  Connector: intentConnector,
  CONNECTOR: intentConnector
}

export const intent = {
  ...intentCompliment,
  ...intentDanger,
  ...intentDark,
  ...intentDefault,
  ...intentDisabled,
  ...intentLight,
  ...intentNone,
  ...intentPrimary,
  ...intentUndefined,
  ...intentSuccess,
  ...intentWarning,
  ...intentObject,
  active: {
    ...intentNone.none
  },
  failure: {
    ...intentDanger.danger
  },
  pending: {
    ...intentCompliment.compliment
  },
  custom: {
    hover: {}
  }
}