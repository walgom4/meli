const referenceValues = {
  header: 56,
  spacing: 2,
  weight: 100
}
const defaultTheme = {
  bp: { // breakpoints
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  height: {
    header: `${referenceValues.header}px`,
    section: `calc(100vh - ${referenceValues.header}px)`
  },
  spacing: { // aplies to margins, paddings
    x1: `${referenceValues.spacing * 1}px`,
    x2: `${referenceValues.spacing * 2}px`,
    x3: `${referenceValues.spacing * 3}px`,
    x4: `${referenceValues.spacing * 4}px`,
    x5: `${referenceValues.spacing * 5}px`,
    x6: `${referenceValues.spacing * 6}px`,
    x7: `${referenceValues.spacing * 7}px`,
    x8: `${referenceValues.spacing * 8}px`,
    x9: `${referenceValues.spacing * 9}px`,
    x10: `${referenceValues.spacing * 10}px`,
    x11: `${referenceValues.spacing * 11}px`,
    x12: `${referenceValues.spacing * 12}px`,
    x13: `${referenceValues.spacing * 13}px`,
    x14: `${referenceValues.spacing * 14}px`,
    x15: `${referenceValues.spacing * 15}px`,
    x16: `${referenceValues.spacing * 16}px`
  },
  font_size: {
    breadcrumb: '14px',
    condition: '14px',
    description: '18px',
    paragraph: '16px',
    place: '12px',
    price: '24px',
    priceDetail: '46px',
    priceDetailDecimal: '23px',
    primaryButton: '16px',
    title: '28px',
    titleDetail: '24px'
  },
  font_weight: {
    x1: `${referenceValues.weight * 1}`, // 100
    x2: `${referenceValues.weight * 2}`, // 200
    x3: `${referenceValues.weight * 3}`, // 300
    x4: `${referenceValues.weight * 4}`, // 400
    x5: `${referenceValues.weight * 5}`, // 500
    x6: `${referenceValues.weight * 6}`, // 600
    x7: `${referenceValues.weight * 7}`, // 700
    x8: `${referenceValues.weight * 8}`, // 800
    x9: `${referenceValues.weight * 9}` // 900
  },
  primary: [
    '#ffe600', // 0
    '#333333', // 1
    '#999999', // 2
    '#eeeeee', // 3
    '#1ed760', // 4
    '#3483fa' // 5
  ],
  warning: [
    '#F29100' // 0: Warning
  ],
  success: [
    '#00BB5D' // 0: Success
  ],
  error: [
    '#F9503D', // 0: Error
    'rgba(249, 80, 61, 0.08)' // 0: Error Light Bg
  ],
  text: [
    '#2C2C2C', // 0: Heading
    '#909090', // 1: Meta Text
    '#777777' // 2: Text Info
  ],
  border: [
    '#EBEBEB', // 0: Light border
    '#E8E8E8', // 1: Default Border
    'rgba(57, 151, 247, 0.35)', // 2: Active Light Border
    '#E6E6E6' // 3: Pricing Border
  ],
  boxShadow: [
    'rgba(26, 68, 116, 0.16)', // 0: Card hover
    'rgba(0, 0, 0, 0.16)' // 1: Carousel Button shadow
  ],
  fonts: {
    primary: 'Lato, sans-serif'
  }
}

export default defaultTheme
