import { createGlobalStyle } from 'styled-components'

const GlobalFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1171630_hzaz6k36l5p.eot?t=1556787057752'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1171630_hzaz6k36l5p.eot?t=1556787057752#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAASMAAsAAAAACNgAAAQ9AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDIgqFBIRCATYCJAMUCwwABCAFhG0HSxvBB8gOJSGhwABQAABEBF9rn/1mZvf2Zg/YMQU8lz8VVqgiHFsg6cLCp1IeWMj/07vpg6smdbma+QSZWAoJDXg4JqJCZv4n+qX/c7i0+Tyw+VvWy2XNQW0r6gUYBxTQ2AskTe9Azv2GsYvL2EygWpBKcrG+VQYuCq1XIO7xGgZcYjqlBBc6ZZszsYg34KhLT6U3Abx2fz9+Q3a4kDSZNvD4bp0aKr/lfdyDxv5/op+NAH5/FjDTyNgDCnEz13YD8mN7kCoxOzgCWqUwfSv4uOf/gD65ro55plYUqd0/L1qabARiz0rLbvFNXijPhxoJygugRobyPVBwDrLGnlDR4zNALIGmWHNleccflmYcqa6bpQPcEpJGKLZPTyQL/WRL/RfR9OUlgUN2jCMypUaulClij5rhL1801pO65CajdHTvPosjqJVBvZgT9AyAGvUdNf22ZJxSOQ49qVR+cCuM3UbPuCCR3FecESV2u+LhQ9mjR/IZYoV80Ywd4wRRVIqcjKXt9hHTH7YqlyzfvNFPtnCZv3wGPWPJiuUBTdT0I00yNt1kRqAo2u39FYu3FrlvPqy3I7lYWfPwYQdeeobY0UqyiEgC8x5XnL1y8uQpDVNycoaE4i+wY5uHw3+8b0hO9rAG0udwUNCR2bNXr16xQqu12ebnqSn15Mn1FLzjGu4l1t5jPf531ti15R1yaXUnXy46/C63kkuFGRLHc+mmJAXv3p9uqSx+P0BJbgT7/w6J+xYXAUVvAg4fNiaTarTs5s1llhghPVoWuqtJ8sf8RtvD5eF/tqThGzYMx2IptqLhCHMcNhwMOOfWjErg/JiQdbKQ5Jg18KvWr4lBqP/jt3Zdf79vhugSDnaquf1Xs3vP/I0NxRy8s928JOy4vDr+rXzWu/4BYFyaq5Fu51QHpVdze/XumVLbq4R1eG+5fdFmkzqfGx4nC2CS96/DDq5fE+NWJx+AoQCDi+gkKqWE//kdAsJjtBFFJJbk/Uj7n/yNF9JduoGepb9c6AK+fL1rgZ7BkgL1UkEnUZv/V/BrlhVZqOmbIhabPNHeOI70llBVDEBzTXnZj2MWhJbQsXwIyZB5yDpryILdg0bvNLQ6Z6Da1TC9N02ARBnGjkkAwoQ9kIx5C9mEW8iCfQGNOZ+gNREIqkvhu2BvI3iqRmAZwqpx5zDMq0xGzjASysvswWpsekaICl28ghWsfBBnpWcmkw2skRX6GGIdrMkmhMOcYDLgerAdq9ebsFkwaVkVSe8ixFyckcHlvSldZTIA5QIBi0Gw1LBOw2A8FRMjzq5OUKmf74GlYaPHEEpKSqwKLIEVXz+WJV1mDWSDzFir5FyusRpMIxtBcDCOwMQAqwcWll6PmWDm/HZaLBUiXVeLiFmxDFSJqytLH19huMY1UGmHNJEiR4kmWulkrrSKoTjGqFEzWt5mpLpsjHEYrwUAAAAA') format('woff2'),
  url('//at.alicdn.com/t/font_1171630_hzaz6k36l5p.woff?t=1556787057752') format('woff'),
  url('//at.alicdn.com/t/font_1171630_hzaz6k36l5p.ttf?t=1556787057752') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1171630_hzaz6k36l5p.svg?t=1556787057752#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon24:before {
  content: "\e6af";
}

.iconAa:before {
  content: "\e636";
}

.iconfangdajing:before {
  content: "\e637";
}

.iconhuanyihuan:before {
  content: "\e635";
}

`

export default GlobalFont