import React from "react"
import "../css/contact.css"
import { useForm } from "@formspree/react"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrgrjqgd")

  console.log(process.env.FORMSPREE_API)

  if (state.succeeded) {
    return (
      <p style={{ color: "green", textAlign: "center" }}>
        ההודעה נשלחה בהצלחה!
      </p>
    )
  }

  if (state.errors.length > 0) {
    return (
      <p style={{ color: "red", textAlign: "center" }}>
        היתה בעיה בשליחת ההודעה
      </p>
    )
  }

  return (
    <div className="flex-center">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">אימייל</label>
          <input className="input" type="email" required name="email" />
        </div>

        <div className="form-group">
          <label className="label">הודעה</label>
          <textarea
            rows={6}
            className="input"
            type="text"
            required
            name="description"
          />
        </div>

        <button
          disabled={state.submitting}
          type="submit"
          className="btn btn-center"
        >
          {state.submitting ? "שולח..." : "שלח"}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
