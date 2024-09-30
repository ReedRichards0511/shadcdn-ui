"use client"


import { useState } from "react";
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button";


export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [count, setCount] = useState<number>(0);

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
        disabled={(date) =>date.getDay() === 0}
      />
      <Button variant='default'>Aumentar contador</Button>
      <Button variant='secondary'>Disminuir contador</Button>
      <Button variant='outline'>Resetear contador</Button>
      <h1 className="text-3xl">Valor: {count}</h1>
      {/* <div>
        <h1 className="text-3xl">Informacion</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
      </div> */}
    </div>
  )
}