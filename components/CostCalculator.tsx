import React, { useState } from 'react';
import { Calculator, Clock, MapPin, Fuel, DollarSign, User, ParkingCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CostCalculator = () => {
  const [formData, setFormData] = useState({
    service: '',
    duration: '',
    distance: '',
    city: '',
    driverNeeded: false
  });
  
  const [estimate, setEstimate] = useState(null);

  const serviceTypes = [
    { value: 'self-drive', label: 'Self Drive Car', baseRate: 12 },
    { value: 'chauffeur', label: 'Car with Driver', baseRate: 18 },
    { value: 'bike', label: 'Bike Rental', baseRate: 5 },
    { value: 'luxury', label: 'Luxury Car', baseRate: 50 },
    { value: 'bus', label: 'Bus Rental', baseRate: 25 },
    { value: 'truck', label: 'Truck Rental', baseRate: 30 }
  ];

  const cities = [
    { value: 'mumbai', label: 'Mumbai', multiplier: 1.2 },
    { value: 'delhi', label: 'Delhi', multiplier: 1.1 },
    { value: 'bangalore', label: 'Bangalore', multiplier: 1.0 },
    { value: 'hyderabad', label: 'Hyderabad', multiplier: 0.9 },
    { value: 'chennai', label: 'Chennai', multiplier: 0.95 },
    { value: 'pune', label: 'Pune', multiplier: 0.85 }
  ];

  const calculateEstimate = () => {
    if (!formData.service || !formData.duration || !formData.distance || !formData.city) {
      return;
    }

    const service = serviceTypes.find(s => s.value === formData.service);
    const city = cities.find(c => c.value === formData.city);
    
    const baseRate = service.baseRate;
    const duration = parseInt(formData.duration);
    const distance = parseInt(formData.distance);
    const cityMultiplier = city.multiplier;

    // Base calculation
    const baseCost = baseRate * duration * cityMultiplier;
    
    // Additional costs
    const fuelCost = distance * 6; // ₹6 per km fuel
    const tollCost = Math.floor(distance / 100) * 150; // ₹150 per 100km toll estimate
    const driverCost = formData.driverNeeded ? duration * 8 : 0; // ₹8 per hour for driver
    const parkingCost = duration > 4 ? 200 : 100; // Parking estimate

    const subtotal = baseCost + fuelCost + tollCost + driverCost + parkingCost;
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + tax;

    const estimateData = {
      baseCost: Math.round(baseCost),
      fuelCost: Math.round(fuelCost),
      tollCost: Math.round(tollCost),
      driverCost: Math.round(driverCost),
      parkingCost: Math.round(parkingCost),
      subtotal: Math.round(subtotal),
      tax: Math.round(tax),
      total: Math.round(total)
    };

    setEstimate(estimateData);
  };

  return (
    <div className="bg-gradient-hero py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Smart Cost Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get transparent pricing estimates before you book. Plan your budget with confidence.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="card-premium p-6">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Trip Details</h3>
            </div>

            <div className="space-y-6">
              {/* Service Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Service Type</label>
                <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                  <SelectTrigger className="focus-premium">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label} - ₹{service.baseRate}/hr
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Duration */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Duration (Hours)</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder="8"
                      className="pl-10 focus-premium"
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    />
                  </div>
                </div>

                {/* Distance */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Distance (KM)</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder="100"
                      className="pl-10 focus-premium"
                      value={formData.distance}
                      onChange={(e) => setFormData({...formData, distance: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* City */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">City</label>
                <Select value={formData.city} onValueChange={(value) => setFormData({...formData, city: value})}>
                  <SelectTrigger className="focus-premium">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.value} value={city.value}>
                        {city.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Driver Option */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="driver"
                  className="w-4 h-4 rounded border-border focus:ring-primary"
                  checked={formData.driverNeeded}
                  onChange={(e) => setFormData({...formData, driverNeeded: e.target.checked})}
                />
                <label htmlFor="driver" className="text-sm font-medium text-foreground">
                  Add Professional Driver (+₹8/hr)
                </label>
              </div>

              <Button 
                onClick={calculateEstimate}
                className="w-full btn-premium"
                disabled={!formData.service || !formData.duration || !formData.distance || !formData.city}
              >
                Calculate Estimate
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {estimate ? (
              <div className="card-premium p-6">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Cost Breakdown</h3>
                </div>

                <div className="space-y-4">
                  {/* Cost Items */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Base Rental</span>
                      </div>
                      <span className="font-medium text-foreground">₹{estimate.baseCost}</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Fuel className="w-4 h-4" />
                        <span>Fuel Cost</span>
                      </div>
                      <span className="font-medium text-foreground">₹{estimate.fuelCost}</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>Toll & Highway</span>
                      </div>
                      <span className="font-medium text-foreground">₹{estimate.tollCost}</span>
                    </div>
                    
                    {estimate.driverCost > 0 && (
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          <span>Driver Charges</span>
                        </div>
                        <span className="font-medium text-foreground">₹{estimate.driverCost}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ParkingCircle className="w-4 h-4" />
                        <span>Parking (Est.)</span>
                      </div>
                      <span className="font-medium text-foreground">₹{estimate.parkingCost}</span>
                    </div>
                  </div>

                  <div className="border-t border-border/30 pt-3">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-muted-foreground">Subtotal</span>
                      <span className="font-medium text-foreground">₹{estimate.subtotal}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-muted-foreground">GST (18%)</span>
                      <span className="font-medium text-foreground">₹{estimate.tax}</span>
                    </div>
                  </div>

                  <div className="border-t border-border/30 pt-3">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-lg font-bold text-foreground">Total Estimate</span>
                      <span className="text-2xl font-bold text-primary">₹{estimate.total}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/30">
                  <p className="text-xs text-muted-foreground text-center mb-4">
                    *Estimates are for planning purposes. Final price will be confirmed during booking.
                  </p>
                  <Button className="w-full btn-premium">
                    Book Now at This Rate
                  </Button>
                </div>
              </div>
            ) : (
              <div className="card-premium p-8 text-center">
                <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Ready to Calculate?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fill in your trip details to get an accurate cost estimate
                </p>
              </div>
            )}

            {/* Features */}
            <div className="card-premium p-6">
              <h4 className="font-bold text-foreground mb-4">Why Our Calculator?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">Transparent pricing with no hidden charges</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">Real-time rates based on current market prices</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">Includes all major cost components</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">City-specific pricing adjustments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;