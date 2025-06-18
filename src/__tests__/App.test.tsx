import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import MainPage from "../pages/MainPage/MainPage";

// Mock fetch
global.fetch = vi.fn()

const mockUsers = [
  {
    id: 1,
    name: "Test User",
    username: "testuser",
    email: "test@example.com",
    address: {
      street: "Test St",
      suite: "Apt 1",
      city: "Test City",
      zipcode: "12345",
      geo: { lat: "0", lng: "0" },
    },
    phone: "123-456-7890",
    website: "test.com",
    company: {
      name: "Test Company",
      catchPhrase: "Test phrase",
      bs: "test business",
    },
  },
]

describe("Home Page", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("shows loading state initially", () => {
    ;(fetch as any).mockImplementation(() => new Promise(() => {}))

    render(<MainPage />)

    expect(screen.getByText("Loading users...")).toBeInTheDocument()
  })

  it("renders users after successful fetch", async () => {
    ;(fetch as any).mockResolvedValueOnce({
      json: async () => mockUsers,
    })

    render(<MainPage />)

    await waitFor(() => {
      expect(screen.getByText("Test User")).toBeInTheDocument()
    })
  })

  it("opens modal when user is clicked", async () => {
    ;(fetch as any).mockResolvedValueOnce({
      json: async () => mockUsers,
    })

    render(<MainPage />)

    await waitFor(() => {
      expect(screen.getByText("Test User")).toBeInTheDocument()
    })

    const userRow = screen.getByText("Test User").closest("tr")
    fireEvent.click(userRow!)

    await waitFor(() => {
      expect(screen.getByText("Address")).toBeInTheDocument()
    })
  })

  it("deletes user when delete button is clicked", async () => {
    ;(fetch as any).mockResolvedValueOnce({
      json: async () => mockUsers,
    })

    render(<MainPage />)

    await waitFor(() => {
      expect(screen.getByText("Test User")).toBeInTheDocument()
    })

    const deleteButton = screen.getByTitle("Delete user")
    fireEvent.click(deleteButton)

    await waitFor(() => {
      expect(screen.queryByText("Test User")).not.toBeInTheDocument()
    })
  })
})
