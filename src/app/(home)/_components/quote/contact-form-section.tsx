"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { CalendarIcon, Mail } from "lucide-react"
import type { UseFormReturn } from "react-hook-form"
import type { ContactFormData } from "@/lib/schemas"
import { format, parse } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

interface ContactFormSectionProps {
  form: UseFormReturn<ContactFormData>
  onSubmit: (data: ContactFormData) => void
}

export function ContactFormSection({ form, onSubmit }: ContactFormSectionProps) {
  return (
    <Card className="bg-[var(--bg-light)]/70 backdrop-blur-sm border-0 shadow-xl" data-contact-form data-aos="fade-up">
      <CardHeader>
        <CardTitle className="text-2xl text-[var(--text-primary)] flex items-center">
          <Mail className="w-6 h-6 mr-3 text-[var(--orange-light)]" strokeWidth={3} />
          Contact Information
        </CardTitle>
        <CardDescription>Please provide your details for the quote request</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone *</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Delivery Address (Street, Zip Code) *</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g., 123 Main St, 90210" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full" translate="no">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="deliveryDate"
                render={({ field }) => {
                  const today = new Date()
                  today.setHours(0, 0, 0, 0)

                  function formatDateToFormValue(date: Date) {
                    return format(date, "MM-dd-yyyy")
                  }

                  function parseFormValue(value?: string) {
                    if (!value) return undefined
                    return parse(value, "MM-dd-yyyy", new Date())
                  }

                  function isSameOrAfterToday(date: Date) {
                    const compareDate = new Date(date)
                    compareDate.setHours(0, 0, 0, 0)

                    const todayCompare = new Date()
                    todayCompare.setHours(0, 0, 0, 0)

                    return compareDate >= todayCompare
                  }

                  return (
                    <FormItem className="flex flex-col">
                      <FormLabel>Preferred Delivery Date *</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"
                                }`}
                            >
                              {field.value
                                ? format(parseFormValue(field.value)!, "MM/dd/yyyy")
                                : "Select date"}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={parseFormValue(field.value)}
                            onSelect={(date) => {
                              if (date && isSameOrAfterToday(date)) {
                                field.onChange(formatDateToFormValue(date))
                              }
                            }}
                            disabled={(date) => !isSameOrAfterToday(date)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Any special requirements, delivery instructions, or project details..."
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-[var(--yellow-500)] hover:bg-[var(--orange-light)] text-[var(--text-primary)] border-0 shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Mail className="w-4 h-4 mr-2" />
              Submit Quote Request
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}