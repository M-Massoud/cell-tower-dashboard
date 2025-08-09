import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TowersTable from './index';
import type { CellTower } from '../../types/cellTower';

describe('TowersTable', () => {
  it('renders the table headers', () => {
    const towers: CellTower[] = [];
    render(<TowersTable towers={towers} isLoading={false} />);

    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/City/i)).toBeInTheDocument();
    expect(screen.getByText(/Network Type/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Signal Strength/i)).toBeInTheDocument();
  });

  it('shows empty state when no towers', () => {
    const towers: CellTower[] = [];
    render(<TowersTable towers={towers} isLoading={false} />);

    expect(screen.getByText(/No data/i)).toBeInTheDocument();
  });
});
