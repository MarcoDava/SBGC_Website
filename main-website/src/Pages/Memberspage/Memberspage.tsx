import { useEffect, useState } from "react";
import {
  fetchBirthdaysFromSheet,
  fetchWeeklyWinnersFromSheet,
  fetchTournamentWinnersFromSheet,
} from "@/lib/googleSheets";

export interface MemberBirthday {
  key: string;
  identifier: string;
  name: string;
  /** Date string (e.g. 1990-05-21) coming from Google Sheets */
  birthDate: string;
  description: string;
  /** Direct link to the member image */
  imageUrl: string;
}

export interface Winner {
  name: string;
  description: string;
  imageUrl: string;
}

function sheetRowToMember(row: {
  key: string;
  name: string;
  birthDate: string;
  description: string;
  imageUrl: string;
}): MemberBirthday {
  return {
    key: row.key,
    identifier: row.key ? `SBGC-${row.key}` : "",
    name: row.name,
    birthDate: row.birthDate,
    description: row.description,
    imageUrl: row.imageUrl || "https://placehold.co/400x300?text=No+image",
  };
}

function sheetRowToWinner(row: {
  name: string;
  description: string;
  imageUrl: string;
}): Winner {
  return {
    name: row.name,
    description: row.description,
    imageUrl: row.imageUrl || "https://placehold.co/400x300?text=No+image",
  };
}

function formatBirthDate(birthDate: string) {
  const date = new Date(birthDate);
  if (Number.isNaN(date.getTime())) {
    return birthDate;
  }
  return date.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
  });
}

function BirthdayCard({ member }: { member: MemberBirthday }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-[#5b4747]/40 border border-[#705656]/60 shadow-md backdrop-blur-sm">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-col gap-2 p-4 text-left">
        <h3 className="text-lg font-semibold text-white">{member.name}</h3>
        <p className="text-sm text-white/80">
          <span className="font-medium">Birth date:</span>{" "}
          {formatBirthDate(member.birthDate)}
        </p>
        <p className="mt-2 text-sm text-white/80 leading-relaxed">
          {member.description}
        </p>
      </div>
    </article>
  );
}

function WinnerCard({ winner }: { winner: Winner }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-[#5b4747]/40 border border-[#705656]/60 shadow-md backdrop-blur-sm">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={winner.imageUrl}
          alt={winner.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-col gap-2 p-4 text-left">
        <h3 className="text-lg font-semibold text-white">{winner.name}</h3>
        <p className="mt-2 text-sm text-white/80 leading-relaxed">
          {winner.description}
        </p>
      </div>
    </article>
  );
}

export default function Memberspage() {
  const [members, setMembers] = useState<MemberBirthday[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [weeklyWinners, setWeeklyWinners] = useState<Winner[]>([]);
  const [weeklyLoading, setWeeklyLoading] = useState(true);
  const [weeklyError, setWeeklyError] = useState<string | null>(null);
  const [tournamentWinners, setTournamentWinners] = useState<Winner[]>([]);
  const [tournamentLoading, setTournamentLoading] = useState(true);
  const [tournamentError, setTournamentError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchBirthdaysFromSheet()
      .then((rows) => {
        if (!cancelled) {
          setMembers(rows.map(sheetRowToMember));
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : String(err));
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    setWeeklyLoading(true);
    setWeeklyError(null);
    fetchWeeklyWinnersFromSheet()
      .then((rows) => {
        if (!cancelled) {
          setWeeklyWinners(rows.map(sheetRowToWinner));
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setWeeklyError(err instanceof Error ? err.message : String(err));
        }
      })
      .finally(() => {
        if (!cancelled) setWeeklyLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    setTournamentLoading(true);
    setTournamentError(null);
    fetchTournamentWinnersFromSheet()
      .then((rows) => {
        if (!cancelled) {
          setTournamentWinners(rows.map(sheetRowToWinner));
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setTournamentError(err instanceof Error ? err.message : String(err));
        }
      })
      .finally(() => {
        if (!cancelled) setTournamentLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="w-full min-h-screen mt-[10vh] md:mt-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#2a1f1f] from-20% to-[#4a3636]">
      <div className="w-full max-w-5xl px-6 py-10 space-y-8">
        {/* <header className="space-y-3 text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Members
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-2xl">
            Member birthdays are loaded live from our Google Sheet (Key, Name,
            Birth date, Description, and profile image link) whenever this page
            is opened.
          </p>
        </header> */}

       

        <section
          aria-labelledby="weekly-winners-heading"
          className="space-y-4 mt-10"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div className="w-full">
              <h2
                id="weekly-winners-heading"
                className="text-2xl font-semibold text-white w-full"
              >
                Weekly Winners
              </h2>
            </div>
          </div>

          {weeklyLoading && (
            <p className="text-white/80 text-center py-8">
              Loading weekly winners…
            </p>
          )}
          {weeklyError && (
            <div className="rounded-xl bg-red-900/30 border border-red-700/50 px-4 py-3 text-red-200 text-sm">
              Could not load weekly winners: {weeklyError}
            </div>
          )}
          {!weeklyLoading && !weeklyError && weeklyWinners.length === 0 && (
            <p className="text-white/70 text-center py-8">
              No weekly winners entries in the sheet yet.
            </p>
          )}
          {!weeklyLoading && !weeklyError && weeklyWinners.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {weeklyWinners.map((winner) => (
                <WinnerCard key={winner.name} winner={winner} />
              ))}
            </div>
          )}
        </section>

        <section
          aria-labelledby="tournament-winners-heading"
          className="space-y-4 mt-10"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div className="w-full">
              <h2
                id="tournament-winners-heading"
                className="text-2xl font-semibold text-white w-full"
              >
                Tournament Winners
              </h2>
            </div>
          </div>

          {tournamentLoading && (
            <p className="text-white/80 text-center py-8">
              Loading tournament winners…
            </p>
          )}
          {tournamentError && (
            <div className="rounded-xl bg-red-900/30 border border-red-700/50 px-4 py-3 text-red-200 text-sm">
              Could not load tournament winners: {tournamentError}
            </div>
          )}
          {!tournamentLoading &&
            !tournamentError &&
            tournamentWinners.length === 0 && (
              <p className="text-white/70 text-center py-8">
                No tournament winners entries in the sheet yet.
              </p>
            )}
          {!tournamentLoading &&
            !tournamentError &&
            tournamentWinners.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {tournamentWinners.map((winner) => (
                  <WinnerCard key={winner.name} winner={winner} />
                ))}
              </div>
            )}
        </section>
        <section aria-labelledby="member-birthdays-heading" className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div className="w-full">
              <h2
                id="member-birthdays-heading"
                className="text-2xl font-semibold text-white w-full"
              >
                Member Birthdays
              </h2>
            </div>
          </div>

          {loading && (
            <p className="text-white/80 text-center py-8">Loading birthdays…</p>
          )}
          {error && (
            <div className="rounded-xl bg-red-900/30 border border-red-700/50 px-4 py-3 text-red-200 text-sm">
              Could not load birthdays: {error}
            </div>
          )}
          {!loading && !error && members.length === 0 && (
            <p className="text-white/70 text-center py-8">
              No birthday entries in the sheet yet.
            </p>
          )}
          {!loading && !error && members.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {members.map((member) => (
                <BirthdayCard key={member.key} member={member} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

