import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const branches = [
  {
    title: 'Head Office Chandigarh-Mohali',
    address: 'Chandigarh Group of College, Landran Mohali Punjab-140307,India',
    phone: '+91 98720 94149',
    email: 'info@dortexai.com',
  },
  {
    title: 'NOIDA Office',
    address: 'NOIDA, Uttar Pradesh, India',
    phone: '+91 98720 94149',
    email: 'info@dortexai.com',
  },
  {
    title: 'JAIPUR Office (Coming Soon)',
    address: 'Jaipur, Rajasthan, India',
    phone: '+91 98720 94149',
    email: 'info@dortexai.com',
  },
  {
    title: 'GURUGRAM Office (Coming Soon)',
    address: 'Gurugram, Haryana, India',
    phone: '+91 98720 94149',
    email: 'info@dortexai.com',
  },
];

export default function OurBranches() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl">
          Our Global Presence - Across India
          <div className="mt-1 h-1 w-48 bg-blue-600 mx-auto" />
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-500 md:text-xl lg:text-base xl:text-xl">
          Our custom, state-of-the-art office is in Chandigarh, Mohali. We are also going to open branches in NOIDA,
          JAIPUR, GURUGRAM Soon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
          {branches.map((branch, index) => (
            <Card key={index} variant="outlined" className="p-6 text-left">
              <CardContent>
                <Box display="flex" alignItems="center" className="text-xl font-semibold">
                  <MapPin className="mr-2 text-black" />
                  {branch.title}
                </Box>
                <Typography variant="body2" className="pt-3 text-gray-500 text-left">
                  {branch.address}
                </Typography>
                <Box mt={1} display="flex" flexDirection="column" gap={1}>
                  <Box display="flex" alignItems="center" className="text-sm">
                    <Phone className="mr-2 text-black" />
                    {branch.phone}
                  </Box>
                  <Box display="flex" alignItems="center" className="text-sm">
                    <Mail className="mr-2 text-black" />
                    {branch.email}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
