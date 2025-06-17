"use client"


import type { User } from "../../../../types/user/user"
import styles from "./UserTable.module.css"

interface UserTableProps {
  users: User[]
  onUserClick: (user: User) => void
  onDeleteUser: (userId: number) => void
}

export default function UserTable({ users, onUserClick, onDeleteUser }: UserTableProps) {
  const formatAddress = (address: User["address"]) => {
    return `${address.city}, ${address.street}`
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={styles.headerCell}>NAME / EMAIL</th>
            <th className={styles.headerCell}>ADDRESS</th>
            <th className={styles.headerCell}>PHONE</th>
            <th className={styles.headerCell}>WEBSITE</th>
            <th className={styles.headerCell}>COMPANY</th>
            <th className={styles.headerCell}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className={styles.dataRow} onClick={() => onUserClick(user)}>
              <td className={styles.dataCell}>
                <div className={styles.nameEmail}>
                  <div className={styles.name}>{user.name}</div>
                  <div className={styles.email}>{user.email}</div>
                </div>
              </td>
              <td className={styles.dataCell}>{formatAddress(user.address)}</td>
              <td className={styles.dataCell}>{user.phone}</td>
              <td className={styles.dataCell}>
                <a
                  href={`http://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.websiteLink}
                  onClick={(e) => e.stopPropagation()}
                >
                  {user.website}
                </a>
              </td>
              <td className={styles.dataCell}>{user.company.name}</td>
              <td className={styles.dataCell}>
                <button
                  className={styles.deleteButton}
                  onClick={(e) => {
                    e.stopPropagation()
                    onDeleteUser(user.id)
                  }}
                  title="Delete user"
                >
                  ×
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
