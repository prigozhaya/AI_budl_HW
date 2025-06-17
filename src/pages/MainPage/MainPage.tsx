"use client"

import { useEffect, useState } from "react"

import type { User } from "../../types/user/user"
import UserModal from "./components/UserModal/UserModal"
import UserTable from "./components/UserTable/UserTable"
import styles from "./MainPage.module.css"

export default function MainPage() {
  const [users, setUsers] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const userData = await response.json()
      setUsers(userData)
    } catch (error) {
      console.error("Error fetching users:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleUserClick = (user: User) => {
    setSelectedUser(user)
  }

  const handleCloseModal = () => {
    setSelectedUser(null)
  }

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId))
  }

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading users...</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Users</h1>
      </header>

      <UserTable users={users} onUserClick={handleUserClick} onDeleteUser={handleDeleteUser} />

      {selectedUser && <UserModal user={selectedUser} onClose={handleCloseModal} />}
    </div>
  )
}
