import { render, screen, waitFor } from '@testing-library/react'
import { AllUnits } from '../app/components/AllUnits'

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: '1', number: 'A101', propertyId: 'prop1' },
      { id: '2', number: 'B202', propertyId: 'prop1' },
    ]),
  })
) as jest.Mock

describe('AllUnits', () => {
  it('renders the component with units', async () => {
    render(<AllUnits propertyId="prop1" />)

    await waitFor(() => {
      expect(screen.getByText('All Units')).toBeInTheDocument()
      expect(screen.getByText('A101')).toBeInTheDocument()
      expect(screen.getByText('B202')).toBeInTheDocument()
    })
  })

  it('displays loading state', () => {
    render(<AllUnits propertyId="prop1" />)
    expect(screen.getByText('Loading units...')).toBeInTheDocument()
  })

  it('handles fetch error', async () => {
    global.fetch = jest.fn(() => Promise.reject('API error')) as jest.Mock

    render(<AllUnits propertyId="prop1" />)

    await waitFor(() => {
      expect(screen.getByText('Error loading units')).toBeInTheDocument()
    })
  })
})

