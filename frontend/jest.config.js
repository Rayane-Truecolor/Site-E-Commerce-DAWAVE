import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AdminDeleteUser from './AdminDeleteUser';

describe('<AdminDeleteUser />', () => {
  it('should call the delete user API on clicking the delete button', async () => {
    const mockDeleteUser = jest.fn();
    const { getByText } = render(
      <AdminDeleteUser deleteUser={mockDeleteUser} />
    );

    const deleteButton = getByText('Supprimer');
    fireEvent.click(deleteButton);

    expect(mockDeleteUser).toHaveBeenCalled();
  });
});