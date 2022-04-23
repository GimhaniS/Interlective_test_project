import { HomeScreen } from '../HomeScreen';
import React from 'react';
import { render, fireEvent } from '@testing-library/jest-native';

describe('Home screen', () => {
  it('should go to cart screen on cart icon', () => {
    const navigation = { navigation: () => {} };
    spyOn(navigation, 'navigate');

    const page = render(<HomeScreen navigation={navigation} />);
    const cartIcon = page.getByTestId('cartIcon');

    fireEvent.press(cartIcon);
    expect(navigation).toHaveBeenCalledWith('CartScreen');
  });
});
