import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Ezsnippets. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" alt="icon_facebook" width={15} height={15} className={styles.icon}/>
        <Image src="/2.png" alt="icon_instagram" width={15} height={15} className={styles.icon}/>
        <Image src="/3.png" alt="icon_twitter" width={15} height={15} className={styles.icon}/>
        <Image src="/4.png" alt="icon_youtube" width={15} height={15} className={styles.icon}/>
      </div>
    </div>
  )
}

export default Footer