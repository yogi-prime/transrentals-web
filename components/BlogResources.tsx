import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, ArrowRight, Clock, User, Tag } from 'lucide-react';

const BlogResources = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Complete Guide to Self-Drive Car Rentals in India',
      category: 'Guides',
      excerpt: 'Everything you need to know about self-drive rentals, from booking to returning the vehicle safely.',
      author: 'Priya Sharma',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Vehicle Maintenance Checklist for Fleet Owners',
      category: 'Maintenance',
      excerpt: 'Essential maintenance tips to keep your fleet in top condition and maximize earnings.',
      author: 'Rajesh Kumar',
      date: 'Dec 12, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&h=250&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Safety First: Essential Travel Safety Tips',
      category: 'Safety',
      excerpt: 'Stay safe while traveling with these essential safety tips for passengers and drivers.',
      author: 'Dr. Anjali Mehta',
      date: 'Dec 10, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Best Cities for Car Rentals: Mumbai Guide',
      category: 'City Guides',
      excerpt: 'Explore Mumbai with confidence using our comprehensive car rental guide.',
      author: 'Vikram Joshi',
      date: 'Dec 8, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=250&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Electric Vehicles: The Future of Urban Mobility',
      category: 'Technology',
      excerpt: 'Discover how electric vehicles are revolutionizing urban transportation and rental services.',
      author: 'Arjun Nair',
      date: 'Dec 5, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=250&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Car Buying Guide: New vs Used Vehicles',
      category: 'Buying Guide',
      excerpt: 'Make informed decisions when purchasing vehicles for personal use or fleet expansion.',
      author: 'Neha Gupta',
      date: 'Dec 3, 2024',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop',
      featured: false
    }
  ];

  const categories = ['All', 'Guides', 'Safety', 'City Guides', 'Maintenance', 'Technology', 'Buying Guide'];

  return (
    <section className="py-section bg-gradient-subtle">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <Badge variant="outline" className="text-sm px-3 py-1">
              Knowledge Hub
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Blog & Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest guides, tips, and insights from the world of vehicle rentals
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="overflow-hidden border-2 border-primary/20 hover:shadow-premium transition-all duration-300">
            <div className="grid lg:grid-cols-2">
              <div 
                className="h-64 lg:h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${blogPosts[0].image})` }}
              >
                <div className="h-full bg-black/20 flex items-start justify-start p-6">
                  <Badge className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline">
                    <Tag className="w-3 h-3 mr-1" />
                    {blogPosts[0].category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h3>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Button className="gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="group cursor-pointer hover-lift border-2 hover:border-primary/20 transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div 
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button size="lg" className="gap-2">
            <BookOpen className="w-5 h-5" />
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Join 50,000+ readers who stay updated with our latest insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogResources;