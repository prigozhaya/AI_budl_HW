"use client"

import { fireEvent, render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import UserModal from "../pages/MainPage/components/UserModal/UserModal"
import type { User } from "../types/user/user"

const mockUser: User = {
  id: 1,
  name: "Jane Smith",
  username: "janesmith",
  email: "jane@example.com",
  address: {
    street: "Oak Ave",
    suite: "Suite 200",
    city: "Los Angeles",
    zipcode: "90210",
    geo: { lat: "34.0522", lng: "-118.2437" },
  },
  phone: "987-654-3210",
  website: "janesmith.com",
  company: {
    name: "Smith Corp",
    catchPhrase: "Innovation at its best",
    bs: "cutting-edge solutions",
  },
}

describe("UserModal", () => {
  const mockOnClose = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders user information correctly", () => {
    render(<UserModal user={mockUser} onClose={mockOnClose} />)

    expect(screen.getByText("Jane Smith")).toBeInTheDocument()
    expect(screen.getByText("jane@example.com")).toBeInTheDocument()
    expect(screen.getByText("Address")).toBeInTheDocument()
    expect(screen.getByText("Contact")).toBeInTheDocument()
    expect(screen.getByText("Company")).toBeInTheDocument()
  })

  it("displays formatted address", () => {
    render(<UserModal user={mockUser} onClose={mockOnClose} />)

    expect(screen.getByText(/Oak Ave, Suite 200/)).toBeInTheDocument()
    expect(screen.getByText(/Los Angeles, 90210/)).toBeInTheDocument()
  })

  it("displays contact information", () => {
    render(<UserModal user={mockUser} onClose={mockOnClose} />)

    expect(screen.getByText("987-654-3210")).toBeInTheDocument()
    expect(screen.getByText("janesmith.com")).toBeInTheDocument()
  })

  it("displays company information", () => {
    render(<UserModal user={mockUser} onClose={mockOnClose} />)

    expect(screen.getByText("Smith Corp")).toBeInTheDocument()
    expect(screen.getByText("Innovation at its best")).toBeInTheDocument()
    expect(screen.getByText("cutting-edge solutions")).toBeInTheDocument()
  })

  it("does not close when modal content is clicked", () => {
    render(<UserModal user={mockUser} onClose={mockOnClose} />)

    const modalContent = screen.getByText("Jane Smith").closest("div")
    fireEvent.click(modalContent!)

    expect(mockOnClose).not.toHaveBeenCalled()
  })

  it("renders map link with correct coordinates", () => {
    render(<UserModal user={mockUser} onClose={mockOnClose} />)

    const mapLink = screen.getByText("📍 View on map")
    expect(mapLink).toHaveAttribute("href", "https://www.google.com/maps?q=34.0522,-118.2437")
  })
})
