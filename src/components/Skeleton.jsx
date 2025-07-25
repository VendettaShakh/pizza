import React from 'react'
import ContentLoader from "react-content-loader"

const Skeleton = () => {
  return (
    <ContentLoader 
    speed={2}
    width={280}
    height={450}
    viewBox="0 0 280 450"
    backgroundColor="#c9bebeff"
    foregroundColor="#ecebeb"
  >
    <circle cx="110" cy="110" r="110" /> 
    <rect x="10" y="230" rx="0" ry="0" width="200" height="45" /> 
    <rect x="10" y="300" rx="0" ry="0" width="200" height="45" />
  </ContentLoader>
)
}

export default Skeleton;