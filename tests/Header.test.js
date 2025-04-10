// Header.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/Header';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    pathname: '/',
    push: jest.fn(),
  })),
}));

describe('<Header />', () => {
  it('renders the title correctly', () => {
    render(<Header />);
    const titleElement = screen.getByText('To-Do App');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    const activityLink = screen.getByText('Activity');
    const completedLink = screen.getByText('Completed');
    const priorityLink = screen.getByText('Priority');
    expect(activityLink).toBeInTheDocument();
    expect(completedLink).toBeInTheDocument();
    expect(priorityLink).toBeInTheDocument();
  });

  it('navigates to correct routes on click', () => {
    render(<Header />);
    const activityLink = screen.getByText('Activity');
    const completedLink = screen.getByText('Completed');
    const priorityLink = screen.getByText('Priority');
    fireEvent.click(activityLink);
    expect(useRouter().push).toHaveBeenCalledWith('/');
    fireEvent.click(completedLink);
    expect(useRouter().push).toHaveBeenCalledWith('/completed');
    fireEvent.click(priorityLink);
    expect(useRouter().push).toHaveBeenCalledWith('/contact');
  });

  it('applies hover styles on navigation links', () => {
    render(<Header />);
    const activityLink = screen.getByText('Activity');
    fireEvent.mouseEnter(activityLink);
    expect(activityLink).toHaveStyle('color: #ccc');
    fireEvent.mouseLeave(activityLink);
    expect(activityLink).toHaveStyle('color: inherit');
  });
});
