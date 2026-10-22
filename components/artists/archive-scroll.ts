const SNAPSHOT_KEY = "artists-archive-snapshot";
const RESTORE_FLAG = "artists-archive-restore";

export type ArtistsArchiveSnapshot = {
  y: number;
  eventType: string;
  vibe: string;
};

export function saveArtistsArchiveSnapshot(snapshot: ArtistsArchiveSnapshot) {
  try {
    sessionStorage.setItem(SNAPSHOT_KEY, JSON.stringify(snapshot));
  } catch {
    /* ignore private-mode storage failures */
  }
}

export function markArtistsArchiveRestore() {
  try {
    sessionStorage.setItem(RESTORE_FLAG, "1");
  } catch {
    /* ignore */
  }
}

/** Reads a saved list position only when Back to artists was used. */
export function consumeArtistsArchiveRestore(): ArtistsArchiveSnapshot | null {
  try {
    if (sessionStorage.getItem(RESTORE_FLAG) !== "1") return null;
    sessionStorage.removeItem(RESTORE_FLAG);
    const raw = sessionStorage.getItem(SNAPSHOT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ArtistsArchiveSnapshot;
    if (!Number.isFinite(parsed.y)) return null;
    return {
      y: parsed.y,
      eventType: parsed.eventType || "all",
      vibe: parsed.vibe || "all",
    };
  } catch {
    return null;
  }
}

export function scrollArtistsArchiveTo(y: number) {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, y);
  root.style.scrollBehavior = previous;
}
