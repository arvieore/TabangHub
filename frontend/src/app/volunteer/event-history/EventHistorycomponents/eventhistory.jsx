import React from 'react';
import { Box, Typography, Chip, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockIcon from '@mui/icons-material/Lock';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Image from 'next/image';

export default function History() {
  return (
    <div className="max-w-5xl mx-auto mt-[100px] mb-6 bg-slate-100 rounded-xl py-6">
      <Typography variant='h4' className='text-center mb-6'>
        Event History
      </Typography>

      {/* Tree Planting */}
      <Box className="flex bg-white rounded-lg shadow-md p-4 max-w-4xl mx-auto">
        {/* Image */}
        <div className="mr-4">
          <Image
            src="/Planting.jpg"
            alt="Tree Planting"
            width={300}
            height={300}
            className="rounded-lg object-cover mt-4"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <Typography variant="h6" className="font-semibold">
            Tree Planting Initiative
          </Typography>

          {/* Location */}
          <Box className="flex items-center mt-1">
            <LocationOnIcon className="text-gray-500" />
            <Typography variant="body2" className="ml-2">
              Greenfield Park, Lapu-Lapu City, Cebu
            </Typography>
          </Box>

          {/* Description */}
          <Box className="flex items-center mt-2">
            <LockIcon className="text-gray-500" />
            <Typography variant="body2" className="ml-2">
              Assisted in planting over 100 trees as part of an environmental conservation effort.
              <br />
              Provided guidance to new volunteers on proper planting techniques.
            </Typography>
          </Box>

          {/* Date Range */}
          <Box className="flex items-center mt-2">
            <DateRangeIcon className="text-gray-500" />
            <Typography variant="body2" className="ml-2">
              Start Date: 5/4/2024 1:00:00 PM
            </Typography>
          </Box>
          <Box className="flex items-center mt-2">
            <DateRangeIcon className="text-gray-500" />
            <Typography variant="body2" className="ml-2">
              End Date: 5/15/2024 11:59:00 PM
            </Typography>
          </Box>

          {/* Skills */}
          <Box className="flex items-center mt-2">
            <Typography variant="body2" className="font-semibold mr-2">
              Skills Utilized:
            </Typography>
            <Chip label="Planting" className="mr-2" />
            <Chip label="Team Building" className="mr-2" />
          </Box>
        </div>
      </Box>

      {/* Donation */}
      <Box className="flex bg-white rounded-lg shadow-md p-4 max-w-4xl mx-auto mt-6">
        {/* Image */}
        <div className="mr-4">
          <Image
            src="/Donation.jpg"
            alt="Donation Drive"
            width={300}
            height={300}
            className="rounded-lg object-cover mt-4"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <Typography variant="h6" className="font-semibold">
            Community Donation Drive
          </Typography>

          {/* Location */}
          <Box className="flex items-center mt-1">
            <LocationOnIcon className="text-gray-500" />
            <Typography variant="body2" className="ml-2">
              Community Hall, Lapu-Lapu City, Cebu
            </Typography>
          </Box>

          {/* Description */}
          <Box className="flex items-center mt-2">
            <LockIcon className="text-gray-500" />
            <Typography variant="body2" className="ml-2">
              Organized a donation drive to collect essential supplies for families in need.
              <br />
              Successfully distributed clothing, food, and hygiene kits to over 200 families.
            </Typography>
          </Box>

          {/* Date Range */}
          <Box className="flex items-center mt-2">
            <DateRangeIcon className="text-gray-500" />
            <Typography variant="body2" className="ml-2">
              Start Date: 7/15/2024 9:00:00 AM
            </Typography>
          </Box>
          <Box className="flex items-center mt-2">
            <DateRangeIcon className="text-gray-500" />
            <Typography variant="body2" className="ml-2">
              End Date: 7/18/2024 5:00:00 PM
            </Typography>
          </Box>

          {/* Skills */}
          <Box className="flex items-center mt-2">
            <Typography variant="body2" className="font-semibold mr-2">
              Skills Utilized:
            </Typography>
            <Chip label="Logistics" className="mr-2" />
            <Chip label="Team Coordination" className="mr-2" />
          </Box>
        </div>
      </Box>

      {/*  Cleaning */}
      <Box className="flex bg-white rounded-lg shadow-md p-4 max-w-4xl mx-auto mt-6">
        {/* Image */}
        <div className="mr-4">
          <Image
            src="/Cleaning.jpg"
            alt="Community Cleaning"
            width={300}
            height={300}
            className="rounded-lg object-cover mt-4"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <Typography variant="h6" className="font-semibold">
            Community Cleaning Initiative
          </Typography>

          {/* Location */}
          <Box className="flex items-center mt-1">
            <LocationOnIcon className="text-gray-500" />
            <Typography variant="body2" className="ml-2">
              Central Plaza, Lapu-Lapu City, Cebu
            </Typography>
          </Box>

          {/* Description */}
          <Box className="flex items-center mt-2">
            <LockIcon className="text-gray-500" />
            <Typography variant="body2" className="ml-2">
              Led a group of volunteers in cleaning up public areas and parks.
              <br />
              Collected over 50 bags of trash and raised awareness about the importance of waste management.
            </Typography>
          </Box>

          {/* Date Range */}
          <Box className="flex items-center mt-2">
            <DateRangeIcon className="text-gray-500" />
            <Typography variant="body2" className="ml-2">
              Start Date: 8/12/2024 7:00:00 AM
            </Typography>
          </Box>
          <Box className="flex items-center mt-2">
            <DateRangeIcon className="text-gray-500" />
            <Typography variant="body2" className="ml-2">
              End Date: 8/12/2024 12:00:00 PM
            </Typography>
          </Box>

          {/* Skills */}
          <Box className="flex items-center mt-2">
            <Typography variant="body2" className="font-semibold mr-2">
              Skills Utilized:
            </Typography>
            <Chip label="Waste Management" className="mr-2" />
            <Chip label="Leadership" className="mr-2" />
          </Box>
        </div>
      </Box>

      {/* Pagination */}
      <Box className="flex justify-center mt-6">
        <Button variant="outlined" color="primary" className="mr-2">
          Previous
        </Button>
        <Button variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </div>
  );
}
