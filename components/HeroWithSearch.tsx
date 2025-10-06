import React, { useEffect, useState, useMemo, useRef } from 'react';
import { ChevronRight, MapPin, Calendar as CalIcon, Clock, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { addDays, endOfWeek, isBefore, isSameDay } from 'date-fns';
import { useSearchUI } from '@/SearchUIContext';

/* ---------------------- Date Picker ---------------------- */
function DatePicker({ label, value, onChange, minDate }: {
  label: string;
  value: Date | null;
  onChange: (d: Date | null) => void;
  minDate?: Date;
}) {
  const today = new Date();
  const isToday = value && isSameDay(value, today);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-white">{label}</label>
      <Popover>
        <PopoverTrigger asChild>
          <button className="w-full h-11 rounded-md border pl-10 pr-3 text-left relative bg-white/90 backdrop-blur focus:ring-2">
            <CalIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            {value ? value.toLocaleDateString() : 'dd-mm-yyyy'}
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-3 w-auto">
          <Calendar
            mode="single"
            selected={value ?? undefined}
            onSelect={(d) => onChange(d ?? null)}
            numberOfMonths={2}
            disabled={(date) => (minDate ? isBefore(date, minDate) : false)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

/* ---------------------- Main Hero ---------------------- */
const HeroWithSearch: React.FC = () => {
  const { searchType, setSearchType } = useSearchUI();

  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [pickupTime, setPickupTime] = useState<string>('');

  useEffect(() => {
    const now = new Date();
    setPickupDate(now);
    setReturnDate(addDays(now, 1));
    setPickupTime(`${String(now.getHours()).padStart(2, '0')}:00`);
  }, []);

  const services = [
    { value: 'self-drive', label: 'Self Drive Car' },
    { value: 'chauffeur',  label: 'Car with Driver' },
    { value: 'bike',       label: 'Bike Rental' },
    { value: 'luxury',     label: 'Luxury Cars' },
    { value: 'bus',        label: 'Bus Rental' },
    { value: 'truck',      label: 'Truck Rental' },
    { value: 'equipment',  label: 'Equipment Rental' },
    { value: 'movers',     label: 'Packers & Movers' },
  ];
  const topServices = services.slice(0, 5);
  const moreServices = services.slice(5);

  const cities = ['Mumbai','Delhi','Bangalore','Hyderabad','Chennai','Kolkata','Pune','Ahmedabad'];

  return (
    <section className="relative">
      {/* Curved Background */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-500 to-teal-500" />
        <div className="absolute inset-0 bg-[url('/curves/bg-wave.svg')] bg-cover opacity-30" />

        {/* Content */}
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Everything You Need On Wheels
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">
            Rent cars, bikes, buses, trucks & more from trusted vendors across India.
          </p>

          {/* Search Card */}
          <div className="mt-10 w-full max-w-5xl bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {topServices.map((s) => (
                <Button
                  key={s.value}
                  variant={searchType === s.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSearchType(s.value)}
                  className={searchType === s.value ? 'bg-emerald-600 text-white' : ''}
                >
                  {s.label}
                </Button>
              ))}
              <Select onValueChange={(v) => setSearchType(v)}>
                <SelectTrigger className="w-44">More Services</SelectTrigger>
                <SelectContent>
                  {moreServices.map((s) => (
                    <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr,1fr,1fr,1fr,auto] gap-4">
              {/* Pickup Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Pickup Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <Select>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city.toLowerCase()}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Pickup Date */}
              <DatePicker label="Pickup Date" value={pickupDate} onChange={setPickupDate} />

              {/* Pickup Time */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Pickup Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <Select value={pickupTime} onValueChange={setPickupTime}>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }, (_, i) => {
                        const v = `${String(i).padStart(2, '0')}:00`;
                        return <SelectItem key={v} value={v}>{v}</SelectItem>;
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Return Date */}
              <DatePicker label="Return Date" value={returnDate} onChange={setReturnDate} minDate={pickupDate ?? new Date()} />

              {/* Search Button */}
              <div className="flex items-end">
                <Button className="w-full h-11 bg-emerald-600 text-white hover:bg-emerald-700">
                  <Search className="w-4 h-4 mr-2" />
                  Search Vehicles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center text-sm text-white/90">
            <span className="font-semibold">Popular:</span>
            {['Mumbai to Pune','Delhi Airport','Bangalore Self Drive','Goa Tour Package','Corporate Taxi'].map((term, i) => (
              <button key={i} className="underline hover:text-yellow-200">{term}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithSearch;
