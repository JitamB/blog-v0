"use client"

import { useState, useEffect } from "react"
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  Twitter,
  Linkedin,
  Link2,
  ChevronUp,
  User,
  Reply,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const blogPost = {
  id: 1,
  title: "The Future of Digital Composition: How AI is Revolutionizing Creative Workflows",
  excerpt:
    "Exploring how AI and machine learning are revolutionizing the way we create and compose digital content in the modern era.",
  heroImage: {
    url: "/placeholder.svg?height=600&width=1200",
    alt: "Futuristic AI interface with glowing neural networks and digital art creation tools",
    caption: "AI-powered creative tools are transforming how we approach digital composition",
  },
  content: `
    <h2>Introduction</h2>
    <p>The landscape of digital composition is undergoing a fundamental transformation. As artificial intelligence and machine learning technologies mature, they're not just changing how we work—they're redefining what's possible in creative expression.</p>
    
    <p>In this comprehensive exploration, we'll dive deep into the current state of AI-powered creative tools, examine their impact on traditional workflows, and look ahead to what the future holds for digital artists, designers, and content creators.</p>
    
    <h2>The Current State of AI in Creative Work</h2>
    <p>Today's AI tools have moved far beyond simple automation. They're becoming creative partners, capable of understanding context, style, and intent. From generating initial concepts to refining final outputs, AI is integrated into every stage of the creative process.</p>
    
    <blockquote>
      "AI doesn't replace creativity—it amplifies it. The most successful creators are those who learn to collaborate with these new tools rather than compete against them."
    </blockquote>
    
    <h3>Key Areas of Impact</h3>
    <ul>
      <li><strong>Content Generation:</strong> AI can now produce high-quality text, images, and even video content based on simple prompts.</li>
      <li><strong>Style Transfer:</strong> Advanced algorithms can apply artistic styles across different mediums with unprecedented accuracy.</li>
      <li><strong>Workflow Optimization:</strong> Intelligent automation handles repetitive tasks, freeing creators to focus on high-level creative decisions.</li>
      <li><strong>Personalization:</strong> AI enables mass customization, creating unique variations for different audiences and contexts.</li>
    </ul>
    
    <h2>Transforming Traditional Workflows</h2>
    <p>The integration of AI into creative workflows isn't just about adding new tools—it's about fundamentally rethinking how creative work gets done. Traditional linear processes are giving way to more iterative, collaborative approaches where human creativity and machine intelligence work in harmony.</p>
    
    <p>Consider the typical design process: what once required hours of manual iteration can now be accomplished in minutes through AI-assisted generation and refinement. This doesn't diminish the value of human creativity; instead, it elevates it by removing barriers and expanding possibilities.</p>
    
    <h2>Looking Ahead: The Future Landscape</h2>
    <p>As we look to the future, several trends are emerging that will shape the next generation of creative tools and workflows:</p>
    
    <h3>Multimodal AI Systems</h3>
    <p>The next wave of AI tools will seamlessly work across different media types—text, image, audio, and video—creating truly integrated creative experiences.</p>
    
    <h3>Real-time Collaboration</h3>
    <p>AI will enable new forms of human-machine collaboration, with systems that can understand and respond to creative intent in real-time.</p>
    
    <h3>Ethical Considerations</h3>
    <p>As AI becomes more prevalent in creative work, questions of authorship, originality, and fair compensation become increasingly important. The creative community must work together to establish ethical guidelines and best practices.</p>
    
    <h2>Conclusion</h2>
    <p>The future of digital composition is bright, filled with possibilities we're only beginning to explore. By embracing AI as a creative partner rather than a replacement, we can unlock new levels of innovation and expression.</p>
    
    <p>The key is to remain curious, experimental, and always focused on the human element that makes creative work truly meaningful. After all, technology is just a tool—it's how we use it that creates magic.</p>
  `,
  author: {
    name: "Alex Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Creative technologist and AI researcher with over 10 years of experience in digital design and emerging technologies.",
    twitter: "@alexchen",
    linkedin: "alexchen",
  },
  date: "2024-01-15",
  readTime: "8 min read",
  category: "Technology",
  tags: ["AI", "Digital Art", "Innovation", "Future Tech"],
  likes: 142,
  bookmarks: 89,
  comments: 23,
}

const comments = [
  {
    id: 1,
    author: "Sarah Kim",
    avatar: "/placeholder.svg?height=32&width=32",
    content:
      "This is such an insightful piece! I've been experimenting with AI tools in my design workflow and the results have been incredible. The key point about AI being a creative partner rather than a replacement really resonates with me.",
    date: "2024-01-16",
    likes: 12,
    replies: [
      {
        id: 11,
        author: "Mike Rodriguez",
        avatar: "/placeholder.svg?height=32&width=32",
        content:
          "Completely agree, Sarah! I've found that the best results come from understanding how to prompt and guide the AI effectively. It's like learning a new creative language.",
        date: "2024-01-16",
        likes: 5,
      },
    ],
  },
  {
    id: 2,
    author: "Emma Thompson",
    avatar: "/placeholder.svg?height=32&width=32",
    content:
      "The section on ethical considerations is particularly important. As someone who's been in the creative industry for 15+ years, I think we need to have more conversations about how AI impacts creative professionals and fair compensation.",
    date: "2024-01-16",
    likes: 18,
    replies: [],
  },
  {
    id: 3,
    author: "David Park",
    avatar: "/placeholder.svg?height=32&width=32",
    content:
      "Great article! I'm curious about your thoughts on the learning curve for traditional artists adopting AI tools. Any recommendations for getting started?",
    date: "2024-01-17",
    likes: 7,
    replies: [],
  },
]

const relatedPosts = [
  {
    id: 2,
    title: "Minimalist Design Principles in the AI Era",
    excerpt: "How minimalist design principles adapt and evolve with AI-powered creative tools.",
    date: "2024-01-12",
    readTime: "5 min read",
    category: "Design",
  },
  {
    id: 3,
    title: "Building Interactive Experiences with AI",
    excerpt: "Creating engaging user experiences that leverage artificial intelligence for personalization.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Development",
  },
  {
    id: 4,
    title: "The Ethics of AI in Creative Work",
    excerpt: "Navigating the ethical implications of AI tools in creative industries.",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Technology",
  },
]

export default function BlogPostPage() {
  const [readingProgress, setReadingProgress] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [replyTo, setReplyTo] = useState<number | null>(null)
  const [replyContent, setReplyContent] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(progress)
      setShowScrollTop(scrollTop > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = blogPost.title

    switch (platform) {
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`)
        break
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
        break
      case "copy":
        navigator.clipboard.writeText(url)
        break
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-10">
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
        <header className="border-b border-purple-900/30 backdrop-blur-sm sticky top-0 bg-black/80">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.history.back()}
                className="text-gray-400 hover:text-white hover:bg-purple-900/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`${isLiked ? "text-red-400" : "text-gray-400"} hover:text-red-400`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`${isBookmarked ? "text-yellow-400" : "text-gray-400"} hover:text-yellow-400`}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Article Header */}
          <article className="mb-16">
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30">{blogPost.category}</Badge>
                {blogPost.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {blogPost.title}
              </h1>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-purple-500/30">
                    <AvatarImage src={blogPost.author.avatar || "/placeholder.svg"} alt={blogPost.author.name} />
                    <AvatarFallback className="bg-purple-900/50 text-purple-300">
                      {blogPost.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">{blogPost.author.name}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(blogPost.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blogPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {blogPost.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {blogPost.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bookmark className="w-4 h-4" />
                    {blogPost.bookmarks}
                  </span>
                </div>
              </div>

              {/* Social Share */}
              <div className="flex items-center gap-2 p-4 bg-gray-900/30 rounded-lg border border-purple-900/20">
                <span className="text-sm text-gray-400 mr-2">Share:</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare("twitter")}
                  className="text-gray-400 hover:text-blue-400"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare("linkedin")}
                  className="text-gray-400 hover:text-blue-600"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare("copy")}
                  className="text-gray-400 hover:text-purple-400"
                >
                  <Link2 className="w-4 h-4" />
                </Button>
              </div>
            </header>

            {/* Hero Image Section */}
            <div className="mb-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500" />
                <div className="relative overflow-hidden rounded-2xl border border-purple-900/30 bg-gray-900/20 backdrop-blur-sm">
                  <div className="aspect-video relative">
                    <img
                      src={blogPost.heroImage.url || "/placeholder.svg"}
                      alt={blogPost.heroImage.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: "brightness(0.9) contrast(1.1)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Image overlay with glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {blogPost.heroImage.caption && (
                    <div className="p-4 bg-gray-900/60 backdrop-blur-sm border-t border-purple-900/20">
                      <p className="text-sm text-gray-400 italic text-center">{blogPost.heroImage.caption}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-white prose-ul:text-gray-300 prose-li:mb-2 prose-blockquote:border-l-purple-500 prose-blockquote:bg-purple-900/10 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:text-purple-200 prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </article>

          {/* Author Bio */}
          <section className="mb-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300" />
              <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-purple-900/30">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16 border-2 border-purple-500/30">
                    <AvatarImage src={blogPost.author.avatar || "/placeholder.svg"} alt={blogPost.author.name} />
                    <AvatarFallback className="bg-purple-900/50 text-purple-300">
                      {blogPost.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">About {blogPost.author.name}</h3>
                    <p className="text-gray-300 mb-4">{blogPost.author.bio}</p>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-600/30 text-purple-300 hover:bg-purple-600/20"
                      >
                        <Twitter className="w-4 h-4 mr-2" />
                        {blogPost.author.twitter}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-600/30 text-purple-300 hover:bg-purple-600/20"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comments Section */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-white">Comments ({comments.length})</h3>

            {/* Add Comment */}
            <div className="mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl blur opacity-50" />
                <div className="relative bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-900/20">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-purple-900/50 text-purple-300">
                        <User className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Textarea
                        placeholder="Share your thoughts..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="bg-gray-900/50 border-purple-900/30 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 mb-4"
                        rows={3}
                      />
                      <Button className="bg-purple-600 hover:bg-purple-700" disabled={!newComment.trim()}>
                        Post Comment
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="group">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                    <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 group-hover:border-purple-900/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.author} />
                          <AvatarFallback className="bg-purple-900/50 text-purple-300">
                            {comment.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium text-white">{comment.author}</span>
                            <span className="text-sm text-gray-400">{new Date(comment.date).toLocaleDateString()}</span>
                          </div>
                          <p className="text-gray-300 mb-3 leading-relaxed">{comment.content}</p>
                          <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400 p-0">
                              <Heart className="w-4 h-4 mr-1" />
                              {comment.likes}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-400 hover:text-purple-400 p-0"
                              onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                            >
                              <Reply className="w-4 h-4 mr-1" />
                              Reply
                            </Button>
                          </div>

                          {/* Reply Form */}
                          {replyTo === comment.id && (
                            <div className="mt-4 pl-4 border-l-2 border-purple-900/30">
                              <div className="flex items-start gap-3">
                                <Avatar className="w-8 h-8">
                                  <AvatarFallback className="bg-purple-900/50 text-purple-300">
                                    <User className="w-4 h-4" />
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <Textarea
                                    placeholder={`Reply to ${comment.author}...`}
                                    value={replyContent}
                                    onChange={(e) => setReplyContent(e.target.value)}
                                    className="bg-gray-900/50 border-purple-900/30 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 mb-2"
                                    rows={2}
                                  />
                                  <div className="flex gap-2">
                                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                                      Reply
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => setReplyTo(null)}
                                      className="text-gray-400 hover:text-white"
                                    >
                                      Cancel
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Replies */}
                          {comment.replies && comment.replies.length > 0 && (
                            <div className="mt-4 pl-4 border-l-2 border-purple-900/20 space-y-4">
                              {comment.replies.map((reply) => (
                                <div key={reply.id} className="flex items-start gap-3">
                                  <Avatar className="w-8 h-8">
                                    <AvatarImage src={reply.avatar || "/placeholder.svg"} alt={reply.author} />
                                    <AvatarFallback className="bg-purple-900/50 text-purple-300">
                                      {reply.author
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="font-medium text-white text-sm">{reply.author}</span>
                                      <span className="text-xs text-gray-400">
                                        {new Date(reply.date).toLocaleDateString()}
                                      </span>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-2">{reply.content}</p>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-gray-400 hover:text-red-400 p-0 text-xs"
                                    >
                                      <Heart className="w-3 h-3 mr-1" />
                                      {reply.likes}
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Related Posts */}
          <section>
            <h3 className="text-2xl font-bold mb-8 text-white">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                    <div className="relative bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800 group-hover:border-purple-900/30 transition-all duration-300 h-full">
                      <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs mb-3">
                        {post.category}
                      </Badge>
                      <h4 className="text-lg font-semibold mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-400 mb-4 text-sm line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/25"
            size="icon"
          >
            <ChevronUp className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  )
}
