import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import FormExample from "./Form"; 
import "@testing-library/jest-dom";

describe("Registration Form Component", () => {

  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  // ✅ Test 1 — Fixed using getByDisplayValue
  it("RENDERS all form fields", () => {
    render(<FormExample />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    // Use display value to uniquely identify MUI radio inputs
    expect(screen.getByDisplayValue("male")).toBeInTheDocument();
    expect(screen.getByDisplayValue("female")).toBeInTheDocument();

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("SHOWS ERROR when fields are empty", () => {
    render(<FormExample />);
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/all fields are required/i)).toBeInTheDocument();
  });

  it("SHOWS ERROR for invalid email", () => {
    render(<FormExample />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Prince" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "abc" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "123456" } });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
  });

  it("SHOWS ERROR for short password", () => {
    render(<FormExample />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Prince" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@test.com" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "123" } });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/password must be at least 6 characters/i)).toBeInTheDocument();
  });

  it("SHOWS ERROR when terms not accepted", () => {
    render(<FormExample />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Prince" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@test.com" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "123456" } });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/you must accept the terms/i)).toBeInTheDocument();
  });

  // ✅ Test 6 — Fixed radio button selection
  it("SUBMITS successfully with valid input", () => {
    render(<FormExample />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Prince" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@test.com" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "123456" } });

    // Use getByDisplayValue to avoid the "multiple elements" error
    fireEvent.click(screen.getByDisplayValue("male"));
    fireEvent.click(screen.getByRole("checkbox"));
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(window.alert).toHaveBeenCalledWith("Form submitted successfully!");
  });
});