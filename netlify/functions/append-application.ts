import type { Handler } from "@netlify/functions"
import { google } from "googleapis"

// Writes a single applicant row to Google Sheets using a service account.
// Env vars required (set in Netlify):
// - GOOGLE_SERVICE_ACCOUNT: full JSON key contents for the service account
// - GOOGLE_SHEETS_ID: target spreadsheet ID
// - GOOGLE_SHEETS_RANGE: optional, defaults to "Applications!A:F"

const sheets = google.sheets("v4")

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  if (!process.env.GOOGLE_SERVICE_ACCOUNT || !process.env.GOOGLE_SHEETS_ID) {
    return { statusCode: 500, body: "Missing Google Sheets configuration" }
  }

  try {
    const { fullName, email, phone, dateOfBirth, selectedCourse } = JSON.parse(event.body || "{}")

    if (!fullName || !email || !phone || !dateOfBirth || !selectedCourse) {
      return { statusCode: 400, body: "Missing required fields" }
    }

    const creds = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT)
    const auth = new google.auth.GoogleAuth({
      credentials: creds,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const range = process.env.GOOGLE_SHEETS_RANGE || "Applications!A:F"
    const rows = [[
      new Date().toISOString(),
      fullName,
      email,
      phone,
      dateOfBirth,
      selectedCourse,
    ]]

    await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: rows },
    })

    return { statusCode: 200, body: "OK" }
  } catch (error) {
    console.error("append-application error", error)
    return { statusCode: 500, body: "Failed to append application" }
  }
}
