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