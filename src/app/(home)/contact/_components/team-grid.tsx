"use client"

import TeamCard from "@/app/(home)/contact/_components/team-card"
import { team } from "@/data/team"

export default function TeamGrid() {
  return (
    <section className="relative w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-x-8 gap-y-32 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {team.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}