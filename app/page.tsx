"use client"

import Link from "next/link"
import { ArrowRight, Users, Calendar, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Connecting People Across <span className="text-primary">Faiths & Interests</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground">
              Building bridges between communities through meaningful events and shared experiences.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link href="/events">
                <Button size="lg" className="mt-4 group">
                  Explore Events
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About CommunionHub</h2>
              <p className="text-muted-foreground text-lg">
                CommunionHub is a platform dedicated to connecting people of all faiths through events and community
                support. We believe in the power of shared experiences to build understanding and foster meaningful
                relationships across diverse communities.
              </p>
              <p className="text-muted-foreground text-lg">
                Our mission is to create spaces where people can come together, learn from one another, and celebrate
                their unique traditions while discovering common ground.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div whileHover={{ y: -5 }} className="bg-card p-6 rounded-lg shadow-md">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Build connections with people who share your interests and values.
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-card p-6 rounded-lg shadow-md">
                <Calendar className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Events</h3>
                <p className="text-muted-foreground">
                  Discover and participate in meaningful gatherings and celebrations.
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-card p-6 rounded-lg shadow-md">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Support</h3>
                <p className="text-muted-foreground">Find resources and assistance within your community.</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-card p-6 rounded-lg shadow-md">
                <ArrowRight className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Growth</h3>
                <p className="text-muted-foreground">Expand your horizons through interfaith dialogue and learning.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/10 p-8 md:p-12 rounded-2xl text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover events, connect with like-minded individuals, and be part of something meaningful.
            </p>
            <Link href="/events">
              <Button size="lg" variant="default">
                Browse Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

