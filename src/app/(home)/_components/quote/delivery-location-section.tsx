"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { MapPin, Truck } from "lucide-react"
import type { UseFormReturn } from "react-hook-form"
import type { ContactFormData } from "@/lib/schemas"
import { Input } from "@/components/ui/input"

interface DeliveryLocationSectionProps {
  form: UseFormReturn<ContactFormData>
  deliveryDistance: number
  cities: CityDistance[]
  onCityChange?: (city: string) => void
}

export function DeliveryLocationSection({
  form,
  deliveryDistance,
  cities,
  onCityChange,
}: DeliveryLocationSectionProps) {
  const selectedCity = form.watch("city")
  const otherCity = form.watch("otherCity")
  return (
    <Card className="bg-[var(--bg-light)]/70 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-[var(--text-primary)] flex items-center">
          <MapPin className="w-6 h-6 mr-3 text-[var(--orange-light)]" strokeWidth={3} />
          Delivery Location
        </CardTitle>
        <CardDescription>Select your delivery city to help us estimate logistics</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery City *</FormLabel>
                  <Select
                    value={field.value || ""}
                    onValueChange={(value) => {
                      field.onChange(value)
                      onCityChange?.(value)
                    }}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full" translate="no">
                        <SelectValue placeholder="Select a city" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city.name} value={city.name}>
                          {city.name} ({city.distanceMiles} miles from LA)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {selectedCity === "Other" && (
              <FormField
                control={form.control}
                name="otherCity"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel>Specify Delivery City *</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter city name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {selectedCity && (
              <div
                className={`border bg-blue-50 p-4 rounded-lg border-blue-200 transition-all ${selectedCity ? "block" : "hidden"
                  }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span className="font-medium text-blue-800">Delivery Info</span>
                </div>
                {selectedCity === "Other" ? (
                  <p className="text-sm text-blue-700">
                    Delivery City: <span className="font-semibold">{otherCity || "…"}</span>
                  </p>
                ) : (
                  <p className="text-sm text-blue-700">
                    Distance from LA: {deliveryDistance} miles
                  </p>
                )}
              </div>
            )}
          </div>
        </Form>
      </CardContent>
    </Card>
  )
}