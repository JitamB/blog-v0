"use client"

import { useState } from "react"
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Composition",
    excerpt:
      "Exploring how AI and machine learning are revolutionizing the way we create and compose digital content in the modern era.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    author: "Alex Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    tags: ["AI", "Digital Art", "Innovation"],
    featured: true,
  },
  {
    id: 2,
    title: "Minimalist Design Principles",
    excerpt:
      "Understanding the core principles of minimalist design and how to apply them effectively in digital interfaces.",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    author: "Sarah Kim",
    date: "2024-01-12",
    readTime: "3 min read",
    category: "Design",
    tags: ["Design", "UI/UX", "Minimalism"],
  },
  {
    id: 3,
    title: "Building Interactive Experiences",
    excerpt: "A deep dive into creating engaging and interactive user experiences that captivate and retain users.",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
    author: "Mike Rodriguez",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Development",
    tags: ["React", "Animation", "UX"],
  },
  {
    id: 4,
    title: "The Art of Visual Storytelling",
    excerpt:
      "How visual elements can be used to tell compelling stories and create emotional connections with your audience.",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
    author: "Emma Thompson",
    date: "2024-01-08",
    readTime: "4 min read",
    category: "Creative",
    tags: ["Storytelling", "Visual Design", "Branding"],
  },
]

const categories = ["All", "Technology", "Design", "Development", "Creative"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-purple-900/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Blog
                </h1>
                <p className="text-gray-400 mt-2">Insights, tutorials, and thoughts on digital composition</p>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-900/50 border-purple-900/30 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
            </div>

            {/* Category filters */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-purple-600 hover:bg-purple-700 border-purple-600"
                      : "border-purple-900/30 text-gray-300 hover:border-purple-500 hover:text-white bg-transparent"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* Featured Post */}
          {featuredPost && selectedCategory === "All" && !searchTerm && (
            <section className="mb-16">
              <div
                className="relative group cursor-pointer"
                onClick={() => (window.location.href = `/blog/${featuredPost.id}`)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-900/30">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30">Featured</Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      {featuredPost.category}
                    </Badge>
                  </div>

                  <h2 className="text-3xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                      <span>by {featuredPost.author}</span>
                    </div>

                    <Button
                      className="bg-purple-600 hover:bg-purple-700 group/btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.location.href = `/blog/${featuredPost.id}`
                      }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Blog Posts Grid */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="group cursor-pointer"
                  onClick={() => (window.location.href = `/blog/${post.id}`)}
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                    <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 group-hover:border-purple-900/50 transition-all duration-300 h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
                          {post.category}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 text-xs text-purple-300 bg-purple-900/20 px-2 py-1 rounded"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">No articles found</p>
                  <p className="text-sm">Try adjusting your search or filter criteria</p>
                </div>
              </div>
            )}
          </section>

          {/* Newsletter Signup */}
          <section className="mt-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-900/30 text-center">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Stay Updated
                </h3>
                <p className="text-gray-300 mb-6 max-w-md mx-auto">
                  Get the latest articles and insights delivered directly to your inbox.
                </p>
                <div className="flex gap-4 max-w-md mx-auto">
                  <Input
                    placeholder="Enter your email"
                    className="bg-gray-900/50 border-purple-900/30 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                  />
                  <Button className="bg-purple-600 hover:bg-purple-700 whitespace-nowrap">Subscribe</Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
