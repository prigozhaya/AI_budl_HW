"use client"


import type { User } from "../../../../types/user/user"
import styles from "./UserModal.module.css"

interface UserModalProps {
  user: User
  onClose: () => void
}

export default function UserModal({ user, onClose }: UserModalProps) {
  const formatAddress = () => {
    const { street, suite, city, zipcode } = user.address
    return `${street}, ${suite}\n${city}, ${zipcode}`
  }

  const getMapUrl = () => {
    const { lat, lng } = user.address.geo
    return `https://www.google.com/maps?q=${lat},${lng}`
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <div className={styles.header}>
          <h2 className={styles.name}>{user.name}</h2>
          <a href={`mailto:${user.email}`} className={styles.email}>
            {user.email}
          </a>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Address</h3>
          <div className={styles.address}>{formatAddress()}</div>
          <a href={getMapUrl()} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
            📍 View on map
          </a>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Contact</h3>
          <div className={styles.contactItem}>
            <span className={styles.label}>Phone:</span> {user.phone}
          </div>
          <div className={styles.contactItem}>
            <span className={styles.label}>Website:</span>{" "}
            <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className={styles.websiteLink}>
              {user.website}
            </a>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Company</h3>
          <div className={styles.contactItem}>
            <span className={styles.label}>Name:</span> {user.company.name}
          </div>
          <div className={styles.contactItem}>
            <span className={styles.label}>Catchphrase:</span> {user.company.catchPhrase}
          </div>
          <div className={styles.contactItem}>
            <span className={styles.label}>Business:</span> {user.company.bs}
          </div>
        </div>
      </div>
    </div>
  )
}