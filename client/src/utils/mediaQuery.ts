import { breakPointSizeMap } from '../constants/mediaQuery';

// mobile-first를 기준으로 브레이크 포인트 작성; (min-width 기준)
const breakpoints = [
  breakPointSizeMap.mobile,
  breakPointSizeMap.tablet,
  breakPointSizeMap.desktop,
];

const _mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
const mq = {
  mobile: _mq[0],
  tablet: _mq[1],
  desktop: _mq[2],
};

export default mq;
