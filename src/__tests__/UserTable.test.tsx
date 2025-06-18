import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import UserTable from "../pages/MainPage/components/UserTable/UserTable"
import type { User } from "../types/user/user"

const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    address: {
      street: "Main St",
      suite: "Apt 1",
      city: "New York",
      zipcode: "10001",
      geo: { lat: "40.7128", lng: "-74.0060" },
    },
    phone: "123-456-7890",
    website: "example.com",
    company: {
      name: "Test Company",
      catchPhrase: "Test phrase",
      bs: "test business",
    },
  },
]

describe("UserTable", () => {
  const mockOnUserClick = vi.fn()
  const mockOnDeleteUser = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders user table with correct headers", () => {
    render(<UserTable users={mockUsers} onUserClick={mockOnUserClick} onDeleteUser={mockOnDeleteUser} />)

    expect(screen.getByText("NAME / EMAIL")).toBeInTheDocument()
    expect(screen.getByText("ADDRESS")).toBeInTheDocument()
    expect(screen.getByText("PHONE")).toBeInTheDocument()
    expect(screen.getByText("WEBSITE")).toBeInTheDocument()
    expect(screen.getByText("COMPANY")).toBeInTheDocument()
    expect(screen.getByText("ACTION")).toBeInTheDocument()
  })

  it("renders user data correctly", () => {
    render(<UserTable users={mockUsers} onUserClick={mockOnUserClick} onDeleteUser={mockOnDeleteUser} />)

    expect(screen.getByText("John Doe")).toBeInTheDocument()
    expect(screen.getByText("john@example.com")).toBeInTheDocument()
    expect(screen.getByText("New York, Main St")).toBeInTheDocument()
    expect(screen.getByText("123-456-7890")).toBeInTheDocument()
    expect(screen.getByText("example.com")).toBeInTheDocument()
    expect(screen.getByText("Test Company")).toBeInTheDocument()
  })

  it("calls onUserClick when row is clicked", () => {
    render(<UserTable users={mockUsers} onUserClick={mockOnUserClick} onDeleteUser={mockOnDeleteUser} />)

    const row = screen.getByText("John Doe").closest("tr")
    fireEvent.click(row!)

    expect(mockOnUserClick).toHaveBeenCalledWith(mockUsers[0])
  })

  it("calls onDeleteUser when delete button is clicked", () => {
    render(<UserTable users={mockUsers} onUserClick={mockOnUserClick} onDeleteUser={mockOnDeleteUser} />)

    const deleteButton = screen.getByTitle("Delete user")
    fireEvent.click(deleteButton)

    expect(mockOnDeleteUser).toHaveBeenCalledWith(1)
    expect(mockOnUserClick).not.toHaveBeenCalled()
  })

  it("renders empty table when no users provided", () => {
    render(<UserTable users={[]} onUserClick={mockOnUserClick} onDeleteUser={mockOnDeleteUser} />)

    const tbody = screen.getByRole("table").querySelector("tbody")
    expect(tbody?.children).toHaveLength(0)
  })
})
