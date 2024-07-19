const parseToCurrency = (m) => {
    // in production app, the parameter for NumberFormat is based on user location/region data
    let usDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return usDollar.format(m)
}

const parseToPercentage = (p) => p

// in production app, money is parsed as a number from the server, so I assume we are going to use Intl.NumberFormat
export const allRegion = {
    netAssets: parseToCurrency(74769618),
    grossAssets: parseToCurrency(78789618),
    liabilities: parseToCurrency(4020000),
    lastDayPercentageGain: parseToPercentage(0.1),
    portfolioPerformance: {
        all: {
            month: {
                nominal: parseToCurrency(401321),
                percentage: 0.5
            },
            quarter: {
                nominal: parseToCurrency(814603),
                percentage: 1.1
            },
            fy: {
                nominal: parseToCurrency(3285372),
                percentage: 4.6
            }
        },
        realisedGains: {
            month: {
                nominal: parseToCurrency(0),
                percentage: 0,
            },
            quarter: {
                nominal: parseToCurrency(500000),
                percentage: 0.7
            },
            fy: {
                nominal: parseToCurrency(1219000),
                percentage: 1.7
            }
        },
        unrealisedGains: {
            month: {
                nominal: parseToCurrency(401321),
                percentage: 0.5
            },
            quarter: {
                nominal: parseToCurrency(314603),
                percentage: 0.4
            },
            fy: {
                nominal: parseToCurrency(2066372),
                percentage: 2.9
            }
        }
    },
    grossIncome: {
        quarter: {
            grossIncome: parseToCurrency(500000),
            lastYearPercentageGain: parseToPercentage(4.4),
            lessExpenses: parseToCurrency(300000),
            netIncome: parseToCurrency(200000),
        },
        fy: {
            grossIncome: parseToCurrency(1210000),
            lastYearPercentageGain: parseToPercentage(4.4),
            lessExpenses: parseToCurrency(608950),
            netIncome: parseToCurrency(601050),
        }
    }
}

export const australiaRegion = {
    netAssets: parseToCurrency(49111254),
    grossAssets: parseToCurrency(52131254),
    liabilities: parseToCurrency(3020000),
    lastDayPercentageGain: parseToPercentage(0.2),
    portfolioPerformance: {
        all: {
            month: {
                nominal: parseToCurrency(112231),
                percentage: 0.2
            },
            quarter: {
                nominal: parseToCurrency(551294),
                percentage: 1.1
            },
            fy: {
                nominal: parseToCurrency(2380010),
                percentage: 5.1
            }
        },
        realisedGains: {
            month: {
                nominal: parseToCurrency(0),
                percentage: 0,
            },
            quarter: {
                nominal: parseToCurrency(500000),
                percentage: 1
            },
            fy: {
                nominal: parseToCurrency(1010000),
                percentage: 2.2
            }
        },
        unrealisedGains: {
            month: {
                nominal: parseToCurrency(112231),
                percentage: 0.2
            },
            quarter: {
                nominal: parseToCurrency(51294),
                percentage: 0.1
            },
            fy: {
                nominal: parseToCurrency(1370010),
                percentage: 2.9
            }
        }
    },
    grossIncome: {
        quarter: {
            grossIncome: parseToCurrency(500000),
            lastYearPercentageGain: parseToPercentage(4.4),
            lessExpenses: parseToCurrency(250000),
            netIncome: parseToCurrency(250000),
        },
        fy: {
            grossIncome: parseToCurrency(1010000),
            lastYearPercentageGain: parseToPercentage(4.4),
            lessExpenses: parseToCurrency(500000),
            netIncome: parseToCurrency(510000),
        }
    }
}

export const usaRegion = {
    netAssets: parseToCurrency(25407631),
    grossAssets: parseToCurrency(26407631),
    liabilities: parseToCurrency(1000000),
    lastDayPercentageGain: parseToPercentage(0.15),
    portfolioPerformance: {
        all: {
            month: {
                nominal: parseToCurrency(258876),
                percentage: 1
            },
            quarter: {
                nominal: parseToCurrency(259263),
                percentage: 1
            },
            fy: {
                nominal: parseToCurrency(897526),
                percentage: 3.7
            }
        },
        realisedGains: {
            month: {
                nominal: parseToCurrency(0),
                percentage: 0,
            },
            quarter: {
                nominal: parseToCurrency(0),
                percentage: 0
            },
            fy: {
                nominal: parseToCurrency(200000),
                percentage: 0.8
            }
        },
        unrealisedGains: {
            month: {
                nominal: parseToCurrency(258876),
                percentage: 1
            },
            quarter: {
                nominal: parseToCurrency(259263),
                percentage: 1
            },
            fy: {
                nominal: parseToCurrency(617526),
                percentage: 2.5
            }
        }
    },
    grossIncome: {
        quarter: {
            grossIncome: parseToCurrency(0),
            lastYearPercentageGain: parseToPercentage(4.4),
            lessExpenses: parseToCurrency(0),
            netIncome: parseToCurrency(0),
        },
        fy: {
            grossIncome: parseToCurrency(200000),
            lastYearPercentageGain: parseToPercentage(4.4),
            lessExpenses: parseToCurrency(100000),
            netIncome: parseToCurrency(100000),
        }
    }
}

export const europeRegion = {
    netAssets: parseToCurrency(250733),
    grossAssets: parseToCurrency(250733),
    liabilities: parseToCurrency(0),
    lastDayPercentageGain: parseToPercentage(0.32),
    portfolioPerformance: {
        all: {
            month: {
                nominal: parseToCurrency(-2012),
                percentage: -0.8
            },
            quarter: {
                nominal: parseToCurrency(4046),
                percentage: 1.6
            },
            fy: {
                nominal: parseToCurrency(7836),
                percentage: 3.2
            }
        },
        realisedGains: {
            month: {
                nominal: parseToCurrency(0),
                percentage: 0,
            },
            quarter: {
                nominal: parseToCurrency(0),
                percentage: 0
            },
            fy: {
                nominal: parseToCurrency(9000),
                percentage: 3.7
            }
        },
        unrealisedGains: {
            month: {
                nominal: parseToCurrency(-2012),
                percentage: -0.8
            },
            quarter: {
                nominal: parseToCurrency(4046),
                percentage: 1
            },
            fy: {
                nominal: parseToCurrency(-1164),
                percentage: -0.5
            }
        }
    },
    grossIncome: {
        quarter: {
            grossIncome: parseToCurrency(0),
            lastYearPercentageGain: parseToPercentage(4.4),
            lessExpenses: parseToCurrency(0),
            netIncome: parseToCurrency(0),
        },
        fy: {
            grossIncome: parseToCurrency(9000),
            lastYearPercentageGain: parseToPercentage(4.4),
            lessExpenses: parseToCurrency(8950),
            netIncome: parseToCurrency(50),
        }
    }
}