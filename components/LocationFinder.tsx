import React, { useState } from 'react';
import { MapPin, Navigation, Search, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LocationFinder = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const popularCities = [
    { name: 'Mumbai', state: 'Maharashtra', vehicles: 2500, isHot: true },
    { name: 'Delhi', state: 'Delhi', vehicles: 2200, isHot: true },
    { name: 'Bangalore', state: 'Karnataka', vehicles: 1800, isHot: true },
    { name: 'Hyderabad', state: 'Telangana', vehicles: 1500, isHot: false },
    { name: 'Chennai', state: 'Tamil Nadu', vehicles: 1200, isHot: false },
    { name: 'Kolkata', state: 'West Bengal', vehicles: 1000, isHot: false },
    { name: 'Pune', state: 'Maharashtra', vehicles: 950, isHot: true },
    { name: 'Ahmedabad', state: 'Gujarat', vehicles: 800, isHot: false },
    { name: 'Jaipur', state: 'Rajasthan', vehicles: 650, isHot: false },
    { name: 'Surat', state: 'Gujarat', vehicles: 500, isHot: false },
    { name: 'Lucknow', state: 'Uttar Pradesh', vehicles: 450, isHot: false },
    { name: 'Kanpur', state: 'Uttar Pradesh', vehicles: 350, isHot: false },
  ];

  const stateHubs = [
    { state: 'Maharashtra', cities: 8, vehicles: 4200 },
    { state: 'Karnataka', cities: 6, vehicles: 2800 },
    { state: 'Tamil Nadu', cities: 7, vehicles: 2500 },
    { state: 'Gujarat', cities: 5, vehicles: 2200 },
    { state: 'Uttar Pradesh', cities: 12, vehicles: 2000 },
    { state: 'Rajasthan', cities: 6, vehicles: 1500 },
    { state: 'West Bengal', cities: 4, vehicles: 1200 },
    { state: 'Telangana', cities: 3, vehicles: 1800 },
  ];

  return (
    <div className="bg-gradient-hero py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Services Near You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover available vehicles and services in your city or explore our pan-India coverage
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Location Search & Popular Cities */}
          <div className="space-y-8">
            {/* Quick Location Search */}
            <div className="card-premium p-6">
              <div className="flex items-center gap-3 mb-4">
                <Navigation className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Quick Location Search</h3>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Enter your city name..."
                    className="pl-10 focus-premium"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button className="btn-premium flex-1">
                    <MapPin className="w-4 h-4 mr-2" />
                    Search Services
                  </Button>
                  <Button variant="outline" className="btn-secondary-premium">
                    Use Current Location
                  </Button>
                </div>
              </div>
            </div>

            {/* Popular Cities Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground">Popular Cities</h3>
                <Button variant="link" className="text-primary hover:text-accent">
                  View All Cities A-Z →
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {popularCities.map((city, index) => (
                  <div
                    key={index}
                    className="relative bg-gradient-card border border-border/50 rounded-xl p-4 hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedCity(city.name)}
                  >
                    {city.isHot && (
                      <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                        <TrendingUp className="w-3 h-3 inline mr-1" />
                        Hot
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {city.name}
                        </div>
                        <div className="text-xs text-muted-foreground">{city.state}</div>
                      </div>
                      <div className="text-sm text-primary font-medium">
                        {city.vehicles}+ vehicles
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Visualization & State Coverage */}
          <div className="space-y-8">
            {/* Mock Map Heatline */}
            <div className="card-premium p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Coverage Heatmap</h3>
              </div>
              
              {/* Simplified India Map Representation */}
              <div className="relative bg-muted/20 rounded-xl p-8 h-64 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🗺️</div>
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-foreground">Pan-India Coverage</div>
                    <div className="text-sm text-muted-foreground">
                      50+ Cities • 28 States • 8 Union Territories
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span>High Demand</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span>Available</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-muted rounded-full"></div>
                      <span>Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* State-wise Coverage */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">State Coverage</h3>
              <div className="space-y-3">
                {stateHubs.map((state, index) => (
                  <div key={index} className="bg-gradient-card border border-border/50 rounded-lg p-4 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground">{state.state}</div>
                        <div className="text-sm text-muted-foreground">
                          {state.cities} cities covered
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">
                          {state.vehicles}+
                        </div>
                        <div className="text-xs text-muted-foreground">vehicles</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full btn-secondary-premium">
                View Complete Coverage Map
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-foreground">City Not Listed?</div>
                <div className="text-sm text-muted-foreground">Request coverage in your area</div>
              </div>
              <Button variant="outline" size="sm" className="btn-secondary-premium">
                Request Coverage
              </Button>
            </div>
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full text-accent">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Become a Partner</div>
                <div className="text-sm text-muted-foreground">List your vehicles in new cities</div>
              </div>
              <Button variant="outline" size="sm" className="btn-secondary-premium">
                Partner with Us
              </Button>
            </div>
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 rounded-full text-success">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Route Planner</div>
                <div className="text-sm text-muted-foreground">Plan intercity trips with us</div>
              </div>
              <Button variant="outline" size="sm" className="btn-secondary-premium">
                Plan Route
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationFinder;