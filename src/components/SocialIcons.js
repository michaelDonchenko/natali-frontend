import React from "react"
import data from "../utils/social"

const SocialIcons = () => {
  return (
    <div style={{ alignItems: "center" }} className="flex-center">
      <span className="border-icon">/</span>
      {data.map(item => (
        <a href={item.url} key={item.id} className="icon">
          {item.icon}
        </a>
      ))}
      <span className="border-icon">/</span>
    </div>
  )
}

export default SocialIcons
