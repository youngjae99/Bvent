export const isMobileDevice = () =>
  'ontouchstart' in window || 'onmsgesturechange' in window;
