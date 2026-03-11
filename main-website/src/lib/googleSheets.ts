/**
 * Fetch rows from a Google Sheet via the Sheets API v4.
 * Sheet must be shared so "Anyone with the link" can view (for API key access).
 * @see https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
 */

const SPREADSHEET_ID = "1VP1lgLFjBwAhZS8pfxtBDxgS5IUYCjLZliufw7a2HMo";
/** A2:E = columns Key, Name, Birth Date, Description, Image link (row 1 = headers). Override with GOOGLE_SHEET_RANGE if your tab name isn't Sheet1 (e.g. "'Birth Dates'!A2:E"). */
const DEFAULT_RANGE = "Birth Dates!A2:E";
const WEEKLY_WINNERS_DEFAULT_RANGE = "Weekly Winners!A2:D";
const TOURNAMENT_WINNERS_DEFAULT_RANGE = "Tournament Winners!A2:D";
const UPCOMING_EVENTS_DEFAULT_RANGE = "Upcoming Events!A2:E";
const PAST_EVENTS_DEFAULT_RANGE = "Past Events!A2:E";

export interface SheetRow {
  key: string;
  name: string;
  birthDate: string;
  description: string;
  imageUrl: string;
}

export interface WinnerSheetRow {
  key: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface EventSheetRow {
  key: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  
}

export async function fetchBirthdaysFromSheet(): Promise<SheetRow[]> {
  const apiKey = import.meta.env
    .VITE_GOOGLE_SHEET_API_KEY as string | undefined;
  if (!apiKey) {
    throw new Error("VITE_GOOGLE_SHEET_API_KEY is not set");
  }

  const range =
    (import.meta.env.VITE_GOOGLE_SHEET_RANGE as string) || DEFAULT_RANGE;
  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(range)}`
  );
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Sheets API error ${res.status}: ${body}`);
  }

  const data = (await res.json()) as { values?: string[][] };
  const rows = data.values ?? [];

  return rows
    .map((row) => {
      const key = String(row[0] ?? "").trim();
      const name = String(row[1] ?? "").trim();
      const birthDate = String(row[2] ?? "").trim();
      const description = String(row[3] ?? "").trim();
      const imageUrl = String(row[4] ?? "").trim();
      return { key, name, birthDate, description, imageUrl };
    })
    .filter((r) => r.name !== "");
}

export async function fetchWeeklyWinnersFromSheet(): Promise<WinnerSheetRow[]> {
  const apiKey = import.meta.env
    .VITE_GOOGLE_SHEET_API_KEY as string | undefined;
  if (!apiKey) {
    throw new Error("VITE_GOOGLE_SHEET_API_KEY is not set");
  }

  const range =
    (import.meta.env.VITE_GOOGLE_SHEET_WEEKLY_WINNERS_RANGE as string) ||
    WEEKLY_WINNERS_DEFAULT_RANGE;
  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(
      range
    )}`
  );
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Sheets API error ${res.status}: ${body}`);
  }

  const data = (await res.json()) as { values?: string[][] };
  const rows = data.values ?? [];

  return rows
    .map((row) => {
      const key = String(row[0] ?? "").trim();
      const name = String(row[1] ?? "").trim();
      const description = String(row[2] ?? "").trim();
      const imageUrl = String(row[3] ?? "").trim();
      return { key, name, description, imageUrl };
    })
    .filter((r) => r.name !== "");
}

export async function fetchTournamentWinnersFromSheet(): Promise<WinnerSheetRow[]> {
  const apiKey = import.meta.env
    .VITE_GOOGLE_SHEET_API_KEY as string | undefined;
  if (!apiKey) {
    throw new Error("VITE_GOOGLE_SHEET_API_KEY is not set");
  }

  const range =
    (import.meta.env.VITE_GOOGLE_SHEET_TOURNAMENT_WINNERS_RANGE as string) ||
    TOURNAMENT_WINNERS_DEFAULT_RANGE;
  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(
      range
    )}`
  );
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Sheets API error ${res.status}: ${body}`);
  }

  const data = (await res.json()) as { values?: string[][] };
  const rows = data.values ?? [];

  return rows
    .map((row) => {
      const key = String(row[0] ?? "").trim();
      const name = String(row[1] ?? "").trim();
      const description = String(row[2] ?? "").trim();
      const imageUrl = String(row[3] ?? "").trim();
      return { key, name, description, imageUrl };
    })
    .filter((r) => r.name !== "");
}

export async function fetchUpcomingEventsFromSheet(): Promise<EventSheetRow[]> {
  const apiKey = import.meta.env
    .VITE_GOOGLE_SHEET_API_KEY as string | undefined;
  if (!apiKey) {
    throw new Error("VITE_GOOGLE_SHEET_API_KEY is not set");
  }

  const range =
    (import.meta.env.VITE_GOOGLE_SHEET_UPCOMING_EVENTS_RANGE as string) ||
    UPCOMING_EVENTS_DEFAULT_RANGE;
  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(
      range
    )}`
  );
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Sheets API error ${res.status}: ${body}`);
  }

  const data = (await res.json()) as { values?: string[][] };
  const rows = data.values ?? [];

  return rows
    .map((row) => {
      const key = String(row[0] ?? "").trim();
      const title = String(row[1] ?? "").trim();
      const date = String(row[2] ?? "").trim();
      const description = String(row[3] ?? "").trim();
      const imageUrl = String(row[4] ?? "").trim();
      return { key, title, date, description, imageUrl };
    })
    .filter((r) => r.title !== "");
}

export async function fetchPastEventsFromSheet(): Promise<EventSheetRow[]> {
  const apiKey = import.meta.env
    .VITE_GOOGLE_SHEET_API_KEY as string | undefined;
  if (!apiKey) {
    throw new Error("VITE_GOOGLE_SHEET_API_KEY is not set");
  }

  const range =
    (import.meta.env.VITE_GOOGLE_SHEET_PAST_EVENTS_RANGE as string) ||
    PAST_EVENTS_DEFAULT_RANGE;
  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(
      range
    )}`
  );
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Sheets API error ${res.status}: ${body}`);
  }

  const data = (await res.json()) as { values?: string[][] };
  const rows = data.values ?? [];

  return rows
    .map((row) => {
      const key = String(row[0] ?? "").trim();
      const title = String(row[1] ?? "").trim();
      const date = String(row[2] ?? "").trim();
      const description = String(row[3] ?? "").trim();
      const imageUrl = String(row[4] ?? "").trim();
      return { key, title, date, description, imageUrl };
    })
    .filter((r) => r.title !== "");
}
