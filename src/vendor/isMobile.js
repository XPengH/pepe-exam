export const isMobile = () => {
  const ua = navigator.userAgent;
  if (ua.match(/(iPhone|Android.*Mobile)/i)) {
    return true;
  }
  return false;
}