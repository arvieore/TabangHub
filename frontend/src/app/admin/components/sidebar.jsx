"use client";
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import GroupIcon from '@mui/icons-material/Group';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      {/* Toggle Button */}
      <IconButton
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        className={`fixed top-4 left-4 z-50 text-white bg-[#00df9a] hover:bg-[#3EFCC1] focus:outline-none rounded-full shadow-md ${
          isOpen ? 'translate-x-64' : ''
        } transition-transform`}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-40 shadow-lg`}
      >
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-xl font-semibold">Tabang Hub</h1>
          <p className="text-sm text-gray-400">Welcome, Admin!</p>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <a
                href="/admin/dashboard"
                className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                <DashboardIcon />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/manage-account"
                className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                <GroupIcon />
                <span>Manage Account</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/eventlist"
                className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                <EventNoteIcon />
                <span>Events</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/reports"
                className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                <AssessmentIcon />
                <span>Reports</span>
              </a>
            </li>
            <li>
              <a
                href="/settings"
                className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                <SettingsIcon />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a
                href="/help"
                className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                <HelpIcon />
                <span>Help</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </div>
  );
};
export default Sidebar;