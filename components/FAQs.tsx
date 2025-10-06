import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQs = () => {
  const customerFAQs = [
    {
      question: 'How do I book a vehicle on TransRentals?',
      answer: 'Simply search for your desired vehicle, select dates, choose from available options, and complete the booking with secure payment.'
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel up to 2 hours before pickup. Cancellation charges may apply based on timing and vehicle type.'
    },
    {
      question: 'Is driver verification mandatory?',
      answer: 'All our drivers undergo thorough background verification including police clearance and document validation for your safety.'
    },
    {
      question: 'How do BackrCoins work?',
      answer: 'Earn coins on every booking and redeem them for discounts on future rides. Higher tier members earn more coins per booking.'
    }
  ];

  const vendorFAQs = [
    {
      question: 'How do I become a TransRentals vendor?',
      answer: 'Register online, complete KYC verification, add vehicle details, and start receiving bookings once approved.'
    },
    {
      question: 'What are the payout terms?',
      answer: 'Weekly payouts every Tuesday for completed trips. Earnings are transferred directly to your registered bank account.'
    },
    {
      question: 'How does the rating system work?',
      answer: 'Customer ratings impact your visibility and booking priority. Maintain 4+ rating for best results.'
    },
    {
      question: 'Are there any commission charges?',
      answer: 'We charge a competitive commission on successful bookings. Rates vary by vehicle type and booking volume.'
    }
  ];

  const corporateFAQs = [
    {
      question: 'Do you offer corporate billing solutions?',
      answer: 'Yes, we provide monthly consolidated billing, employee transport management, and dedicated account managers.'
    },
    {
      question: 'Can we integrate with our existing systems?',
      answer: 'We offer API integrations and white-label solutions for seamless integration with corporate systems.'
    },
    {
      question: 'What about bulk booking discounts?',
      answer: 'Corporate clients enjoy volume-based discounts, priority support, and customized service packages.'
    },
    {
      question: 'Is there 24/7 support for corporate clients?',
      answer: 'Yes, corporate clients get dedicated support with guaranteed response times and priority assistance.'
    }
  ];

  return (
    <section className="py-section bg-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <Badge variant="outline" className="text-sm px-3 py-1">
              Help Center
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about our services
          </p>
        </div>

        <Tabs defaultValue="customers" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="vendors">Vendors</TabsTrigger>
            <TabsTrigger value="corporate">Corporate</TabsTrigger>
          </TabsList>

          <TabsContent value="customers">
            <Accordion type="single" collapsible className="space-y-4">
              {customerFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`customer-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="vendors">
            <Accordion type="single" collapsible className="space-y-4">
              {vendorFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`vendor-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="corporate">
            <Accordion type="single" collapsible className="space-y-4">
              {corporateFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`corporate-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FAQs;