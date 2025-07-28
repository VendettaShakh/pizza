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
    <rect x="0" y="0" rx="15" ry="15" width="280" height="456" />
  </ContentLoader>
)
}

export default Skeleton;