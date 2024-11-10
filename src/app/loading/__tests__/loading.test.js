// __tests__/LoadingScreen.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import { gsap } from 'gsap';
import LoadingScreen from '"./loading/page";'; // Adjust this path as needed

jest.mock('gsap'); // Mock GSAP to prevent animations during tests

describe('LoadingScreen', () => {
  it('renders the circle and content', () => {
    render(<LoadingScreen onComplete={() => {}} />);

    // Check if the circle is rendered
    const circleElement = screen.getByRole('figure');
    expect(circleElement).toBeInTheDocument();

    // Check if the content is rendered
    const contentElement = screen.getByText(/Huddle.../i);
    expect(contentElement).toBeInTheDocument();
  });

  it('initially hides the circle and content', () => {
    render(<LoadingScreen onComplete={() => {}} />);

    const circleElement = screen.getByRole('figure');
    const contentElement = screen.getByText(/Huddle.../i);

    // Check if circle is initially scaled down (hidden)
    expect(circleElement).toHaveStyle({ transform: 'scale(0)' });

    // Check if content is initially hidden
    expect(contentElement).toHaveStyle({ opacity: '0' });
  });

  it('scales in the circle and fades in the content after 1.5s', async () => {
    render(<LoadingScreen onComplete={() => {}} />);

    // Simulate the animation after mounting
    await waitFor(() => {
      expect(gsap.to).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          scale: 1,
          autoAlpha: 1,
          duration: 1.5,
          ease: "power2.out",
        })
      );
    });

    const contentElement = screen.getByText(/Huddle.../i);
    expect(contentElement).toHaveStyle({ opacity: '1' });
  });

  it('calls onComplete after animation finishes', async () => {
    const onCompleteMock = jest.fn();
    render(<LoadingScreen onComplete={onCompleteMock} />);

    // Trigger the GSAP animation mock and delay
    await waitFor(() => {
      expect(gsap.to).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          scale: 2.0,
          autoAlpha: 0,
          duration: 1,
          delay: 5,
        })
      );
    });

    // Check if onComplete function is called after the animation
    await waitFor(() => {
      expect(onCompleteMock).toHaveBeenCalled();
    });
  });
});
