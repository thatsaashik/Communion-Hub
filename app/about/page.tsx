"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About CommunionHub</h1>
            <p className="text-xl text-muted-foreground">
              Our mission is to create a world where people of all faiths and backgrounds can come together, learn from
              one another, and build meaningful connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  CommunionHub was founded in 2023 with a simple yet powerful vision: to create a platform where people
                  from diverse faith backgrounds could find common ground and build community together.
                </p>
                <p>
                  In a world often divided by religious differences, we saw an opportunity to highlight what unites us
                  rather than what separates us. Our founders, coming from different spiritual traditions themselves,
                  recognized the need for spaces where interfaith dialogue could flourish.
                </p>
                <p>
                  What began as a small series of local gatherings has grown into a vibrant community platform
                  connecting thousands of people across different beliefs, traditions, and interests.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Community gathering"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our community and shape everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Inclusivity",
                description: "We welcome people of all faiths, beliefs, and backgrounds without judgment or prejudice.",
              },
              {
                title: "Respect",
                description: "We honor the diversity of traditions and perspectives within our community.",
              },
              {
                title: "Connection",
                description: "We create meaningful opportunities for people to build relationships across differences.",
              },
              {
                title: "Learning",
                description: "We encourage curiosity and open-minded exploration of different spiritual traditions.",
              },
              {
                title: "Service",
                description: "We believe in the power of coming together to serve our broader communities.",
              },
              {
                title: "Authenticity",
                description: "We create space for people to bring their whole selves to our community.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to connect with others and be part of something meaningful? Explore our upcoming events and get
              involved.
            </p>
            <Link href="/events">
              <Button size="lg" className="group">
                Browse Events
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

