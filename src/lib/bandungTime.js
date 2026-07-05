import {
  BANDUNG_TIMEZONE,
  CLOSE_HOUR,
  OPEN_HOUR,
} from "@/data/hours";

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: BANDUNG_TIMEZONE,
});

const timeFormatter = new Intl.DateTimeFormat("id-ID", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: BANDUNG_TIMEZONE,
});

const weekdayFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  timeZone: BANDUNG_TIMEZONE,
});

const weekdayMap = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

export function getBandungDateTime(now = new Date()) {
  const parts = timeFormatter.formatToParts(now);
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const second = Number(parts.find((p) => p.type === "second")?.value ?? 0);

  const weekdayShort = weekdayFormatter.format(now);
  const weekday = weekdayMap[weekdayShort] ?? 0;

  const isOpen =
    hour >= OPEN_HOUR && hour < CLOSE_HOUR;

  return {
    dateLabel: dateFormatter.format(now),
    timeLabel: timeFormatter.format(now),
    weekday,
    hour,
    minute,
    second,
    isOpen,
  };
}
