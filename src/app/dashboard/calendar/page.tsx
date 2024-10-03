"use client"


import { useState } from "react";
import { Calendar } from "@/components/ui/calendar"
import { DateRange } from "react-day-picker";


export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([]);
  const [rangeDates, setRangeDates] = useState<DateRange | undefined>();

  const smallDate = date?.toLocaleString("es-ES", {
    weekday: "short",
    day:"numeric",
    month:"short"
  });

  return (
    <div className="flex-col sm:flex-wrap sm:flex sm:flex-row gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) =>date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) =>date > new Date()}
      />
      <Calendar
        mode="multiple"
        selected={multipleDate}
        onSelect={setMultipleDate}
        className="rounded-md border shadow"
      />
      <Calendar
        mode="range"
        selected={rangeDates}
        onSelect={setRangeDates}
        className="rounded-md border shadow"
      />
      <div>
        <h1 className="text-3xl">Informacion</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <p>{multipleDate?.map(date => date.toLocaleDateString()).join(", ")}</p>
        <p>Desde: {rangeDates?.from?.toLocaleDateString()}</p>
        <p>Hasta: {rangeDates?.to?.toLocaleDateString()}</p>
      </div>
    </div>
  )
}