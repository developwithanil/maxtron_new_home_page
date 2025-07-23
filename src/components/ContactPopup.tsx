import React, { useState } from "react";

const CrossIcon = ({ onClick }: { onClick: () => void }) => (
  <span
    onClick={onClick}
    style={{
      position: "absolute",
      top: "10px",
      right: "10px",
      cursor: "pointer",
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: 1,
      zIndex: 1001,
      color: "#673ab7",
    }}
    aria-label="Close"
    role="button"
    tabIndex={0}
  >
    ×
  </span>
);

const ContactPopup = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "12px",
          minWidth: "480px",
          maxWidth: "1500px",
          position: "relative",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <CrossIcon onClick={() => setOpen(false)} />
        <h2 style={{ color: "#673ab7", marginBottom: "1.5rem" }}>Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              padding: "0.75rem",
              border: "1px solid #dcdcdc",
              borderRadius: "6px",
              fontSize: "1rem",
              color: "#333",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              padding: "0.75rem",
              border: "1px solid #dcdcdc",
              borderRadius: "6px",
              fontSize: "1rem",
              color: "#333",
            }}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            style={{
              padding: "0.75rem",
              border: "1px solid #dcdcdc",
              borderRadius: "6px",
              fontSize: "1rem",
              color: "#333",
            }}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
            style={{
              padding: "0.75rem",
              border: "1px solid #dcdcdc",
              borderRadius: "6px",
              fontSize: "1rem",
              color: "#333",
            }}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
            style={{
              padding: "0.75rem",
              border: "1px solid #dcdcdc",
              borderRadius: "6px",
              fontSize: "1rem",
              color: "#333",
              minHeight: "120px",
              resize: "vertical",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#673ab7",
              color: "#fff",
              padding: "0.85rem 1.5rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "1.1rem",
              transition: "background-color 0.2s ease-in-out",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
