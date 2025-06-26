import React, { useState, useMemo } from 'react';
import { Input } from './ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface AppointmentFormProps {
  services: { title: string }[];
}

interface AppointmentFormErrors {
  clientName?: string;
  email?: string;
  countryCode?: string;
  phone?: string;
  date?: string;
  time?: string;
  service?: string;
  dateInput?: string;
}

const TIME_SLOTS = [
  '9:00 AM – 10:00 AM',
  '10:00 AM – 11:00 AM',
  '11:00 AM – 12:00 PM',
  '12:00 PM – 1:00 PM',
  '1:00 PM – 2:00 PM',
  '2:00 PM – 3:00 PM',
  '3:00 PM – 4:00 PM',
  '4:00 PM – 5:00 PM',
  '5:00 PM – 6:00 PM',
  '6:00 PM – 7:00 PM',
  '7:00 PM – 8:00 PM',
];

// Helper to get the start time of a slot as a Date object (today)
function getSlotStartDate(slot, baseDate) {
  // slot: '9:00 AM – 10:00 AM'
  const [start] = slot.split('–')[0].split('-');
  const timeStr = start.trim();
  const [time, meridian] = timeStr.split(' ');
  const [hoursRaw, minutesRaw] = time.split(':').map(Number);
  let hours = hoursRaw;
  const minutes = minutesRaw;
  if (meridian === 'PM' && hours !== 12) hours += 12;
  if (meridian === 'AM' && hours === 12) hours = 0;
  const date = new Date(baseDate);
  date.setHours(hours, minutes, 0, 0);
  return date;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ services }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    date: undefined as Date | undefined,
    time: '',
    service: '',
    dateInput: '',
  });
  const [errors, setErrors] = useState<AppointmentFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [calendarOpen, setCalendarOpen] = useState(false);

  // Compute which slots are available for the selected date
  const availableTimeSlots = useMemo(() => {
    if (!formData.date) return TIME_SLOTS.map(slot => ({ slot, disabled: false }));
    const today = new Date();
    const isToday =
      formData.date.getDate() === today.getDate() &&
      formData.date.getMonth() === today.getMonth() &&
      formData.date.getFullYear() === today.getFullYear();
    if (!isToday) return TIME_SLOTS.map(slot => ({ slot, disabled: false }));
    return TIME_SLOTS.map(slot => {
      const slotStart = getSlotStartDate(slot, today);
      return { slot, disabled: slotStart <= today };
    });
  }, [formData.date]);

  const validate = () => {
    const newErrors: AppointmentFormErrors = {};
    if (!formData.clientName.trim()) newErrors.clientName = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.countryCode.trim()) newErrors.countryCode = 'Country code required';
    else if (!/^\+\d{1,4}$/.test(formData.countryCode)) newErrors.countryCode = 'Invalid code';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter 10 digit number';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.service) newErrors.service = 'Service is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, dateInput: value }));
    const parsed = new Date(value);
    if (!isNaN(parsed.getTime())) {
      setFormData(prev => ({ ...prev, date: parsed }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const templateParams = {
        client_name: formData.clientName,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        date: formData.date ? formData.date.toLocaleDateString() : '',
        time: formData.time,
        service: formData.service,
        to_name: 'Sethulekshmi',
      };
      await emailjs.send(
        'service_w0r0su9',
        'template_ekaw6fo',
        templateParams,
        'db9dvFkpMZOqBg8u-'
      );
      toast({
        title: 'Appointment Request Sent!',
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
      setFormData({ clientName: '', email: '', countryCode: '+91', phone: '', date: undefined, time: '', service: '', dateInput: '' });
      setErrors({});
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send appointment request. Please try again or call us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-xl mx-auto shadow-lg border-primary/20">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">Book an Appointment</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="clientName" className="block text-sm font-medium text-foreground mb-2">
                Your Name *
              </label>
              <Input
                id="clientName"
                name="clientName"
                required
                value={formData.clientName}
                onChange={handleChange}
                placeholder="Enter your Name"
                disabled={isSubmitting}
              />
              {errors.clientName && <p className="text-red-500 text-xs mt-1">{errors.clientName}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <div className="flex gap-2">
                <Input
                  id="countryCode"
                  name="countryCode"
                  required
                  value={formData.countryCode}
                  onChange={handleChange}
                  placeholder="+91"
                  disabled={isSubmitting}
                  className="w-20"
                  maxLength={4}
                />
                <Input
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  disabled={isSubmitting}
                  className="flex-1"
                  maxLength={10}
                />
              </div>
              {errors.countryCode && <p className="text-red-500 text-xs mt-1">{errors.countryCode}</p>}
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Date *</label>
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <div className="relative flex items-center">
                  <Input
                    type="text"
                    value={formData.date ? formData.date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : ''}
                    readOnly
                    placeholder="Select Date"
                    disabled={isSubmitting}
                    className="pr-10"
                  />
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary"
                      tabIndex={-1}
                      aria-label="Pick date"
                    >
                      <CalendarIcon size={20} />
                    </button>
                  </PopoverTrigger>
                </div>
                <PopoverContent align="start" className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={date => {
                      setFormData(prev => ({ ...prev, date, dateInput: date ? date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '' }));
                      setCalendarOpen(false);
                    }}
                    disabled={isSubmitting}
                    fromDate={new Date()}
                  />
                </PopoverContent>
              </Popover>
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Time *</label>
              <Select
                value={formData.time}
                onValueChange={val => handleSelectChange('time', val)}
                disabled={isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent>
                  {availableTimeSlots.map(({ slot, disabled }) => (
                    <SelectItem key={slot} value={slot} disabled={disabled}>{slot}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Service *</label>
            <Select
              value={formData.service}
              onValueChange={val => handleSelectChange('service', val)}
              disabled={isSubmitting}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                {services.map(service => (
                  <SelectItem key={service.title} value={service.title}>{service.title}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
          </div>
          <motion.button
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
            {isSubmitting ? 'Sending...' : 'Send Appointment Request'}
          </motion.button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AppointmentForm; 