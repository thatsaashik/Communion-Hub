"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Users, Plus, Filter } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"

// Define event type
type Event = {
  id: number
  title: string
  date: Date
  location: string
  description: string
  category: "Religious" | "Social" | "Charity" | "Educational"
}

// Sample events data
const initialEvents: Event[] = [
  {
    id: 1,
    title: "Interfaith Prayer Gathering",
    date: new Date("2025-03-15T18:00:00"),
    location: "Central Community Center",
    description: "Join us for an evening of prayer and reflection with leaders from various faith traditions.",
    category: "Religious",
  },
  {
    id: 2,
    title: "Community Potluck Dinner",
    date: new Date("2025-03-20T19:00:00"),
    location: "Riverside Park",
    description: "Bring a dish to share and connect with neighbors from all backgrounds.",
    category: "Social",
  },
  {
    id: 3,
    title: "Homeless Shelter Volunteer Day",
    date: new Date("2025-03-25T09:00:00"),
    location: "Hope Shelter",
    description: "Help prepare and serve meals to those in need in our community.",
    category: "Charity",
  },
  {
    id: 4,
    title: "World Religions Seminar",
    date: new Date("2025-04-05T14:00:00"),
    location: "Public Library - Meeting Room A",
    description: "Learn about the major world religions in this educational seminar led by religious scholars.",
    category: "Educational",
  },
  {
    id: 5,
    title: "Charity Fundraising Gala",
    date: new Date("2025-04-10T18:30:00"),
    location: "Grand Hotel Ballroom",
    description: "An elegant evening to raise funds for local community initiatives.",
    category: "Charity",
  },
  {
    id: 6,
    title: "Youth Faith Exchange Program",
    date: new Date("2025-04-15T16:00:00"),
    location: "Community Youth Center",
    description: "Young people from different faith backgrounds share their traditions and experiences.",
    category: "Religious",
  },
]

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const [filter, setFilter] = useState<string>("All")
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    category: "",
  })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Filter events based on category
  const filteredEvents = filter === "All" ? events : events.filter((event) => event.category === filter)

  // Handle adding a new event
  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.category) {
      const event: Event = {
        id: events.length + 1,
        title: newEvent.title,
        date: new Date(newEvent.date),
        location: newEvent.location || "TBD",
        description: newEvent.description || "No description provided",
        category: newEvent.category as Event["category"],
      }

      setEvents([...events, event])
      setNewEvent({
        title: "",
        date: "",
        location: "",
        description: "",
        category: "",
      })
      setIsDialogOpen(false)
    }
  }

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Religious":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Social":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Charity":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Educational":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and join events that bring our community together. Filter by category or add your own event.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Religious">Religious</SelectItem>
                <SelectItem value="Social">Social</SelectItem>
                <SelectItem value="Charity">Charity</SelectItem>
                <SelectItem value="Educational">Educational</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Event
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Event</DialogTitle>
                <DialogDescription>Fill in the details to create a new community event.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Event Title</Label>
                  <Input
                    id="title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    placeholder="Enter event title"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="datetime-local"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    placeholder="Enter location"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={newEvent.category}
                    onValueChange={(value) => setNewEvent({ ...newEvent, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Religious">Religious</SelectItem>
                      <SelectItem value="Social">Social</SelectItem>
                      <SelectItem value="Charity">Charity</SelectItem>
                      <SelectItem value="Educational">Educational</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    placeholder="Enter event description"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddEvent}>Add Event</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                layout
                className="flex"
              >
                <Card className="w-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                    </div>
                    <CardDescription className="flex items-center mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {format(event.date, "MMMM d, yyyy • h:mm a")}
                    </CardDescription>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Users className="mr-2 h-4 w-4" />
                      Join Event
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredEvents.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-muted-foreground text-lg">No events found in this category.</p>
            <Button className="mt-4" onClick={() => setFilter("All")}>
              View All Events
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

